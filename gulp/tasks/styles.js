/* gulp.js file split into separate files for organization. this file contains all style related tasks and related variables*/

var gulp = require('gulp'), 
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');



gulp.task('styles',function(){
return gulp.src('./app/assets/styles/style.css')
.pipe(postcss([cssimport,mixins,cssvars,nested,autoprefixer]))
.on('error',function(errorInfo){ //this is to avoid gulp from stopping when we make a css syntax error (done b4 going to pipe)
	console.log(errorInfo.toString());//this give details regarding error. toString is used to make the info readable
	this.emit('end');//this method tells gulp that syle file ended without problems
})
.pipe(gulp.dest('./app/temp/styles'));
//we add return bcoz gulp.src is asynchronous method and gulp shd be aware when this method completes
});