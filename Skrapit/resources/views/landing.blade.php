<!DOCTYPE html>
<html lang="en">

<head>
    <title>Welcome | Skrap-it</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="author" content="Softilex">

    <link rel="icon" href="/img/favicons/favicon.ico"/>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900%7COpen+Sans:300,400,500" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/landing/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/icons.css') }}">

</head>


<body class="boxed-layout">
<div class="wrapper">
    <nav class="navbar navbar-expand-md fixed-top">
        <div class="container">
            <img alt="Skrap-it Logo" class="header-logo" src="img/landing/brand/logo-colors.svg">
            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto navbar-right">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="index.html#main">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="index.html#features">How it works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="index.html#pricing">Prices</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#faqs">FAQ</a>
                    </li>
                    <li>
                        <a href="{{ url('login') }}" class="sbtn sbtn-dark animate-up-2">
                            <i class="fad fa-sign-in mr-3"></i>Sign in
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="main" id="main">
        <div class="home">
            <div class="container">
                <div class="hero-content wow fadeIn">
                    <div class="flex-split">
                        <div class="container">
                            <div class="flex-inner flex-inverted align-center">
                                <div class="sk-image">
                                    <img alt="Feature" class="img-fluid" src="img/landing/head.svg">
                                </div>
                                <div class="sk-text">
                                    <div class="left-content">
                                        <div class="sk2">
                                            <h4>A powerfull CPU API</h4>
                                            <h2>We've got them all !</h2>
                                            <p>We make sure that the api is as reliable as possible. You will find all the CPUs of the Intel range, without exception.</p>
                                        </div>
                                        <div class="sbtn sbtn-soft-dark animate-up-2">
                                            Learn more<i class="fad fa-info-circle ml-3"></i>
                                        </div>
                                        <div class="sbtn sbtn-red animate-up-2">
                                            Start for Free<i class="fad fa-arrow-alt-circle-right ml-3"></i>
                                        </div>
                                    </div>
                                    <p class="condition_txt">No credit card required*</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sk">
            <div class="container">
                <div class="sk-inner">
                    <div class="sk-flex">
                        <div class="sk2">
                            <h4 class="section-title sorange">Our arguments</h4>
                            <h2>This is why our API is certainly the best.</h2>
                            <p>Would you like to test it before registering ?<br>It's possible, <a href="#try" class="font-weight-bold">Try it here !</a></p>
                        </div>
                    </div>
                    <div class="sk-flex">
                        <div class="sk1 animate-up-2">
                            <div class="sk-item sbg-soft-dark">
                                <div class="sk-icon">
                                    <div class="sk-img"><img alt="Feature" src="img/landing/free.svg" width="80"></div>
                                </div>
                                <div class="sk-text">
                                    <h3>Free Offer</h3>
                                    <p>Free lifetime offer, but with limited data.</p>
                                </div>
                            </div>
                        </div>
                        <div class="sk1 animate-up-2">
                            <div class="sk-item sbg-soft-orange">
                                <div class="sk-icon">
                                    <div class="sk-img"><img alt="Feature" src="img/landing/up-to-date.svg" width="80"></div>
                                </div>
                                <div class="sk-text">
                                    <h3>Up-to-date</h3>
                                    <p>Updated in real time to provide reliable data.</p>
                                </div>
                            </div>
                        </div>
                        <div class="sk1 animate-up-2">
                            <div class="sk-item sbg-soft-red">
                                <div class="sk-icon">
                                    <div class="sk-img"><img alt="Feature" src="img/landing/reliable.svg" width="80"></div>
                                </div>
                                <div class="sk-text">
                                    <h3>Reliable</h3>
                                    <p>Reliable and robust, it is hosted on different servers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ft-flex" id="features">
            <div class="container">
                <div class="ft-inner align-center">
                    <div class="ft-image wow"><img alt="Feature" class="img-fluid" src="img/landing/steps.svg"></div>
                    <div class="ft-text">
                        <div class="ft-content">
                            <h2>How it works ?</h2>
                            <p>We know that you prefer simplicity, and we took the time to do it right.</p>
                            <ul>
                                <li>
                                    <img src="img/landing/one.svg" alt="Steps One" class="w-20p"> Sign up on our platform.
                                </li>
                                <li>
                                    <img src="img/landing/two.svg" alt="Steps Two" class="w-20p"> Choose the offer that suits you best.
                                </li>
                                <li>
                                    <img src="img/landing/three.svg" alt="Steps Three" class="w-20p"> Copy your key, and access it !
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sk-stats">
            <div class="container-s">
                <div class="row text-center">
                    <div class="col-sm-12">
                        <div class="intro">
                            <h4 class="section-title sorange">OUR RESULTS</h4>
                            <h2>Statistics & Facts</h2>
                        </div>
                    </div>
                    <div class="col-6 col-sm-3">
                        <div class="counter-up">
                            <div class="counter-icon"><img alt="Icon" src="img/landing/cpu.svg"></div>
                            <h3>+<span class="counter">2737</span></h3>
                            <div class="counter-text">
                                <h2>CPU's</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-3">
                        <div class="counter-up">
                            <div class="counter-icon"><img alt="Icon" src="img/landing/uses.svg"></div>
                            <h3>+<span class="counter">8500</span></h3>
                            <div class="counter-text">
                                <h2>Daily Uses</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-3">
                        <div class="counter-up">
                            <div class="counter-icon"><img alt="Icon" src="img/landing/visits.svg"></div>
                            <h3>+<span class="counter">12000</span></h3>
                            <div class="counter-text">
                                <h2>Monthly Visits</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-3">
                        <div class="counter-up">
                            <div class="counter-icon"><img alt="Icon" src="img/landing/api.svg"></div>
                            <h3>+<span class="counter">60</span></h3>
                            <div class="counter-text">
                                <h2>Spec's for each CPU</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-section" id="pricing">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 col-sm-10 offset-sm-1">
                        <div class="pricing-intro text-center">
                            <h4 class="section-title sorange">Our prices</h4>
                            <h1>Simple &amp; Affordable Prices.</h1>
                            <p>Our offers have been created to adapt as much as possible to your requests.</p>
                        </div>
                    </div>
                    <div class="col-lg-10 offset-lg-1 col-sm-12">
                        <div class="row">
                            <div class="col-lg-6 col-xl-6">
                                <div class="card mb-5 mb-lg-6 px-2">
                                    <div class="card-header border-light px-4 position-relative">
                                        <div class="d-flex mb-3 mt-5">
                                            <h2 class="display-2 mb-0">Free</h2> <span class="h6 font-weight-normal align-self-end">/life</span>
                                        </div>
                                        <h4 class="mb-3 text-black">Economic</h4>
                                        <p class="text-muted mb-0">A limited offer, but it's free and for life !<br>Not convinced yet ?
                                            <a class="font-weight-bold" href="#try">Try it !</a></p>
                                    </div>
                                    <div class="card-body pt-3">
                                        <ul class="list-group simple-list">
                                            <li class="list-group-item font-weight-normal"><span class="sdark"><i class="fas fa-check"></i></span> <span class="font-weight-bolder">1.000</span> uses</li>
                                            <li class="list-group-item font-weight-normal"><span class="sdark"><i class="fas fa-check"></i></span> <span class="font-weight-bolder">1</span> API</li>
                                            <li class="list-group-item font-weight-normal"><span class="sdark"><i class="fas fa-check"></i></span> <span class="font-weight-bolder">Limited</span> access</li>
                                            <li class="list-group-item font-weight-normal">
                                                <span class="sdark"><i class="fas fa-times"></i></span> <del>Whitelist IP</del>
                                            </li>
                                            <li class="list-group-item font-weight-normal">
                                                <span class="sdark"><i class="fas fa-times"></i></span> <del>Quota alert by email</del>
                                            </li>
                                            <li class="list-group-item font-weight-normal">
                                                <span class="sdark"><i class="fas fa-times"></i></span> <del>Priority on support</del>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="card-footer px-4 pb-4">
                                        <a class="btn btn-block sbtn-dark animate-up-2" href="#">Start for Free <span class="icon icon-xs"><i class="fas fa-arrow-right ml-3"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-xl-6">
                                <div class="card mb-5 mb-lg-6 px-2">
                                    <div class="card-header border-light px-4 position-relative">
                                        <div class="d-flex mb-3 mt-5 sdark">
                                            <span class="h5 mb-0">$</span><span class="price display-2 sred mb-0">1.50</span> <span class="h6 font-weight-normal align-self-end" data-id="duration">/month</span>
                                        </div>
                                        <h4 class="mb-3 text-black">Custom</h4>
                                        <p class="text-muted  mb-0">This offer starts at $1.50, <br>It's up to you to customize it afterwards !</p>
                                    </div>
                                    <div class="card-body pt-3">
                                        <ul class="list-group simple-list">
                                            <li class="list-group-item font-weight-normal"><span class="sred"><i class="fas fa-check"></i></span> <span class="font-weight-bolder">1k-100k</span> uses</li>
                                            <li class="list-group-item font-weight-normal"><span class="sred"><i class="fas fa-check"></i></span> <span class="font-weight-bolder">1-100</span> API</li>
                                            <li class="list-group-item font-weight-normal"><span class="sred"><i class="fas fa-check"></i></span> <span class="font-weight-bolder">Full</span> access</li>
                                            <li class="list-group-item font-weight-normal"><span class="sred"><i class="fas fa-check"></i></span> <span class="font-weight-bolder">Whitelist 10</span> IP</li>
                                            <li class="list-group-item font-weight-normal"><span class="sred"><i class="fas fa-check"></i></span>Quota alert by email</li>
                                            <li class="list-group-item font-weight-normal"><span class="sred"><i class="fas fa-check"></i></span>Priority on support</li>
                                        </ul>
                                    </div>
                                    <div class="card-footer px-4 pb-4">
                                        <a class="btn btn-block sbtn-red animate-up-2" href="#">Register now <span class="icon icon-xs"><i class="fas fa-arrow-right ml-3"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="refund-txt">* No credit card required for the Free offer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="yd_faqs" id="faqs">
        <div class="container">
            <div class="faq_inner">
                <div class="col-md-10 offset-md-1">
                    <div class="faq_intro">
                        <h2>Frequently Asked Questions.</h2>
                        <p>Here are the most frequently asked questions.</p>
                        <h5>Still have questions ? </h5><a class="font-weight-bold" href="">Contact us</a>
                    </div>
                    <div id="accordion">
                        <div class="row">
                            <div class="col-md-6 custompadding">
                                <div class="mb-0">
                                    <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                        <a class="card-title">What is Skrap-it ?</a>
                                    </div>
                                    <div aria-labelledby="headingOne" class="collapse" data-parent="#accordion" id="collapseOne">
                                        <div class="card-body">
                                            <p>Skrap-it is a platform that gives you access to an API that contains all the processors of the Intel range.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 custompadding">
                                <div class="mb-0">
                                    <div class="card-header collapsed" data-toggle="collapse" href="#collapseTwo">
                                        <a class="card-title">Is the free offer really free ?</a>
                                    </div>
                                    <div aria-labelledby="headingTwo" class="collapse" data-parent="#accordion" id="collapseTwo">
                                        <div class="card-body">
                                            <p>The offer is completely free, just log in, choose the offer and that's it ! Your credit card information is not required.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 custompadding">
                                <div class="mb-0">
                                    <div class="card-header collapsed" data-toggle="collapse" href="#collapseThree">
                                        <a class="card-title">What more does the custom offer ?</a>
                                    </div>
                                    <div aria-labelledby="headingThree" class="collapse" data-parent="#accordion" id="collapseThree">
                                        <div class="card-body">
                                            <p>The free api only gives you few information about the processors, while the custom offer unlocks everything. Also, get up to 100.000 uses per month, and have a maximum of 100 api's.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 custompadding">
                                <div class="mb-0">
                                    <div class="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                                        <a class="card-title">How do I access API ?</a>
                                    </div>
                                    <div aria-labelledby="headingThree" class="collapse" data-parent="#accordion" id="collapseFour">
                                        <div class="card-body">
                                            <p>We put at your disposal a complete documentation, I invite you to consult it. For any other question, please do not hesitate to contact us.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="yd_cta_box" id="try">
        <div class="container">
            <div class="cta_box">
                <div class="cta_box_inner">
                    <div class="col-sm-12 col-md-12">
                        <h4 class="section-title sorange">Try it without registering</h4>
                        <h2>Want to test it without registering ?<br>Request a test API by email !</h2>
                        <div class="form">
                            <form accept-charset="UTF-8" action="" class="subscribe-form" id="form" method="post" name="form">
                                <input class="mail" id="email" name="email" placeholder="Enter email address" type="email">
                                <input class="submit-button" type="submit" value="Send">
                            </form>
                            <div id="response"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="container sdark">
            <div class="row">
                <div class="col text-center">
                    <a class="footer-brand" href="">
                        <img alt="Skrap-it Logo" class="footer-logo" src="img/landing/brand/logo-colors.svg">
                    </a>
                    <ul class="list-inline sdark list-group-flush list-group-borderless mb-0 mt-4">
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" class="sdark">Home</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" class="sdark">Login</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" class="sdark">Register</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" class="sdark">Prices</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" class="sdark">Terms</a></li>
                        <li class="list-inline-item px-0 px-sm-2">
                            <a href="" class="sdark">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col mb-4 mb-md-0">
                    <div class="d-flex text-center justify-content-center align-items-center">
                        <p class="small mb-0">© Skrap-it <span class="current-year">2020</span>. All rights reserved. by <a class="font-weight-bold" href="https://www.softilex.eu">Softilex</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ mix('js/assets/global.js') }}"></script>
</body>

</html>
