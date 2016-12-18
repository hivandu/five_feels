module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        // less compiler
        less: {
            development: {
                files: {
                    "css/index.css" : "less/*.less"
                   // where compile to
                   // less source
                }
            }
        },

        //css
        cssmin: {

            css: {

                src:'css/index.css',

                dest:'css/indexYs.css'

            }

        }
    });

    // load npm task components
    grunt.loadNpmTasks('grunt-contrib-less');

    //配置CSS 压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    // define task
    grunt.registerTask('all', ['less','cssmin']);
    grunt.registerTask('compileLess', ['less:development']);
};