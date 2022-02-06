var ghpages = require('gh-pages');

console.log('ejecutando gh-pages');
ghpages.publish('dist', function(err) {});
console.log('gh-pages ejecutado');

