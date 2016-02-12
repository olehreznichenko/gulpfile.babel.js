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
    typescript: {
      entry: 'app/typescript/*.*',
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
    }
  },
  names: {
    css: 'styles.min.css',
    js: 'javascript.min.js',
    critical: 'critical.min.css'
  }
};

//Check this ESS module syntax

// export default let paths = {
//     jade: {
//       entry: 'app/jade/*.jade',
//       components: 'app/jade/components/*.jade',
//       dest: 'app/'
//     },
//     stylus: {
//       entry: 'app/stylus/*.styl',
//       components: 'app/stylus/components/*.styl',
//       dest: 'app/css'
//     },
//     babel: {
//       entry: 'app/babel/*.*',
//       dest: 'app/js'
//     },
//     images: {
//       entry: 'app/images/*.*',
//       dest: 'app/build/images'
//     },
//     build: {
//       entry: 'app/build',
//       js: 'app/build/js',
//       css: 'app/build/css'
//     },
//     names: {
//       css: 'app.min.css',
//       js: 'app.min.js'
// }
