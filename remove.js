const fs = require('fs');
const path = require('path');

const directoryPath = './src';

function removeCommentsFromFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  let cleanedContent = fileContent.replace(/\/\/.*$/gm, '');

  cleanedContent = cleanedContent.replace(/\/\*[\s\S]*?\*\//g, '');

  fs.writeFileSync(filePath, cleanedContent, 'utf-8');
}

function walkDirectory(directoryPath) {
  fs.readdirSync(directoryPath).forEach((file) => {
    const fullPath = path.join(directoryPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDirectory(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      removeCommentsFromFile(fullPath);
    }
  });
}

walkDirectory(directoryPath);
