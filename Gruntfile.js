/**
 * Created by neelames on 3/17/2016.
 */
module.exports = function (grunt) {
    "use strict";

    // Config...
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['./public/appmodule/**/*.js', '!./public/angularapp.js'],
                tasks: ['jshint', 'concat:appmodule']
            }
        },
        sass: {
            dev: {
                options: {
                    compress: false,
                    sourcemap: 'none'
                 },
                files: {
                    './public/style.css' : './public/sass/style.scss'
                }
            }
        },
        concat: {
            appmodule: {
                src: ['./public/appmodule/**/*.js', '!./public/angularapp.js'],
                dest: './public/angularapp.js'
            }
        },
        jshint: {
            all: [
                'public/**/*.js',
                '!public/angularapp.js',
                '!public/**/vendor/*.js'
            ]
        }
    });
    // Load tasks...
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task.
    grunt.registerTask('default', ['concat', 'watch']);
    grunt.registerTask('dev', ['concat', 'sass:dev', 'watch']);
};