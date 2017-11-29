
var gulp = require('gulp'), 
watch=require('gulp-watch'),
browserSync = require('browser-sync').create();//we dnt need entire pckg,
												// only the create method

//all watch related tasks are here. browserSync.init is here so cssInject task also should be here
gulp.task('watch',function(){

	browserSync.init({
		notify:false, //to avoid the notification that appears which is disturbing 
		server:{
			baseDir: "app" //this causes the root file to open automatically as we gulp watch(it has index.html)
		}
	});

	watch('./app/index.html',function(){
		browserSync.reload(); //any change in index.html , browser reloads
	});

	watch('./app/assets/styles/**/*.css',function(){ // any change to css file cssInject task is started
		gulp.start('cssInject');
	});
});


gulp.task('cssInject',['styles'],function(){ //styles task is a dependency of cssInject, it wont start until styles task is completed
	return gulp.src('./app/temp/styles/style.css')
	.pipe(browserSync.stream());//stream method writes the css into browser without refeshing
});

