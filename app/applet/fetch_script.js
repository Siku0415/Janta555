import https from 'https';

https.get('https://www.ratangames.com/assets/index-5IOwuUrr.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Extract strings
    const strings = data.match(/"([^"\\]|\\.)*"/g) || [];
    const uniqueStrings = [...new Set(strings)].filter(s => s.length > 20 && !s.includes('function') && !s.includes('return'));
    console.log(uniqueStrings.join('\n'));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
