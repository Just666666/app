var gulp=require("gulp");
var sass=require("gulp-sass");
var rename=require("gulp-rename");
var concat=require("gulp-concat");
var uglify=require("gulp-uglify");
var htmlmin=require("gulp-htmlmin");

//创建task
//目的:编辑sass
gulp.task("buildSass",function(){
	//查找sass文件
	gulp.src("./src/scss/index.scss")	     

		//把文档流输入出到gulp-sass进行编辑
		.pipe(sass({outputStyle:"expanded"}))
		.pipe(gulp.dest("./src/css"))
});
//监听sass文件修改,自动编译
gulp.task("monitorbsass",function(){
	gulp.watch("./src/scss/index.scss",["buildSass"])
});


//创建task
//目的:编辑sass
gulp.task("buildSass2",function(){
	//查找sass文件
	gulp.src("./src/scss/list.scss")
	     
	    //输出未压缩版本
		//把文档流输入出到gulp-sass进行编辑
		.pipe(sass({outputStyle:"expanded"}))
		.pipe(gulp.dest("./src/css"))
});
//监听sass文件修改,自动编译
gulp.task("monitorbsass2",function(){
	gulp.watch("./src/scss/list.scss",["buildSass2"])
});

//全站编译
gulp.task("default",["monitorbsass","monitorbsass2"]);





