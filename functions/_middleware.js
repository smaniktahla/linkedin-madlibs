// Serve the horoscope page at / for any hostname starting with "horoscope" or
// "stars" (e.g. a second domain pointed at this Pages project). Other hosts
// pass through untouched.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname === '/' && /^(www\.)?(horoscope|stars)/i.test(url.hostname)) {
    url.pathname = '/horoscope.html';
    return context.env.ASSETS.fetch(new Request(url, context.request));
  }
  return context.next();
}
