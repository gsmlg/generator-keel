(function(__karma__, seajs) {
    var tests = [],
        file;
    var alias = {
        "jquery": "/base/vendor/jquery",
        "underscore": "/base/vendor/underscore",
        "backbone": "/base/vendor/backbone",
        "d3": "/base/vendor/d3"
    };
    for (file in __karma__.files) {
        if (__karma__.files.hasOwnProperty(file)) {
            if (/spec\.js$/i.test(file)) {
                tests.push(file);
            }
            if (/\/src\//.test(file)) {
                var name = file.match(/\/src\/([^.]+)\.js/)[1];
                alias[name] = file;
            }
        }
    }
    seajs.config({
        base: '/base/src',
        alias: alias
    });
    var __start = __karma__.start;
    __karma__.start = function() {};
    seajs.use(tests, function() {
        __start.call();
    });
})(window.__karma__, seajs);
