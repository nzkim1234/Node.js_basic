const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');

writeStream.on('finish', () => {
    console.log('파일쓰기완료');
});

writeStream.write('이글을씁니다\n');
writeStream.write('한번더씁니다.');
writeStream.end();