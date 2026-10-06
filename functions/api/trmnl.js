// GET /api/trmnl[?max=600]
// Polling endpoint for the TRMNL "LinkedIn Mad Libs" plugin. Generates one random
// post server-side from the same templates.js + wordbank.js the site uses.
// `max` caps the post length (chars) so it fits the 800x480 e-ink screen.
import wordBank from '../../wordbank.js';
import { templates, bankFor, drawValue } from '../../templates.js';

const SITE_URL = 'https://linkedinmadlibs.com';
const DEFAULT_MAX = 600;
const MIN_MAX = 150;
const ATTEMPTS = 25;

// Fields that have templates but no wordBank entry (site leaves them blank).
const FALLBACKS = { years: ['3', '5', '7', '10', '12', '15', '20'] };

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function generate() {
  const template = pick(templates);
  const values = {};
  const used = new Set();
  for (const field of template.fields) {
    const options = bankFor(field, wordBank) || FALLBACKS[field.id];
    if (!options) continue;
    values[field.id] = drawValue(field, options, used);
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
