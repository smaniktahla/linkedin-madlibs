// GET /api/trmnl[?max=600]
// Polling endpoint for the TRMNL "LinkedIn Mad Libs" plugin. Generates one random
// post server-side from the same templates.js + wordbank.js the site uses.
// `max` caps the post length (chars) so it fits the 800x480 e-ink screen.
import wordBank from '../../wordbank.js';
import { templates, MULTI_PICK_FIELDS } from '../../templates.js';

const SITE_URL = 'https://linkedinmadlibs.com';
const DEFAULT_MAX = 600;
const MIN_MAX = 150;
const ATTEMPTS = 25;

// Fields that have templates but no wordBank entry (site leaves them blank).
const FALLBACKS = { years: ['3', '5', '7', '10', '12', '15', '20'] };

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function pickList(arr, min, max) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const pool = [...arr];
  const chosen = [];
  for (let i = 0; i < count && pool.length; i++) {
    chosen.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  }
  if (chosen.length === 1) return chosen[0];
  return `${chosen.slice(0, -1).join(', ')}, and ${chosen[chosen.length - 1]}`;
}

function generate() {
  const template = pick(templates);
  const values = {};
  for (const field of template.fields) {
    const options = wordBank[field.id] || FALLBACKS[field.id];
    if (!options) continue;
    values[field.id] = MULTI_PICK_FIELDS[field.id]
      ? pickList(options, ...MULTI_PICK_FIELDS[field.id])
      : pick(options);
  }
  return { label: template.label, text: template.render(values) };
}

export async function onRequestGet({ request }) {
  const requested = parseInt(new URL(request.url).searchParams.get('max'), 10);
  const max = Number.isFinite(requested) ? Math.max(requested, MIN_MAX) : DEFAULT_MAX;

  // Rejection-sample: keep drawing until a post fits, else take the shortest seen.
  let best = null;
  for (let i = 0; i < ATTEMPTS; i++) {
    const post = generate();
    if (!best || post.text.length < best.text.length) best = post;
    if (post.text.length <= max) { best = post; break; }
  }

  return new Response(JSON.stringify({
    template: best.label,
    text: best.text,
    paragraphs: best.text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean),
    length: best.text.length,
    url: SITE_URL,
    display_url: 'linkedinmadlibs.com',
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // TRMNL polls on a schedule; every poll must get a fresh post.
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
