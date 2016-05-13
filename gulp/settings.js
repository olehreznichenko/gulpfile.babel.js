export const PATTERN = {
  gulp: {pattern: ['gulp-*', 'gulp.*', 'poststylus', 'rupture', 'critical']},
  postcss: {pattern: ['rucksack-css', 'cssnano', 'lost']}
}

export const NEXT_SETTINGS = {
  messages: {
    browser: false,
    console: false
  },
  features: {
    customProperties: false,
    customMedia: true,
    mediaQueriesRange: true,
    customSelectors: true,
    colorFunction: true
  },
  "autoprefixer": true
}

export const RUCKSACK_SETTINGS = {
  clearFix: false,
  shorthandPosition: true,
  inputPseudo: true,
  rangeElements: true,
  alias: false,
  fallbacks: false,
  responsiveType: true,
  fontPath: false,
  autoprefixer: false,
  quantityPseudoSelectors: true
}

export const BROWSERSLIST_CONFIG = {
  browsers: [
    'ie >= 11',
    'ie_mob >= 11',
    'ff >= 40',
    'Chrome >= 40',
    'Safari >= 8',
    'Opera >= 40',
    'ios_saf >= 8',
    'Android >= 4.4',
    'bb >= 10'
  ]
}


export const HTMLMIN_SETTINGS = {
  removeComments: true,
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true,
  removeScriptTypeAttributes: true,
  minifyJS: true,
  minifyURLs: true
}

export const UGLIFY_SETTINGS = {
  sequences     : true,
  properties    : true,
  dead_code     : true,
  drop_debugger : true,
  unsafe        : false,
  conditionals  : true,
  comparisons   : true,
  evaluate      : true,
  booleans      : true,
  loops         : true,
  unused        : true,
  hoist_funs    : true,
  hoist_vars    : false,
  if_return     : true,
  join_vars     : true,
  cascade       : true,
  side_effects  : true,
  warnings      : true
}

export const TS_SETTINGS = {
  "target": "ES5",
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
