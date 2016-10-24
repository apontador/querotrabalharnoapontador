// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-bootstrap/ui-bootstrap.js',
        'app/scripts/app.js',
        'app/scripts/controllers/*.js',
        'app/scripts/services/*.js',
        'app/scripts/services/apontador/*.js',
        'app/scripts/filters/*.js',
        'app/scripts/directives/*.js',
        'app/partials/*.html',
        'app/widgets/*.html',
        'test/spec/mocks/mocks.js',
        'test/spec/**/*.js'
    ],

    preprocessors: {
      'app/partials/*.html': ['ng-html2js'],
      'app/widgets/*.html': ['ng-html2js'],
      'app/**/*.js': ['coverage']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'templates'
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // list of files / patterns to exclude
    exclude: [],

    reporters: ['progress', 'coverage'],
    
    // web server port
    port: 9876,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
     //'PhantomJS'
      // 'Firefox',
      'Chrome'
    ],

    // Which plugins to enable
    plugins: ['karma-*', 'jasmine'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false    
  });
};
