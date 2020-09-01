@include('dashboard.includes.header')

<div class="page-title dashboard">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <div class="page-title-content">
                    <p>Your Space</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-4 col-xl-3 col-md-6">
                <div class="card animate-up-2">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h3 class="font-weight-bold text-uppercase">Premium</h3>
                                <div class="d-flex d-sm-block d-lg-flex align-items-end">
                                    <p class="mb-0 mr-2 text-muted">Package</p>
                                </div>
                            </div>
                            <div>
                                <div class="avatar avatar-lg">
                                    <div class="avatar-title sdark sbg-soft-dark rounded">
                                        <i class="fad fa-box-open"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 col-xl-3 col-md-6">
                <div class="card animate-up-2">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h3 class="font-weight-bold text-uppercase">23 days</h3>
                                <div class="d-flex d-sm-block d-lg-flex align-items-end">
                                    <p class="mb-0 mr-2 text-muted">Expiration</p>
                                </div>
                            </div>
                            <div>
                                <div class="avatar avatar-lg">
                                    <div class="avatar-title sorange sbg-soft-orange rounded">
                                        <i class="fad fa-alarm-clock"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 col-xl-3 col-md-6">
                <div class="card animate-up-2">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h3 class="font-weight-bold text-uppercase">5 %</h3>
                                <div class="d-flex d-sm-block d-lg-flex align-items-end">
                                    <p class="mb-0 mr-2 text-muted">API usage</p>
                                </div>
                            </div>
                            <div>
                                <div class="avatar avatar-lg">
                                    <div class="avatar-title sred sbg-soft-red rounded">
                                        <i class="fad fa-project-diagram"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 col-xl-3 col-md-6">
                <div class="card animate-up-2">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h3 class="font-weight-bold text-uppercase">3 / 3</h3>
                                <div class="d-flex d-sm-block d-lg-flex align-items-end">
                                    <p class="mb-0 mr-2 text-muted">API number</p>
                                </div>
                            </div>
                            <div>
                                <div class="avatar avatar-lg">
                                    <div class="avatar-title sdark sbg-soft-dark rounded">
                                        <i class="fad fa-layer-group"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-3 col-md-4 col-lg-3 col-xl-3 d-none d-sm-block">
                                <img src="/img/dashboard/svg/empty_api.svg" class="mr-4 align-self-center img-fluid"
                                     alt="cal">
                            </div>
                            <div class="col-8 col-sm-8 col-md-6 col-lg-5 col-xl-6 offset-1">
                                <div class="mt-4">
                                    <h5 class="mt-0 mb-3 font-weight-bold">You currently have no api key</h5>
                                    <p>Depending on your offer, you can generate X api keys, and your number of
                                        usage
                                        will decrease according to the use of these keys.</p>
                                    <a href="#" class="sbtn sbtn-orange animate-up-2 mt-3" data-toggle="modal"
                                       data-target="#generateApi">
                                        <i class="fad fa-plus-circle mr-3"></i>Generate (3/3)
                                    </a>
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
