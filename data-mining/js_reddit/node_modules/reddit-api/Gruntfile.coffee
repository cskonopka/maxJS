module.exports = (grunt) ->

	sources = [
		'api/*.coffee'
		'index.coffee'
	]
	
	sourceMapping = grunt.file.expandMapping sources, '',
		cwd: 'src'
		rename: (destBase, destPath) ->
			destBase + destPath.replace /\.coffee$/, ".js"

	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		
		coffee: compile: files: sourceMapping
			
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	
	grunt.registerTask 'default', ['coffee']
