module.exports = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config'),
        serverDir: './app/build',
        src: { /* Взять */
            html: './app/src/*.{html,pug,jade}',
            style: './app/src/style/*.*',
            js: './app/src/script/common.js',
            img: './app/src/images/**/*.{png,jpg,gif,svg}',
            fonts: './app/src/fonts/**/**/*.*',
            video: './app/src/video/**/*.mp4'
        },
        build: { /* Положить */
            html: './app/build/',
            style: './app/build/style/',
            js: './app/build/script/',
            img: './app/build/images/',
            fonts: './app/build/fonts/',
            video: './app/build/video/'
        },
        watch: { /* Смотреть */
            html: ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
            style: './app/src/style/**/*.*',
            js: './app/src/script/**/*.js',
            img: './app/src/images/**/*.{png,jpg,gif,svg}',
            fonts: './app/src/fonts/**/*.*',
            video: './app/src/video/**/*.mp4'
        }
    },
    tasks: {
        default: ['html', 'style', 'js', 'img', 'video', 'fonts', 'watch', 'server'],
        build: ['html', 'style', 'js', 'img', 'video', 'fonts']
    }
}