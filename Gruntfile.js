module.exports = function(grunt) {
    //require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "style/css/main.css": "style/less/main.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['style/less/**/*.less', 'src/**/*.js'], // which files to watch
                tasks: ['less', 'concat'],
                options: {
                    nospawn: true
                }
            }
        },
        concat: {
            options: {
                separator: ';',
                stripBanners: true,
            },
            dist: {
                src: ['src/mobile-menu.js', 'src/responsive-design.js', 'src/search-list.js'],
                dest: 'dist/built.js',
            },
        },
        browserSync: {
            bsFiles: {
                src: 'style/css/*.css'
            },
            options: {
                watchTask: true,
                server: './app'
            }
        }

    });
    grunt.loadNpmTasks('grunt-browser-sync');
    //grunt.registerTask('defa', ['browserSync']);
    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('concat-js', ['concat', 'watch']);
    grunt.registerTask('syncLess', ['browserSync']);

};