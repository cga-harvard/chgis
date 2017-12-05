var Metalsmith = require('metalsmith');
var markdown   = require('metalsmith-markdown');
var layouts   = require('metalsmith-layouts');
var drafts   = require('metalsmith-drafts');
var permalinks   = require('metalsmith-permalinks');
var collections   = require('metalsmith-collections');
var rootPath   = require('metalsmith-rootpath');

Metalsmith(__dirname)
  .source("src/input")

  .use(markdown())

  .use(collections({
  pages: {
    pattern: "pages/*.md",
    sortyBy: "date",
    reverse: true
  },
  maps: {
    pattern: "maps/*.md",
    sortyBy: "date",
    reverse: true
  },
  data: {
    pattern: "data/*.md",
    sortyBy: "date",
    reverse: true
  },
  chgis: {
    pattern: "*/*.md",
    sortyBy: "date",
    reverse: true
  }
  }))

  .use(permalinks({
        relative: false,
        pattern: ':dir/:title'
    }))

  .use(layouts({
    engine: 'handlebars',
    directory: 'layouts',
    partials: 'layouts/partials'
  }))

  .use(drafts())

  .use(rootPath())

  .destination("build/root")
  .build(function(err) {
  if (err) {console.log(err);}
        else {console.log('metalsmith has processed the CHGIS website without errors, see BUILD folder: build/root/');}
  });

