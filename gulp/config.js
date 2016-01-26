module.exports = {
  paths: {
    jade: {
      entry: 'app/jade/*.jade',
      components: 'app/jade/components/*.jade',
      dest: 'app/'
    },
    stylus: {
      entry: 'app/stylus/*.styl',
      components: 'app/stylus/components/*.styl',
      dest: 'app/css'
    },
    babel: {
      entry: 'app/babel/*.*',
      dest: 'app/js'
    },
    images: {
      entry: 'app/images/*.*',
      dest: 'app/build/images'
    },
    build: {
      entry: 'app/build',
      js: 'app/build/js',
      css: 'app/build/css'
    }
  },
  names: {
    css: 'app.min.css',
    js: 'app.min.js'
  }
}
