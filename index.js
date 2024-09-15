addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch('index.html')
  return new Response(response.body, {
    headers: { 'content-type': 'text/html' },
  })
}