import fs from 'fs';
import https from 'https';

https.get('https://www.ratangames.com/janta555.apk', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('./ratangames.js', data);
    console.log('Downloaded JS');
  });
});
