const fs = require('fs');
let text = fs.readFileSync('schreiben_app.js', 'utf8');
text = text.replace(/gemini-pro/g, 'gemini-1.5-pro');
fs.writeFileSync('schreiben_app.js', text, 'utf8');
console.log('Replaced gemini-pro with gemini-1.5-pro');
