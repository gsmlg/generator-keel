require('colorful').colorful();
module.exports = function (gulp) {
    var path = require('path'),
        build = require('spm/lib/build'),
        join = path.join,
        root = join(__dirname, '..');

    var buildOpt = {
        dest: join(root, 'dist'),
        cwd: root,
        include: [],
        ignore: [],
        skip: [],
        idleading: '',
        zip: false,
        force: true,
        install: true
    };

    gulp.task('build', function(done){
        build(buildOpt, done);
    });
};
