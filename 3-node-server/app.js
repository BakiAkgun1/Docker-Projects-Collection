const http = require('http');

// Port numarası
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Merhaba! Node.js server başarıyla çalışıyor.\n');
});

server.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
