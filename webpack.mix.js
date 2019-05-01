const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/isShow.js', 'public/js/bundle/is-show.bundle.js')
    .js('resources/js/ButtonPart.js', 'public/js/bundle/button-part.bundle.js')
    .js('resources/js/PointInfo.js', 'public/js/bundle/point-info.bundle.js')
;