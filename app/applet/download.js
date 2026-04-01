import fs from 'fs';
import https from 'https';

https.get('https://ratangames.com/Janta555.apk', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('/app/applet/ratangames.js', data);
    console.log('Downloaded JS');
  });
});
