const fs = require('fs');
const { SourceMapGenerator } = require('source-map');

const generatedCode = fs.readFileSync('app.js', 'utf-8');
const map = new SourceMapGenerator({
  file: 'app.js.map',
  sourceRoot: '/',
});

// Mapea la línea y columna original del archivo fuente
// a la línea y columna correspondiente del archivo generado
map.addMapping({
  generated: { line: 1, column: 0 },
  original: { line: 1, column: 0 },
  source: 'index.js',
});

// Genera el archivo de mapa de origen
fs.writeFileSync('app.js.map', map.toString());