<!DOCTYPE html>
<html lang="en">

<head>
    <title>Sign-in | Skrap-it</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="title" content="Sign-in Skrap-it">
    <meta name="author" content="Softilex">

    <link rel="icon" href="/img/favicons/favicon.ico"/>

    <link rel="stylesheet" href="{{ asset('css/auth/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
    <link rel="stylesheet" href="{{ asset('css/icons.css') }}">

</head>

<body class="authentication-bg vsc-initialized">
<div class="account-pages vertical-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="card auth-shadow">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 around-space">
                                <img src="{{ asset('img/brand/logo-colors.svg') }}" class="mb-3" alt="" height="48">
                                <h6 class="h4 mb-0 mt-4">Login to your account</h6>
                                <p class="text-muted mt-0 mb-4">Never give your password to anyone.</p>
                                <form action="#" class="authentication-form">
                                    <div class="form-group">
                                        <label class="form-control-label">Email</label>
                                        <div class="input-group input-group-merge">
                                            <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fad fa-envelope fa-lg" aria-hidden="true"></i>
                                                    </span>
                                            </div>
                                            <input type="text" class="form-control" id="name"
                                                   placeholder="hello@skrap-it.com">
                                        </div>
                                    </div>
                                    <div class="form-group ">
                                        <label class="form-control-label">Password <a href="">(Lost ?)</a></label>
                                        <div class="input-group input-group-merge">
                                            <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fad fa-unlock-alt fa-lg icon-dual"
                                                           aria-hidden="true"></i>
                                                    </span>
                                            </div>
                                            <input type="password" class="form-control" id="password"
                                                   placeholder="****************">
                                        </div>
                                    </div>
                                    <div class="form-group mb-4">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="checkbox-signup"
                                                   checked="">
                                            <label class="custom-control-label" for="checkbox-signup">Remember
                                                me</label>
                                        </div>
                                    </div>
                                    <div class="form-group mt-4 text-center">
                                        <a href="{{ url('dashboard') }}">
                                            <span class="sbtn sbtn-red btn-block" type="submit"><i
                                                    class="fad fa-sign-in mr-3"></i>Login</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-6 mobile-none">
                                <div class="auth-page-sidebar bg-auth">
                                    <div class="overlay"></div>
                                    <div class="auth-user-testimonial-login center">
                                        <p class="lead">"Our API is built to last. It is updated daily to ensure maximum
                                            information reliability.<br><br>
                                            On top of that, we have a free offer for you to test it !"</p>
                                        <p class="italic">- Kylian, CEO of Skrap-it</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 text-center">
                        <p class="text-muted">No account yet ?
                            <a href="{{ url('register') }}" class="text-primary font-weight-bold ml-1">Sign up now !</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>

</html>
