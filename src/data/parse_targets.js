import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileContent = fs.readFileSync(path.join(__dirname, 'targets_doc.txt'), 'utf-8');

const lines = fileContent.split('\n');

const targets = {};

for (const line of lines) {
  if (line.trim().startsWith('* ')) {
    const textInfo = line.trim().substring(2);
    const colonIndex = textInfo.indexOf(':');
    if (colonIndex !== -1) {
      let namesStr = textInfo.substring(0, colonIndex).trim();
      const descStr = textInfo.substring(colonIndex + 1).trim();
      
      const names = namesStr.split(',').flatMap(n => n.split('&')).map(n => n.trim()).filter(n => n.length > 0);
      
      for (let n of names) {
        if (n.startsWith('Dr. ') && !namesStr.includes('Ott'))n = n;
        targets[n] = descStr;
      }
    }
  }
}

let result = 'export const documentDescriptions: Record<string, string> = {\n';
for (const [key, value] of Object.entries(targets)) {
   result += `  ${JSON.stringify(key)}: ${JSON.stringify(value)},\n`;
}
result += '};\n';
fs.writeFileSync(path.join(__dirname, 'documentDescriptions.ts'), result);
console.log('Successfully wrote documentDescriptions.ts');
