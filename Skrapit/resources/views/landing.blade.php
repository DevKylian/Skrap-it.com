<!DOCTYPE html>
<html lang="en">

<head>
    <title>Welcome | Skrap-it</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="author" content="Softilex">

    <link rel="icon" href="/img/favicons/favicon.ico"/>

    <link rel="stylesheet" href="{{ asset('css/landing/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/icons.css') }}">

</head>

<body>
<header class="header-global">
    <nav id="navbar-main"
         class="navbar navbar-main navbar-expand-lg navbar-dark navbar-theme-primary headroom py-lg-2 px-lg-6">
        <div class="container">
            <a class="navbar-brand @@logo_classes" href="">
                <div class="d-flex align-items-center">
                    <img class="navbar-brand-dark rotate-logo" src="/img/brand/logo-white.svg" alt="Logo light">
                    <img class="navbar-brand-light rotate-logo" src="/img/brand/icon-colors.svg" alt="Logo dark">
                </div>
            </a>
            <div class="navbar-collapse collapse" id="navbar_global">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a class="d-flex align-items-center" href="">
                                <img src="/img/brand/logo-colors.svg" alt="Logo dark">
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <a href="" class="fas fa-times" data-toggle="collapse" data-target="#navbar_global"
                               aria-controls="navbar_global"
                               aria-expanded="false" aria-label="Toggle navigation">
                            </a>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav navbar-nav-hover justify-content-center">
                    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#how-it-works" class="nav-link">How it works</a></li>
                    <li class="nav-item"><a href="#packages" class="nav-link">Packages</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Documentation</a></li>
                </ul>
            </div>
            <div class="d-none d-lg-block">
                <a href="{{ url('login') }}" class="sbtn sbtn-border-white btn-docs animate-up-2">
                    <i class="fad fa-sign-in-alt mr-3"></i>Login
                </a>
                <a href="{{ url('register') }}" class="sbtn sbtn-red btn-pricing-plan animate-up-2 ml-3">
                    <i class="fad fa-user-plus mr-3"></i>Register
                </a>
            </div>
            <div class="d-flex d-lg-none align-items-center ml-auto">
                <button class="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </nav>
