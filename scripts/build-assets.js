'use strict';

const renderAssets = require('./render-assets');
var ghpages = require('gh-pages');

renderAssets();

console.log('ejecutando gh-pages');
ghpages.publish('dist', function(err) {});
console.log('gh-pages ejecutado');

