# /api/trmnl

Polling endpoint for the TRMNL plugin, which lives in
https://github.com/smaniktahla/linkedin-madlibs-trmnl. `GET /api/trmnl[?max=600]` returns one
random post as JSON, generated from `templates.js` + `wordbank.js`. `max` caps length in characters
(default 600, min 150). Local test: `npx wrangler pages dev . --compatibility-date=2026-10-06`.
