module.exports = function(gulp) {
    var join, karma, _, karmaCommonConf;
    karma = require('karma').server;
    _ = require('underscore');
    join = require('path').join;

    karmaCommonConf = {
        basePath: join(__dirname, '..'),
        frameworks: ['jasmine', 'seajs'],
        files: [
            {pattern: 'vendor/**/*.js', included: false, watched: false},
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'test/**/*spec.js', included: false},
            'test/test-main.js'
        ],
        exclude: [],
        preprocessors: {
            '**/*.coffee': ['coffee']
        },
        reporters: ['growl', 'mocha'],
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        coffeePreprocessor: {
            options: {
                bare: true,
                sourceMap: true
            }
        }
    };

    gulp.task('test', function(done) {
        var conf;
        conf = _.extend({}, karmaCommonConf, {
            singleRun: true
        });

        karma.start(conf, function() {
            done();
            process.exit();
        });
    });

    gulp.task('test:debug', function(done){
        var conf;
        conf = _.extend({}, karmaCommonConf, {
            logLevel: 'debug',
            singleRun: true
        });

        karma.start(conf, function() {
            done();
            process.exit();
        });
    })
};
