@include('dashboard.includes.header')

<div class="page-title dashboard">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <div class="page-title-content">
                    <p>Your API's</p>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <div>
                        <a href="#" class="sbtn sbtn-dark">
                            <i class="fad fa-plus-circle mr-3 disabled"></i>Create API (3/3)
                        </a>
                    </div>
                    <div class="align-self-center justify-content-end">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="customSwitch1">
                            <label class="custom-control-label" for="customSwitch1">Notify when 80% consumption</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-4 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="dropdown float-right">
                            <a href="#" class="dropdown-toggle arrow-none card-drop marge-points" data-toggle="dropdown"
                               aria-expanded="true">
                                <i class="far fa-ellipsis-v float-right"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end"
                                 style="position: absolute; transform: translate3d(-150px, 10px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <a href="" class="dropdown-item">Delete</a>
                            </div>
                        </div>
                        <div class="sbadge sbadge-orange float-right">
                            <a href="" class="swhite">Copy key</a>
                        </div>
                        <p class="sdark text-uppercase font-weight-bold font-size-12">API #0001</p>
                    </div>
                    <div class="card-body border-top">
                        <div class="row align-items-center">
                            <div class="col-sm-auto">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item pr-2">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Start date">
                                            <i class="fad fa-calendar mr-2"></i>01 Feb</a>
                                    </li>
                                    <li class="list-inline-item pr-2">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Expiration date">
                                            <i class="fad fa-calendar-check mr-2"></i>30 Feb</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Remaining usage">
                                            <i class="fad fa-bullseye fa-swap-opacity mr-2"></i>250</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col offset-sm-1">
                                <div class="progress mt-4 mt-sm-0" style="height: 5px;" data-toggle="tooltip"
                                     data-placement="top" title="" data-original-title="50%">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 50%;"
                                         aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="dropdown float-right">
                            <a href="#" class="dropdown-toggle arrow-none card-drop marge-points" data-toggle="dropdown"
                               aria-expanded="true">
                                <i class="far fa-ellipsis-v float-right"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end"
                                 style="position: absolute; transform: translate3d(-150px, 10px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <a href="" class="dropdown-item">Delete</a>
                            </div>
                        </div>
                        <div class="sbadge sbadge-orange float-right">
                            <a href="" class="swhite">Copy key</a>
                        </div>
                        <p class="sdark text-uppercase font-weight-bold font-size-12">API #0001</p>
                    </div>
                    <div class="card-body border-top">
                        <div class="row align-items-center">
                            <div class="col-sm-auto">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item pr-2">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Start date">
                                            <i class="fad fa-calendar mr-2"></i>01 Feb</a>
                                    </li>
                                    <li class="list-inline-item pr-2">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Expiration date">
                                            <i class="fad fa-calendar-check mr-2"></i>30 Feb</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Remaining usage">
                                            <i class="fad fa-bullseye fa-swap-opacity mr-2"></i>250</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col offset-sm-1">
                                <div class="progress mt-4 mt-sm-0" style="height: 5px;" data-toggle="tooltip"
                                     data-placement="top" title="" data-original-title="50%">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 50%;"
                                         aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="dropdown float-right">
                            <a href="#" class="dropdown-toggle arrow-none card-drop marge-points" data-toggle="dropdown"
                               aria-expanded="true">
                                <i class="far fa-ellipsis-v float-right"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end"
                                 style="position: absolute; transform: translate3d(-150px, 10px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <a href="" class="dropdown-item">Delete</a>
                            </div>
                        </div>
                        <div class="sbadge sbadge-orange float-right">
                            <a href="" class="swhite">Copy key</a>
                        </div>
                        <p class="sdark text-uppercase font-weight-bold font-size-12">API #0001</p>
                    </div>
                    <div class="card-body border-top">
                        <div class="row align-items-center">
                            <div class="col-sm-auto">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item pr-2">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Start date">
                                            <i class="fad fa-calendar mr-2"></i>01 Feb</a>
                                    </li>
                                    <li class="list-inline-item pr-2">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Expiration date">
                                            <i class="fad fa-calendar-check mr-2"></i>30 Feb</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="text-muted d-inline-block" data-toggle="tooltip"
                                           data-placement="top" title="" data-original-title="Remaining usage">
                                            <i class="fad fa-bullseye fa-swap-opacity mr-2"></i>250</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col offset-sm-1">
                                <div class="progress mt-4 mt-sm-0" style="height: 5px;" data-toggle="tooltip"
                                     data-placement="top" title="" data-original-title="50%">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 50%;"
                                         aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
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

@include('dashboard.includes.footer')
