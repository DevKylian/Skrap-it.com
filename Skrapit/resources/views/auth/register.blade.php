<!DOCTYPE html>
<html lang="en">

<head>
    <title>Sign-up | Skrap-it</title>
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
                                <h6 class="h4 mb-0 mt-4">Create your account</h6>
                                <p class="text-muted mt-0 mb-4">Welcome to Skrap-it, take advantage of the free
                                    offer.</p>
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
                                        <label class="form-control-label">Password</label>
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
                                    <div class="form-group ">
                                        <label class="form-control-label">Password confirmation</label>
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
                                            <label class="custom-control-label" for="checkbox-signup">I agree to the
                                                <a href="#">terms and conditions of use</a></label>
                                        </div>
                                    </div>
                                    <div class="form-group mt-4 text-center">
                                        <button class="sbtn sbtn-red btn-block" type="submit"><i
                                                class="fad fa-sign-in mr-3"></i>Register
                                        </button>
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
                        <p class="text-muted">Already registered ?
                            <a href="{{ url('login') }}" class="text-primary font-weight-bold ml-1">Sign in !</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>

</html>