</header>
<main>
    <section class="section-header pb-7 pb-lg-11 sbg-work sbg-dark text-white">
        <div class="container">
            <div class="row">
                <div class="mx-auto">
                    <div class="alert">
                            <span class="sbadge sbadge-green ml-2 mr-2">
                                Story
                            </span>
                        <span class="font-weight-bold">Did you know that ?</span> The processor with the highest
                        frequency is the i9-10900K with 5.30 Ghz !
                    </div>
                </div>
            </div>
            <div class="row justify-content-between align-items-center mt-5 mb-5">
                <div class="col-12 col-lg-5">
                    <h1 class="display-1 mb-4">We've got them all !</h1>
                    <p class="lead mb-3 mb-lg-5">Skrap-it takes care for you, to list all the processors of the
                        Intel range.</p>
                    <a href="#packages" class="sbtn sbtn-red btn-pricing-plan animate-up-2 mb-sm-4 mb-4">
                        <i class="fad fa-hand-point-right fa-swap-opacity mr-3"></i>Start for Free
                    </a>
                    <a href="#how-it-works" class="sbtn sbtn-border-white btn-docs animate-up-2 mb-sm-4 mb-4 ml-3">
                        <i class="fad fa-info-circle mr-3"></i>Learn more
                    </a>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="input-group">
                        <input class="form-control form-control-lg border-light" placeholder="i9-9980XE" type="text"
                               required>
                        <div class="input-group-prepend">
                            <button type="submit" class="sbtn sbtn-red rounded-right"><i
                                    class="fad fa-search fa-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div class="position-relative json-preview mt-3">
                        <code>
                            <div>
                                <span class="ip-info-left">"name": </span>
                                <span class="ip-info-right">Intel® Core™ i9-9980XE Extreme Edition
                                        Processor</span>
                            </div>
                            <div>
                                <span class="ip-info-left">"lithography": </span>
                                <span class="ip-info-right">14 nm</span>
                            </div>
                            <div>
                                <span class="ip-info-left">"base_frequency": </span>
                                <span class="ip-info-right">3.00 GHz</span>
                            </div>
                            <div>
                                <span class="ip-info-left">"boost_frequency": </span>
                                <span class="ip-info-right">4.40 GHz</span>
                            </div>
                            <div>
                                <span class="ip-info-left">"cores": </span>
                                <span class="ip-info-right">18</span>
                            </div>
                            <div>
                                <span class="ip-info-left">"threads": </span>
                                <span class="ip-info-right">36</span>
                            </div>
                            <div>
                                <span class="ip-info-left">"cache": </span>
                                <span class="ip-info-right">24.75 MB Intel® Smart Cache</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-md pb-0 bg-soft">
        <div class="container z-2 mt-n9 mt-lg-n11">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div class="card shadow-soft bg-white border-light animate-up-3 text-gray py-4 mb-5 mb-lg-0">
                        <div class="card-header text-center pb-0">
                            <div class="icon icon-shape sdark sbg-soft-dark rounded-circle mb-3"><span
                                    class="fad fa-cloud-upload-alt"></span></div>
                            <h4 class="text-black mt-3">Up-to-date</h4>
                            <p>Every day our API is updated for maximum reliability</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div class="card shadow-soft bg-white border-light animate-up-3 text-gray py-4 mb-5 mb-lg-0">
                        <div class="card-header text-center pb-0">
                            <div class="icon icon-shape sorange sbg-soft-orange rounded-circle mb-3"><span
                                    class="fad fa-server"></span></div>
                            <h4 class="text-black mt-3">Reliable</h4>
                            <p>Our API is reliable and robust, it is hosted on different servers</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div class="card shadow-soft bg-white border-light animate-up-3 text-gray py-4 mb-5 mb-lg-0">
                        <div class="card-header text-center pb-0">
                            <div class="icon icon-shape sred sbg-soft-red rounded-circle mb-3"><span
                                    class="fad fa-bolt"></span></div>
                            <h4 class="text-black mt-3">Very Fast</h4>
                            <p>No breaks ! Receive the result of your search in less than 40ms</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card shadow-soft bg-white border-light animate-up-3 text-gray py-4 mb-5 mb-lg-0">
                        <div class="card-header text-center pb-0">
                            <div class="icon icon-shape sdark sbg-soft-dark rounded-circle mb-3"><span
                                    class="fad fa-badge-percent"></span></div>
                            <h4 class="text-black mt-3">Lifetime Free</h4>
                            <p>We provide you with a first, high-performance free API offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section-lg bg-soft">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 text-center">
                        <span class="sbadge sbadge-red badge-pill badge-lg mb-4">
                            <i class="fad fa-fire-alt mr-2"></i>
                            New Features
                        </span>
                    <h2 class="h1">Very soon, the AMD API will be added</h2>
                    <p class="mt-4">We want to gather as much information as possible in a single API.<br>
                        Packages will be reviewed, and you will be notified !<br>
                        Subscription is currently cheaper, and will remain cheaper for future versions for those who
                        subscribe now.</p>
                    <a href="#packages" class="sbtn sbtn-soft-dark animate-up-2 mt-3 mb-4 mb-lg-0">
                        <i class="fad fa-check mr-3"></i>
                        See all packages
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="section pb-11 pb-lg-12 section-lg sbg-red text-center text-white">
        <div class="container">
            <div class="row justify-content-center mb-4 mb-lg-6">
                <div class="col-12">
                    <h1 class="display-3 mb-4 mb-lg-5">Some statistics for you ...</h1>
                    <div class="row text-white">
                        <div class="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                            <div class="card-body text-center sbg-red border-right sborder-dark py-4">
                                <h2 class="font-weight-bold"><span class="h1 mr-2" id="totalCpus">2970</span></h2>
                                <span class="h5 font-weight-normal">Intel CPU</span>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                            <div class="card-body text-center sbg-red border-right sborder-dark py-4">
                                <h2 class="font-weight-bold"><span class="h1 mr-2">+5000</span></h2> <span
                                    class="h5 font-weight-normal">Daily use</span>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 px-md-0">
                            <div class="card-body text-center sbg-red py-4">
                                <h2 class="font-weight-bold"><span class="h1 mr-2">+1500</span></h2> <span
                                    class="h5 font-weight-normal">Users</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="section pt-0">
        <div class="container mt-n9 mt-lg-n12 z-2">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10">
                    <div class="position-relative">
                        <img class="shadow-box rounded animate-up-5" src="/img/dashboard.png"
                             alt="SaaS preview">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="section" id="how-it-works">
        <div class="container">
            <div class="row justify-content-center mb-4 mb-lg-5">
                <div class="col-12 col-md-8 text-center">
                    <h2 class="h1">How it works ?</h2>
                    <p class="lead mt-3">We make sure that our API is the easiest to use !<br>
                        However, if you need help, please do not hesitate to contact us.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tab-content" id="tabcontentexample-3">
                        <div class="tab-pane fade active show" id="find-space" role="tabpanel"
                             aria-labelledby="tab-find-space">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="card border-light mb-4 mb-lg-0 text-center">
                                        <div class="card-body p-4 px-xl-4 py-xl-6">
                                            <div
                                                class="icon icon-shape icon-lg sdark sbg-soft-dark mb-4 rounded-circle">
                                                <span class="fad fa-user"></span></div>
                                            <h3 class="h5 my-3">1. Create your account</h3>
                                            <p>When you create your account, a validation email will be sent to you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="card border-light mb-4 mb-lg-0 text-center">
                                        <div class="card-body p-4 px-xl-4 py-xl-6">
                                            <div
                                                class="icon icon-shape icon-lg sorange sbg-soft-orange mb-4 rounded-circle">
                                                <span class="fad fa-box-open"></span></div>
                                            <h3 class="h5 my-3">2. Choose a package</h3>
                                            <p>According to your desire and your means, choose a package that will
                                                best meet your needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="card border-light mb-4 mb-lg-0 text-center">
                                        <div class="card-body p-4 px-xl-4 py-xl-6">
                                            <div
                                                class="icon icon-shape icon-lg sred sbg-soft-red mb-4 rounded-circle">
                                                <span class="fad fa-key"></span></div>
                                            <h3 class="h5 my-3">3. Generate your key</h3>
                                            <p>Once you have chosen your offer, you will need to generate your api
                                                key, so you can then use it!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-header sbg-dark text-white" id="packages">
        <div class="container">
            <div class="row justify-content-center mb-3">
                <div class="col-12 col-md-10 text-center">
                    <h1 class="display-2 mb-3">Let us convince you !</h1>
                    <p class="lead px-md-5">You're not convinced ? Contact us and together we will draw up a
                        personalised quotation!</p>
                </div>
            </div>
            <div class="row mb-5 mb-lg-6">
                <div class="col">
                    <div class="d-flex align-items-center justify-content-center"> <span
                            class="h5 text-white font-weight-normal mr-4 mt-2">Monthly</span>
                        <div class="custom-control custom-switch switch-lg"><input type="checkbox"
                                                                                   class="custom-control-input"
                                                                                   id="billingSwitch"
                                                                                   data-toggle="price"
                                                                                   data-target=".price"> <label
                                class="custom-control-label text-gray font-weight-normal"
                                for="billingSwitch"></label></div>
                        <span
                            class="h5 text-white font-weight-normal ml-1 mt-2">Annual</span>
                    </div>
                </div>
            </div>
            <div class="row text-gray">
                <div class="col-12 col-lg-4">
                    <div class="card shadow-soft mb-5 mb-lg-6 px-2">
                        <div class="card-header border-light px-4 position-relative">
                            <div class="d-flex mb-3 mt-5"><span class="display-2 mb-0">Free</span> <span
                                    class="h6 font-weight-normal align-self-end">/lifetime</span></div>
                            <h4 class="mb-3 text-black">Economic</h4>
                            <p class="font-weight-normal mb-0">Do you know how to satisfy yourself just a little?
                                This offer is made for you !</p>
                        </div>
                        <div class="card-body pt-3">
                            <ul class="list-group simple-list">
                                <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            1.000</span> uses
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            Limited</span> access
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            Maximum 1 API</span></li>
                                <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                            class="fas fa-times"></i></span>
                                    <del>Whitelist IP</del>
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                            class="fas fa-times"></i></span>
                                    <del>Graphical statistics
                                        available
                                    </del>
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                            class="fas fa-times"></i></span>
                                    <del>Quota alert by email</del>
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                            class="fas fa-times"></i></span>
                                    <del>Priority access to new
                                        releases
                                    </del>
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                            class="fas fa-times"></i></span>
                                    <del>Priority on support</del>
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer px-4 pb-4">
                            <a href="{{ url('dashboard/packages') }}" class="sbtn btn-block sbtn-dark animate-up-2">
                                Start for Free
                                <span class="icon icon-xs">
                                    <i class="fas fa-arrow-right ml-3"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="card shadow-soft mb-5 mb-lg-6">
                        <div class="card-header border-light px-4 position-relative">
                                <span
                                    class="sbadge-price sbadge-soft-orange badge-pill badge-lg position-absolute right-3">
                                    -40%
                                </span>
                            <div class="d-flex mb-3 mt-5 text-primary"><span class="h5 mb-0">$</span><span
                                    class="price display-2 sorange mb-0" data-annual="25" data-monthly="3">3</span>
                                <span class="h6 font-weight-normal align-self-end" data-id="duration">/month</span>
                            </div>
                            <h4 class="mb-3 text-black">Standard</h4>
                            <p class="font-weight-normal mb-0">The offer that everyone loves! Low price, and
                                efficient !</p>
                        </div>
                        <div class="card-body pt-3">
                            <ul class="list-group simple-list">
                                <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            3.000</span> uses
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            Full</span> access
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            Maximum 3 API</span>
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            Whitelist 3 IP</span>
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                            class="fas fa-check"></i></span>Graphical statistics available <span
                                        class="text-muted text-italic">(soon)</span></li>
                                <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                            class="fas fa-check"></i></span>Quota alert by email
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                            class="fas fa-check"></i></span>Priority access to new releases
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                            class="fas fa-check"></i></span>Priority on support
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer px-4 pb-4">
                            <a href="{{ url('dashboard/packages') }}" class="sbtn btn-block sbtn-orange animate-up-2">
                                Start with Standard
                                <span class="icon icon-xs ml-3">
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="card shadow-soft border-light mb-5 mb-lg-6">
                        <div class="card-header border-light px-4 position-relative">
                                <span
                                    class="sbadge-price sbadge-soft-red badge-pill badge-lg position-absolute right-3">
                                    -70%
                                </span>
                            <div class="d-flex mb-3 mt-5"><span class="h5 mb-0">$</span><span
                                    class="price display-2 sred mb-0" data-annual="65" data-monthly="8">8</span>
                                <span class="h6 font-weight-normal align-self-end" data-id="duration">/month</span>
                            </div>
                            <h4 class="mb-3 text-black">Premium</h4>
                            <p class="font-weight-normal mb-0">You're unstoppable, you've got the most powerful
                                offer !</p>
                        </div>
                        <div class="card-body pt-3">
                            <ul class="list-group simple-list">
                                <li class="list-group-item font-weight-normal"><span class="sred"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            10.000</span> uses
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sred"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            Full</span> access
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sred"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            Maximum 10 API</span></li>
                                <li class="list-group-item font-weight-normal"><span class="sred"><i
                                            class="fas fa-check"></i></span><span class="font-weight-bolder">
                                            Whitelist 10 IP</span></li>
                                <li class="list-group-item font-weight-normal"><span class="sred"><i
                                            class="fas fa-check"></i></span>Graphical statistics available <span
                                        class="text-muted text-italic">(soon)</span></li>
                                <li class="list-group-item font-weight-normal"><span class="sred"><i
                                            class="fas fa-check"></i></span>Quota alert by email
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sred"><i
                                            class="fas fa-check"></i></span>Priority access to new releases
                                </li>
                                <li class="list-group-item font-weight-normal"><span class="sred"><i
                                            class="fas fa-check"></i></span>Priority on support
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer px-4 pb-4">
                            <a href="{{ url('dashboard/packages') }}" class="sbtn btn-block sbtn-red animate-up-2">
                                Start with Pro
                                <span class="icon icon-xs ml-3">
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section bg-soft">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="mb-4">Dare quality, Join us !</h2>
                    <p class="lead">Join over <span class="font-weight-bolder">1.500+</span> users</p><a
                        href="#" class="icon icon-lg text-gray mr-3"></a>
                </div>
                <div class="col-12 text-center">
                    <a href="#packages">
                        <span class="sbtn sbtn-red animate-up-2">
                            <i class="fad fa-hand-point-right mr-3"></i>Start for Free
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer pb-4 sbg-dark text-white">
        <div class="container">
            <div class="row">
                <div class="col text-center"><a class="footer-brand" href=""><img
                            src="/img/brand/logo-white.svg" alt="Skrap-it"></a>
                    <ul class="list-inline list-group-flush list-group-borderless mb-0">
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" target="_blank"
                               class="text-white">Home</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" target="_blank"
                               class="text-white">Login</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" target="_blank"
                               class="text-white">Register</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" target="_blank"
                               class="text-white">Prices</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" target="_blank"
                               class="text-white">Terms</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" target="_blank"
                               class="text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
            <hr class="mb-5">
            <div class="row">
                <div class="col mb-4 mb-md-0">
                    <div class="d-flex text-center justify-content-center align-items-center">
                        <p class="small text-white mb-0">&copy; Skrap-it </a><span class="current-year">2020</span>.
                            All rights
                            reserved. by <a href="https://www.softilex.eu" target="_blank">Softilex</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</main>
<script src="{{ mix('js/assets/global.js') }}"></script>
</body>

</html>
