var src = './src/';
var build = './build/';

module.exports = {
    jade: {
        src: [ src + 'templates/*.jade'],
        build: build + 'public'
    },

    sass: {
        src: [src + 'sass/**/*.scss'],
        build: build + 'public/css'
    },

    js: {
        src: [src + 'js/**/*.js'],
        build: build + 'public/js'
    },

    api: {
        src: [src + 'api/**/*.js'],
        build: build,
        buildName: 'index.js'
    }
}
