module.exports = function (grunt) {
    grunt.initConfig({
      eslint: {
        options: {
          configFile: '.eslintrc.json'
        },
        target: ['*.js']
      },
      csslint: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: '*.css'
      },
      htmlhint: {
        options: {
          htmlhintrc: '.htmlhintrc'
        },
        src: '*.html'
      },
      mocha: {
        test: {
          src: ['test/index.html'],
        },
        options: {
          run: true,
          reporter: 'Dot'
        }
      },
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: 'dist/index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {
        'dist/rectangle.css': 'rectangle.css'
      },
      uglify: {
        release:{
          files: {
            'dist/rectangle.js': 'rectangle.js',
            'dist/util.js': 'util.js'
          }
        }},   
        copy: {
          html: {
              src: "./index.html", 
              dest: "./dist/index.html"
          },
          css: {
              src: "./rectangle.css",
              dest: "./dist/rectangle.css"
          },
          js:{
              src: ['rectangle.js', 'util.js'],
              dest: ['dist/rectangle.js', 'dist/util.js']
          }
      }  
   
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('default', ['mocha']);
    grunt.registerTask("release", ['copy', 'htmlmin','cssmin', 'uglify']);