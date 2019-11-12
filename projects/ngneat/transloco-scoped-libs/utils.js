const path = require('path');
const fs = require('fs');

function mkRecursiveDirSync(entry, src) {
  if (fs.existsSync(path.join(entry, src))) {
    return;
  }
  const folders = src.split(path.sep);
  folders.forEach(folder => {
    entry = path.join(entry, folder);
    fs.mkdirSync(entry);
  });
}

module.exports = { mkRecursiveDirSync };
