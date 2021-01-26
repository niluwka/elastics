const key = 'video'
module.exports = () => 
    $.gulp.task(key, () => 
        $.gulp.src($.path.src[key])
            .pipe($.gulp.dest($.path.build[key])
            .on('end', $.bs.reload))      
    )