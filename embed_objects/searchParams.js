const { URL } = require('url');

const myURL = new URL('http://www.naver.https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=asd');
console.log('searchParams: ', myURL.searchParams);
console.log('searchParams.getAll(): ', myURL.searchParams.getAll('fbm'));
console.log('searchParams.get(): ', myURL.searchParams.get('where'));
console.log('searchParams.has(): ', myURL.searchParams.has('where'));
console.log('searchParams.keys(): ', myURL.searchParams.keys());
console.log('searchParams.values(): ', myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));
myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));
myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));
console.log('searchParams.toString(): ', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
console.log('-------------------------------------');

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
myURL.search = myURL.searchParams.toString();
console.log(myURL)