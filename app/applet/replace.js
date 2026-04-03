import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const [search, replace] of replacements) {
    content = content.split(search).join(replace);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') {
        walk(dirPath, callback);
      }
    } else {
      if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts') || dirPath.endsWith('.html') || dirPath.endsWith('.json')) {
        callback(dirPath);
      }
    }
  });
}

const replacements = [
  ['Ayush Dental Care', 'Ayushi Dental'],
  ['Dr. Ayush Gupta', 'Our Expert Team'],
  ['7417512585', '9811021323'],
  ['Aarcity Regency Park sector 16c Gaur City 2, Greater Noida West, India', 'Sector 5, Noida, Uttar Pradesh 201301'],
  ['ayushi dental', 'Ayushi Dental'],
  ['ayush dental', 'Ayushi Dental'],
  ['https://maps.app.goo.gl/GYu81fAtUf9TKuTS7', 'https://www.google.com/maps/place/Ayushi+Density/@28.6167136,77.2888741,14z/data=!4m10!1m2!2m1!1sayushi+dental!3m6!1s0x390ce5398f8ac4b3:0x21daad1b1d37c548!8m2!3d28.5957077!4d77.3152384!15sCg1heXVzaGkgZGVudGFsWg8iDWF5dXNoaSBkZW50YWySARNkZW50YWxfc3VwcGx5X3N0b3JlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0a2FXTXdlR0ZOVld4ellrWmpNRTlITlVKWU1rWnBWMFZSTTB4VlJSQULgAQD6AQQIABAu!16s%2Fg%2F11vy7cm_9t'],
  ['Gaur City 2 (Aarcity Regency Park)', 'Sector 5, Noida']
];

walk('.', (filePath) => {
  replaceInFile(filePath, replacements);
});
