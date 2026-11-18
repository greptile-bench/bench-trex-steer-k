import http from 'node:http'

const started = Date.now()

http
  .createServer((req, res) => {
    if (req.url === '/health') {
      res.setHeader('content-type', 'application/json')
      return res.end(JSON.stringify({ ok: true, uptimeSeconds: Math.round((Date.now() - started) / 1000) }))
    }
    res.end('ok')
  })
  .listen(Number(process.env.PORT ?? 3000))
