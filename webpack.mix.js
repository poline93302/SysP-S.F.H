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
let resourcesPath ='resources/js/';
 mix.js(resourcesPath +'isShow.js'   , 'public/js/bundle/is-show.bundle.js')
    // .js(resourcesPath+'ButtonPart.js', 'public/js/bundle/button-part.bundle.js')
    // .js(resourcesPath+'PointInfo.js' , 'public/js/bundle/point-info.bundle.js')
;