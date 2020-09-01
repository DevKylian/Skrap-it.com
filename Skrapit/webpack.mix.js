const mix = require('laravel-mix');

mix.webpackConfig({
    output:{
        chunkFilename:'js/output/[name].js',
    }
});

mix.js('resources/js/app.js', 'public/js/app.js')

// Global JS - Popper & Bootstrap 5
mix.combine([
    'resources/js/assets/popper.min.js',
    'resources/js/assets/bootstrap5.min.js',
], 'public/js/assets/global.js')

// Landing CSS
mix.combine([
    'resources/sass/landing/skrapit.css',
], 'public/css/landing/main.css');

// Dashboard JS
mix.combine([
    'resources/js/dashboard/vendor.min.js',
], 'public/js/dashboard/scripts.js');

// Dashboard CSS
mix.combine([
    'resources/sass/dashboard/bootstrap.css',
    'resources/sass/dashboard/style.css',
    'resources/sass/dashboard/toast.css',
], 'public/css/dashboard/main.css');

// Custom CSS for all pages
mix.combine([
    'resources/sass/custom.css',
], 'public/css/custom.css');

// Fontawesome Icons
mix.combine([
    'resources/sass/all.css',
], 'public/css/icons.css');

// Supplement CSS
mix.combine([
    'resources/sass/app.scss'
], 'public/css/app.css');
