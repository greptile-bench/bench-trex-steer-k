import http from 'node:http'

const page = `<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Split a bill</title></head>
  <body>
    <h1>Split a bill</h1>
    <form id="split">
      <label>Total <input id="total" type="number" min="0" step="0.01" required></label>
      <label>People <input id="people" type="number" min="1" step="1" value="2" required></label>
      <label>Tip % <input id="tip" type="number" min="0" step="1" value="10"></label>
      <button type="submit">Split</button>
    </form>
    <p id="result" aria-live="polite"></p>
    <script>
      document.getElementById('split').addEventListener('submit', (event) => {
        event.preventDefault()
        const total = Number(document.getElementById('total').value)
        const people = Number(document.getElementById('people').value)
        const tip = Number(document.getElementById('tip').value || 0)
        const each = (total * (1 + tip / 100)) / people
        document.getElementById('result').textContent = 'Each person pays ' + each.toFixed(2)
      })
    </script>
  </body>
</html>`

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.setHeader('content-type', 'text/html; charset=utf-8')
      return res.end(page)
    }
    res.end('ok')
  })
  .listen(Number(process.env.PORT ?? 3000))
