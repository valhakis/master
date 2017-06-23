module.exports = function(grunt) {

  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON(path.join(__dirname, '../../package.json')),

    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          imagesDir: 'images',
          fontsDir: 'fonts',
          relativeAssets: true,
          // force: true,
          boring: true,
          outputStyle: 'expanded',
          environment: 'development',
          raw: 'preferred_syntax = :sass\n'
        }
      },
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          imagesDir: 'images',
          fontsDir: 'fonts',
          relativeAssets: true,
          boring: true,
          force: true,
          // bundleExec: true,
          outputStyle: 'compressed',
          environment: 'production',
          raw: 'preferred_syntax = :sass\n'
        }
      },
      sample: {
        sassDir: 'sass',
        cssDir: 'css',
        imagesDir: 'images',
        fontsDir: 'fonts',
        relativeAssets: true,
        boring: true,
        // force: true,
        bundleExec: true,
        outputStyle: 'compressed',
        environment: 'production',
        raw: 'preferred_syntax = :sass\n'
      }
    },

    autoprefixer: {
      dist:{
        files:{
          'css/screen.css':'css/screen.css'
        }
      }
    },

    concat: {
      dist: {
        src: [
          'js/vendors/filename.js',
          'js/companyname/filename.js'
        ],
        dest: 'js/companyname/main.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js'],
      beforeconcat: [
        'js/src/companyname/app.js',
        'js/src/companyname/bar.js'
      ]
    },

    uglify: {
      options: {
        mangle: false
      },
      prod: {
        files: [{
          expand: true,
          cwd: 'js',
          src: [
            'vendors/**/*.js',
            'companyname/**/*.js'
          ],
          dest: 'js'
        }]
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'js/src',
        src: [
          'companyname/**/*.js',
          'vendors/**/*.js'
        ],
        dest: 'js/'
      }
    },

    imagemin: {
      jpg: {
        options: {
          optimizationLevel: 8
        },
        files: [
          {
            expand: true,
            cwd: 'images-src/',
            src: ['**/*.jpg'],
            dest: 'images/',
            ext: '.jpg'
          }
        ]
      },
      png: {
        options: {
          optimizationLevel: 8
        },
        files: [
          {
            expand: true,
            cwd: 'images-src/',
            src: ['**/*.png'],
            dest: 'images/',
            ext: '.png'
          }
        ]
      }
    },

    clean: {
      images: {
        src: ['images']
      }
    },

    watch: {
      compass: {
        files: [
          'sass/{,*/}*.sass',
          'images-src/{,*/}*.{png,jpg,gif}'
        ],
        tasks: [
          'compass:dev',
          'autoprefixer',
          'clean:images',
          'imagemin'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'compass:dev',
    'autoprefixer',
    'copy',
    'concat',
    'jshint',
    'uglify'
  ]);

  grunt.registerTask('prod', [
    // 'compass:sample',
    'compass:dist',
    'autoprefixer',
    'copy',
    'concat',
    'jshint',
    'uglify',
    'clean:images',
    'imagemin'
  ]);

  grunt.registerTask('sample', ['compass:sample']);
};
