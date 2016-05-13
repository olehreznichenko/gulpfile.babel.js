export const paths = {
    pug: {
      entry: 'app/pug/*.pug',
      components: 'app/pug/components/*.pug',
      dest: 'app/'
    },
    stylus: {
      entry: 'app/stylus/*.styl',
      components: 'app/stylus/components/*.styl',
      dest: 'app/css'
    },
    ts: {
      entry: 'app/ts/*.*',
      dest: 'app/js'
    },
    images: {
      entry: 'app/images/*.*',
      dest: 'app/build/images'
    },
    svg: {
      entry: 'app/images/svg/*.svg',
      dest: 'app/build/images/svg/'
    },
    fonts: {
      entry: 'app/fonts/*.*',
      dest: 'app/build/fonts'
    },
    build: {
      entry: 'app/build/',
      js: 'app/build/js',
      css: 'app/build/css'
    },
    names: {
      css: 'styles.min.css',
      js: 'javascript.min.js',
      critical: 'critical.min.css'
    }
}
