const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.naver.https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=asd');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse(): ', query);
console.log('querystring.stringify(): ', querystring.stringify(query));