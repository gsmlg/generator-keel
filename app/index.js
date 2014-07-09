'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var KeelGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');
        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },
    askFor: function() {},
    promptTask: function() {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, function(answers) {
            this.log(answers.name);
            done();
        }.bind(this));
    }
    app: function() {
        this.mkdir('vendor');
        this.mkdir('vendor/hooks');
        this.mkdir('src');
        this.mkdir('lib');
        this.mkdir('docs');
        this.mkdir('tasks');
        this.mkdir('test');
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_gulpfile.js', 'gulpfile.js');
        this.copy('_test/_test-main.js', 'test/test-main.js');
        this.copy('_tasks/_build.gulp.js', 'tasks/build.gulp.js');
        this.copy('_tasks/_lint.gulp.js', 'tasks/lint.gulp.js');
        this.copy('_tasks/_test.gulp.js', 'tasks/test.gulp.js');
    },
    projectfiles: function() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('csslintrc', '.csslintrc');
        this.copy('gitignore', '.csslintrc');
        this.copy('gitattributes', '.csslintrc');
    }
});
module.exports = KeelGenerator;
