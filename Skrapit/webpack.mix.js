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
    'resources/sass/app.scss',
    'resources/sass/landing/skrapit.css',
    'resources/sass/custom.css',
], 'public/css/landing/main.css');

// Dashboard CSS
mix.combine([
    'resources/sass/app.scss',
    'resources/sass/dashboard/bootstrap.css',
    'resources/sass/dashboard/style.css',
    'resources/sass/dashboard/toast.css',
    'resources/sass/custom.css',
], 'public/css/dashboard/main.css');

// Fontawesome Icons
mix.combine([
    'resources/sass/all.css',
], 'public/css/icons.css');
