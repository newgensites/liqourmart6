// Link checker test: verifies that local href targets in HTML files point to existing files.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

function findHtmlFiles(startDir) {
  const entries = fs.readdirSync(startDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (['.git', 'node_modules'].includes(entry.name)) {
        continue;
      }
      files.push(...findHtmlFiles(path.join(startDir, entry.name)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      files.push(path.join(startDir, entry.name));
    }
  }

  return files;
}

function extractLocalHrefs(content) {
  const hrefRegex = /href\s*=\s*"([^"]+)"|href\s*=\s*'([^']+)'/gi;
  const matches = [];
  let match;

  while ((match = hrefRegex.exec(content)) !== null) {
    const value = match[1] || match[2];
    if (!value) continue;

    const normalized = value.trim();
    if (
      normalized.startsWith('http://') ||
      normalized.startsWith('https://') ||
      normalized.startsWith('//') ||
      normalized.startsWith('mailto:') ||
      normalized.startsWith('tel:') ||
      normalized.startsWith('javascript:') ||
      normalized.startsWith('#')
    ) {
      continue;
    }

    matches.push(normalized);
  }

  return matches;
}

function targetExists(sourceFile, href) {
  const [basePath] = href.split('#');
  if (!basePath) return true;

  const targetPath = basePath.startsWith('/')
    ? path.join(repoRoot, basePath.replace(/^\/+/, ''))
    : path.resolve(path.dirname(sourceFile), basePath);

  return fs.existsSync(targetPath);
}

function main() {
  const htmlFiles = findHtmlFiles(repoRoot);
  const missing = [];

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const hrefs = extractLocalHrefs(content);

    for (const href of hrefs) {
      if (!targetExists(file, href)) {
        missing.push({
          file: path.relative(repoRoot, file),
          href,
        });
      }
    }
  }

  if (missing.length > 0) {
    console.error('Broken local links found:');
    for (const { file, href } of missing) {
      console.error(`- ${file}: ${href}`);
    }
    process.exit(1);
  }

  console.log('All local links are valid.');
}

main();
