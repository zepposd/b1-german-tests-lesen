const fs = require('fs');
let content = fs.readFileSync('schreiben_app.js', 'utf8');

// Replace literal `\` immediately followed by backtick with just backtick
content = content.replace(/\\`/g, '`');
// Replace literal `\` immediately followed by $ with just $
content = content.replace(/\\\$/g, '$');
// Replace literal `\` immediately followed by n with literal newline \n
content = content.replace(/\\n/g, '\\n');

fs.writeFileSync('schreiben_app.js', content, 'utf8');
console.log('Fixed syntax errors');
