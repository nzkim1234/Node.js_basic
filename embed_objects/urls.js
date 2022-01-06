const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.naver.https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=asd');
console.log('new URL()', myURL);
console.log('url.format()', url.format(myURL));
console.log('-----------------------');

const parsedUrl = url.parse('http://www.naver.https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=asd');
console.log('url parse(): ', parsedUrl);
console.log('url.format(): ', url.format(parsedUrl));
