module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'css/base.css',
          'css/syntax/emacs.css',
          'css/octicons.css'
        ],
        dest: 'css/<%= pkg.name %>.add.css'
      }
    },

    watch: {
        scripts: {
            files: ['*/**/base.css'],
            tasks: ['css'],
            options: {
                spawn: false,
            },
        },
    },
    
    cssmin: {
      'css/main.min.css': [
        '<%= concat.dist.dest %>'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('css', ['concat', 'cssmin']);
};
