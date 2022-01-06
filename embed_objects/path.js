const path = require('path');

const string = __filename;

console.log('path.sep: ', path.sep);
console.log('path.delimiter: ', path.delimiter);
console.log('-----------------------------------------');

console.log('path.dirname(): ', path.dirname(string));
console.log('path.extname(): ', path.extname(string));
console.log('path.basename(): ',path.basename(string));
console.log('path.basename - extname: ', path.basename(string, path.extname(string)));
console.log('path.basename(): ',path.basename(string, path.extname(string)));
console.log('-----------------------------------------');

console.log('path.parse()', path.parse(string));
console.log('path.format(): ', path.format({
    dir: '/Users/kimboyoon/Documents/Node.js_basic/embed_objects',
    name: 'path',
    ext: '.js',
}));
console.log('apth.normalize(): ', path.normalize('//Users//kimboyoon//Documents//Node.js_basic//embed_objects/path.js'));
console.log('-----------------------------------------');

console.log('path.isAbsolute(/Users/kimboyoon): ',path.isAbsolute('/Users/kimboyoon'));
console.log('path.isAblsolute(./kimboyoon): ',path.isAbsolute('./kimboyoon'));
console.log('-----------------------------------------');

console.log('path.relative() :', path.relative('/Users/kimboyoon/Documents/Node.js_basic/embed_objects', '/Users'));
console.log('path.join(): ', path.join(__dirname, '..'));
console.log('path.resolve(): ', path.resolve(__dirname, '..'));
console.log('-----------------------------------------');

console.log(path.posix.join(__dirname, '..'));
//console.log(path.posix.join(__dirname, '..'));
console.log('-----------------------------------------');
