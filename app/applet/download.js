import fs from 'fs';
import https from 'https';

https.get('https://ratangames.com/Janta555.apk?text=Hi,%20I%20need%20help%20with%20Janta555', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('/app/applet/ratangames.js', data);
    console.log('Downloaded JS');
  });
});
