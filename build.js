// Azure SWA build script — copies all web assets to dist/
const fs = require('fs');
const path = require('path');

const src = __dirname;
const dst = path.join(__dirname, 'dist');

if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });

const exts = ['.html', '.css', '.js', '.png', '.pdf', '.json', '.txt', '.ico', '.svg', '.woff', '.woff2'];
const explicitFiles = ['staticwebapp.config.json'];

let copied = 0;
fs.readdirSync(src).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (exts.includes(ext) || explicitFiles.includes(file)) {
    const from = path.join(src, file);
    const to = path.join(dst, file);
    if (file === 'package.json' || file === 'build.js') return; // skip build files
    try {
      fs.copyFileSync(from, to);
      const size = fs.statSync(to).size;
      console.log(`  ✓ ${file} (${(size/1024).toFixed(1)} KB)`);
      copied++;
    } catch (e) {
      console.error(`  ✗ ${file}: ${e.message}`);
    }
  }
});
console.log(`\nBuild complete: ${copied} files copied to dist/`);
