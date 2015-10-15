module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    

    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['src/**/*.jsx'],
        dest: 'dist/scripts/app.built.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  

  grunt.registerTask('default', [
    'browserify'
  ]);
};