import fs from 'fs';
import https from 'https';

https.get('https://www.ratangames.com/assets/index-5IOwuUrr.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('/app/applet/ratangames.js', data);
    console.log('Downloaded JS');
  });
});
