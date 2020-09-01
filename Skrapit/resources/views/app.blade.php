<!doctype html>
<html lang="en">
<head>
    <title>Skrap-it</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">

    <link rel="icon" href="/img/favicons/favicon.ico"/>

    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ mix('css/dashboard/main.css') }}">
    <link rel="stylesheet" href="{{ mix('css/custom.css') }}">
    <link rel="stylesheet" href="{{ mix('css/icons.css') }}">

</head>
<body>

<div id="app">
    <main-app></main-app>
</div>

<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ mix('js/assets/global.js') }}"></script>

</body>
</html>
