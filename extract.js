import fs from 'fs';

const data = fs.readFileSync('./ratangames.js', 'utf8');
const strings = data.match(/`([^`\\]|\\.)*`/g) || [];
const singleQuotes = data.match(/'([^'\\]|\\.)*'/g) || [];
const doubleQuotes = data.match(/"([^"\\]|\\.)*"/g) || [];

const allStrings = [...strings, ...singleQuotes, ...doubleQuotes];
const uniqueStrings = [...new Set(allStrings)].filter(s => s.length > 10 && !s.includes('function') && !s.includes('return'));

fs.writeFileSync('./strings.txt', uniqueStrings.join('\n'));
console.log('Extracted ' + uniqueStrings.length + ' strings');
