'use strict';
/* global angular, confirm */

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    ngtemplates: 'static/ngtemplates.js',
  });
  // Project configuration.
  grunt.initConfig({

    // Project settings
      config: {
          // Configurable paths
          app: 'src',
          dist:'apontadorarchive',
          test: 'tests',
          tmp : '.tmp',
          data : 'data',
          config : 'config',
          lib : 'src/lib'
      },

      watch: {
          js: {
              files: ['<%= config.app %>/*.js', '<%= config.app %>/assets/**/*.js', '<%= config.app %>/components/**/*.js'],
              tasks: ['jshint'],
              options: {
                  livereload: false
              }
          },
          gruntfile: {
              files: ['Gruntfile.js']
          },
          less: {
              files: ['<%= config.app %>/assets/less/{,*/}*.less', '<%= config.app %>/components/{,*/}*.less'],
              tasks: ['less']
          },
          templates :{
              files: ['<%= config.app %>/index.html', '<%= config.app %>/assets/directives/*.html', '<%= config.app %>/components/**/*.html', '<%= config.app %>/extensions/**/*.html'],
              tasks: ['ngtemplates']
          }
      },

      connect: {
          options: {
              port: 3000,
              livereload: false,
              // Change this to '0.0.0.0' to access the server from outside
              hostname: 'localhost'
          },
          livereload: {
              options: {
                  open: true,
                  base: [
                      '<%= config.tmp %>',
                      '<%= config.lib %>',
                      '<%= config.app %>'
                  ]
              }
          },
          dist: {
              options: {
                  open: true,
                  base: '<%= config.dist %>',
                  livereload: false
              }
          }
      },

      // Empties folders to start fresh
      clean: {
          server: '<%= config.tmp %>',
          test: ['<%= config.tmp %>', '<%= config.app %>/**/templates.js'],
          dist: ['<%= config.tmp %>', '<%= config.dist %>']
      },

      // Make sure code styles are up to par and there are no obvious mistakes
      jshint: {
          options: {
              jshintrc: '.jshintrc',
              reporter: require('jshint-stylish')
          },
          all: [
              'Gruntfile.js',
              '<%= config.app %>/components/**/*.js',
              '<%= config.app %>/extensions/**/*.js',
              '<%= config.app %>/assets/**/*.js',
              '<%= config.app %>/*.js',
              '<%= config.test %>/**/*.specs.js',
              '<%= config.data %>/**/*.js',
          ]
      },

      less: {
          development: {
              options: {
                  paths: ['<%= config.app %>/assets/less']
              },
              files: {
                  '<%= config.tmp %>/assets/main.css':'<%= config.app %>/assets/less/main.less'
              }
          },
      },
      autoprefixer: {
          options: {
              browsers: ['last 1 version']
          },
          dist: {
              files: [{
                  expand: true,
                  cwd: '<%= config.tmp %>/assets/styles/',
                  src: '*.css',
                  dest: '<%= config.tmp %>/assets/styles/'
              }]
          }
      },
      htmlmin: {
          options:    {
              collapseBooleanAttributes:      true,
              collapseWhitespace:             true,
              removeAttributeQuotes:          true,
              removeComments:                 true, // Only if you don't use comment directives!
              removeEmptyAttributes:          true,
              removeRedundantAttributes:      true,
              removeScriptTypeAttributes:     true,
              removeStyleLinkTypeAttributes:  true
          },

          dist: {
              files: [{
                  expand: true,
                  cwd: '<%= config.dist %>',
                  src: '**/*.html',
                  dest: '<%= config.dist %>'
              }]
          }
      },
      // The following *-min tasks produce minified files in the dist folder
      imagemin: {
          dist: {
              files: [{
                  expand: true,
                  cwd: '<%= config.app %>',
                  src: '**/*.{gif,jpg,png}',
                  dest: '<%= config.dist %>'
              }]
          }
      },

      svgmin: {
          dist: {
              files: [{
                  expand: true,
                  cwd: '<%= config.app %>',
                  src: '**/*.svg',
                  dest: '<%= config.dist %>'
              }]
          }
      },

      ngtemplates: {
          options: {
              htmlmin:  '<%= htmlmin.options %>',
          },
          compiledTemplates: {
              options :{
                  standalone : true
              },
              cwd: '<%= config.app %>',
              src: ['**/*.html'],
              dest: '<%= config.tmp %>/templates.js',
          }
      },

      // Copies remaining files to places other tasks can use
      copy: {
          dist: {
              files: [{
                  expand: true,
                  dot: true,
                  cwd: '<%= config.app %>',
                  dest: '<%= config.dist %>',
                  src: [
                      '*.{ico,png,txt}',
                      '.htaccess',
                      'data/{,*/}*.json',
                      'assets/{,*/}*.{json,ttf,woff}',

                      'components/emr/partials/growth-curve/**',
                      'components/emr/partials/print/**',
                      '*.html',
                      'fonts/{,*/}*.*',
                      'integrations/{,*/}*.*',
                  ]
              }]
          },
          data: {
              files: [{
                  expand: true,
                  dot: true,
                  cwd: '<%= config.data %>',
                  dest: '<%= config.tmp %>/data',
                  src:[
                      '**/*.js',
                      '../config.*.js'
                  ]
              }]
          },
          config: {
              files: [{
                  expand: true,
                  dot: true,
                  cwd: '<%= config.config %>',
                  dest: '<%= config.tmp %>',
                  src:[
                      '*.js',
                  ]
              }]
          },
          scripts: {
              files: [{
                  expand: true,
                  dot: true,
                  cwd: '<%= config.app %>',
                  dest: '<%= config.tmp %>',
                  src:[
                      '**/*.js',
                  ]
              }]
          },
          lib: {
              files: [{
                  expand: true,
                  dot: true,
                  cwd: '<%= config.lib %>',
                  dest: '<%= config.tmp %>',
                  src:[
                      '**/*.js',
                  ]
              }]
          },
          json: {
              files: [{
                  flatten: true,
                  expand: true,
                  dot: true,
                  cwd: '<%= config.app %>',
                  dest: '<%= config.dist %>',
                  src:[
                      '**/*.json',
                  ]
              }]
          }
      },
      // Reads HTML for usemin blocks to enable smart builds that automatically
      // concat, minify and revision files. Creates configurations in memory so
      // additional tasks can operate on them
      useminPrepare: {
          options: {
              dest: '<%= config.dist %>',
              flow: {
                  steps: {
                      css: ['concat', 'cssmin'],
                      js: ['concat']
                  },
                  post: {}
              }
          },
          html: '<%= config.app %>/*.html'
      },

      // Performs rewrites based on rev and the useminPrepare configuration
      usemin: {
          options: {
              assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
          },
          html: ['<%= config.dist %>/{,*/}*.html'],
          css: ['<%= config.dist %>/**/*.css']
      },
      // Renames files for browser caching purposes
      rev: {
          dist: {
              files: {
                  src: [
                      '<%= config.dist %>/apontador.min.js',
                      '<%= config.dist %>/assets/apontador.min.css'
                  ]
              }
          }
      },

    });

    grunt.registerTask('serve', function (target) {
      if (target === 'dist') {
          return grunt.task.run([ 'connect:dist:keepalive']);
      }

      grunt.task.run([
          'clean:server',
          'less',
          'copy:data',
          'copy:config',
          'copy:scripts',
          'ngtemplates:compiledTemplates',
          'connect:livereload',
          'watch'
      ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'clean:test',
        'react-templates:dist',
        'jshint',
        'ngtemplates:compiledTemplates',
        'babel',
        'less',
        'useminPrepare',
        'copy:config',
        'copy:scripts',
        'copy:lib',
        'copy:commons',
        'copy:json',
        'autoprefixer',
        'concat',
        'cssmin',
        'imagemin',
        'svgmin',
        'copy:dist',
        'rev',
        'usemin',
        'htmlmin:dist'
    ]);


    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
  };
