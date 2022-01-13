const http2 = require('http2');
const fs = require('fs');

http2.createSecureServer({
    key: fs.readFileSync('/Users/kimboyoon/localhost_key.pem'),
    cert: fs.readFileSync('/Users/kimboyoon/localhost_crt.pem'),
  
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(8000, () => {
    console.log('8000번 포트에서 서버 대기 중입니다!');
  });