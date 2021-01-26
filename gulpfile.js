global.$ = require('./gulp.config')

$.path.tasks.forEach(taskPath => require(taskPath)())

for(const taskName in $.tasks) {
    $.gulp.task(taskName, $.gulp.series('clean', $.gulp.parallel(...$.tasks[taskName])))
}