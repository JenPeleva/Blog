module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        clean: ["dist", '.tmp'],
 
        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: ['**', '!js/**', '!**/*.css'],
                dest: 'dist/'
            }
        },
 
        useminPrepare: {
            html: 'app/index.html'
        },
 
        usemin: {
            html: ['dist/index.html']
        },

		ngtemplates:  {
		  	blogApp: {
		  		cwd: 'app/',
		    	src: 'js/**/**.html',
		    	dest: 'app/templates.js'
		  	}
		},
 
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-usemin');
 
    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'clean', 'ngtemplates', 'copy', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'usemin'
    ]);
};