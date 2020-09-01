<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard | Skrap-it</title>

    <link rel="icon" type="image/favicon.png" sizes="16x16" href="/img/favicons/favicon.ico">

    <link rel="stylesheet" href="{{ asset('css/dashboard/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
    <link rel="stylesheet" href="{{ asset('css/icons.css') }}">

</head>

<body>

<div class="modal fade" id="generateApi" tabindex="-1" role="dialog" aria-labelledby="generateApi"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="generateApiTitle">Generate API Key</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="fad fa-times-circle"></i>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <label for="apiName">API Name</label>
                            <input type="text" class="form-control" id="apiName" placeholder="Intel">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="apiUsage">Max usage : <span class="font-weight-bold">250</span></label>
                            <input type="range" value="50" class="custom-range" id="apiUsage">
                        </div>
                    </div>
                    <div class="form-row mt-3">
                        <div class="form-group col-12">
                            <a href="#" class="sbtn sbtn-red btn-block"><i
                                    class="fad fa-plus-circle mr-3"></i>Generate</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div id="main-wrapper">
    <div class="header dashboard">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                        <a class="navbar-brand" href="index.php">
                            <img src="/img/brand/logo-colors.svg" alt="" class="desktop">
                            <img src="/img/brand/icon-colors.svg" alt="" class="mobile">
                        </a>
                        <div class="dashboard_log my-2">
                            <div class="d-flex align-items-center">
                                <div class="account_money">
                                    <ul>
                                        <li class="usd">
                                            <span class="sred mr-2">Become Premium now !</span>
                                            <span class="sbadge-price-sm sbadge-soft-red right-3">
                                                    -70%
                                                </span>
                                        </li>
                                    </ul>
                                </div>
                                <li class="dropdown notification-list topbar-dropdown">
                                    <div class="nav-link dropdown-toggle"
                                         data-toggle="dropdown" role="button" aria-haspopup="false"
                                         aria-expanded="true">
                                        <i class="far fa-bell noti-icon"></i>
                                        <span class="badge sbadge-red rounded-circle noti-icon-badge">3</span>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-lg sshadow"
                                         style="position: absolute; transform: translate3d(-269px, 70px, 0px); top: 0px; left: 0px; will-change: transform;"
                                         x-placement="bottom-end">

                                        <div class="dropdown-item noti-title">
                                            <h5 class="m-0">
                                                    <span class="float-right">
                                                        <a href="" class="text-dark">
                                                            <small>Clear All</small>
                                                        </a>
                                                    </span>Notifications
                                            </h5>
                                        </div>

                                        <div class="noti-scroll" data-simplebar="init">
                                            <div class="simplebar-wrapper" style="margin: 0px;">
                                                <div class="simplebar-height-auto-observer-wrapper">
                                                    <div class="simplebar-height-auto-observer"></div>
                                                </div>
                                                <div class="simplebar-mask">
                                                    <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                                        <div class="simplebar-content-wrapper"
                                                             style="height: auto; overflow: hidden scroll;">
                                                            <div class="simplebar-content" style="padding: 0px;">

                                                                <a href="javascript:void(0);"
                                                                   class="dropdown-item notify-item">
                                                                    <div class="notify-icon sbg-red">
                                                                        <i class="fad fa-user-plus fa-sm"></i>
                                                                    </div>
                                                                    <p class="notify-details">New user registered.
                                                                        <small class="text-muted">1 hour
                                                                            ago</small>
                                                                    </p>
                                                                </a>

                                                                <a href="javascript:void(0);"
                                                                   class="dropdown-item notify-item">
                                                                    <div class="notify-icon sbg-orange">
                                                                        <i
                                                                            class="fad fa-project-diagram fa-sm"></i>
                                                                    </div>
                                                                    <p class="notify-details">You have reached 80% of
                                                                        your API's consumption
                                                                        <small class="text-muted">2 hours ago</small>
                                                                    </p>
                                                                </a>

                                                                <a href="javascript:void(0);"
                                                                   class="dropdown-item notify-item">
                                                                    <div class="notify-icon sbg-dark">
                                                                        <i class="fad fa-envelope fa-sm"></i>
                                                                    </div>
                                                                    <p class="notify-details">You need to active your
                                                                        account
                                                                        <small class="text-muted">2 hours
                                                                            ago</small>
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="simplebar-placeholder"
                                                     style="width: auto; height: 440px;"></div>
                                            </div>
                                            <div class="simplebar-track simplebar-horizontal"
                                                 style="visibility: hidden;">
                                                <div class="simplebar-scrollbar" style="width: 0px; display: none;">
                                                </div>
                                            </div>
                                            <div class="simplebar-track simplebar-vertical"
                                                 style="visibility: visible;">
                                                <div class="simplebar-scrollbar"
                                                     style="height: 120px; display: block; transform: translate3d(0px, 0px, 0px);">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <div class="profile_log dropdown">
                                    <div class="user" data-toggle="dropdown">
                                        <img class="mr-3 rounded-circle mr-0 mr-sm-3" src="/img/dashboard/user.png"
                                             width="40" height="40" alt="">
                                        <span class="name">Kylian Dev</span>
                                        <span class="arrow"><i class="la la-angle-down"></i></span>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right sshadow">
                                        <a href="{{ url('dashboard/profile') }}" class="dropdown-item">
                                            <i class="fad fa-cog"></i> Settings
                                        </a>
                                        <a href="{{ url('login') }}" class="dropdown-item">
                                            <i class="fad fa-sign-out"></i> Logout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="sidebar sbg-dark">
        <div class="menu flex-grow-1">
            <ul>
                <li>
                    <a href="{{ url('dashboard') }}" data-toggle="tooltip" data-placement="right" title="Dashboard">
                        <span><i class="fad fa-home fa-lg"></i></span>
                    </a>
                </li>
                <li><a href="{{ url('dashboard/profile') }}" data-toggle="tooltip" data-placement="right"
                       title="Profile">
                        <span><i class="fad fa-user fa-lg"></i></span>
                    </a>
                </li>
                <li><a href="{{ url('dashboard/project') }}" data-toggle="tooltip" data-placement="right" title="API's">
                        <span><i class="fad fa-project-diagram fa-lg"></i></span>
                    </a>
                </li>
                <li><a href="{{ url('dashboard/packages') }}" data-toggle="tooltip" data-placement="right"
                       title="Packages">
                        <span><i class="fad fa-cubes fa-lg"></i></span>
                    </a>
                </li>
                <li><a href="{{ url('dashboard/support') }}" data-toggle="tooltip" data-placement="right"
                       title="Support">
                        <span><i class="fad fa-question-circle"></i></span>
                    </a>
                </li>
                <li><a href="{{ url('dashboard/admin') }}" data-toggle="tooltip" data-placement="right"
                       title="Administration">
                        <span><i class="fad fa-planet-ringed fa-lg sred"></i></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

