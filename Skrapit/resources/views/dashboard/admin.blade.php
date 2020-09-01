@include('dashboard.includes.header')

<div class="page-title dashboard">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <div class="page-title-content">
                    <p>Admin</p>
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
                                <h3 class="font-weight-bold text-uppercase">1500</h3>
                                <div class="d-flex d-sm-block d-lg-flex align-items-end">
                                    <p class="mb-0 mr-2 text-muted">Total users</p>
                                </div>
                            </div>
                            <div>
                                <div class="avatar avatar-lg">
                                    <div class="avatar-title sdark sbg-soft-dark rounded">
                                        <i class="fad fa-users"></i>
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
                                <h3 class="font-weight-bold text-uppercase">12</h3>
                                <div class="d-flex d-sm-block d-lg-flex align-items-end">
                                    <p class="mb-0 mr-2 text-muted">Waiting support</p>
                                </div>
                            </div>
                            <div>
                                <div class="avatar avatar-lg">
                                    <div class="avatar-title sorange sbg-soft-orange rounded">
                                        <i class="fad fa-life-ring"></i>
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
                                <h3 class="font-weight-bold text-uppercase">12000</h3>
                                <div class="d-flex d-sm-block d-lg-flex align-items-end">
                                    <p class="mb-0 mr-2 text-muted">Today API usage</p>
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
                                <h3 class="font-weight-bold text-uppercase">120 $</h3>
                                <div class="d-flex d-sm-block d-lg-flex align-items-end">
                                    <p class="mb-0 mr-2 text-muted">Total earned</p>
                                </div>
                            </div>
                            <div>
                                <div class="avatar avatar-lg">
                                    <div class="avatar-title sdark sbg-soft-dark rounded">
                                        <i class="fad fa-envelope-open-dollar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-widgets">
                            <a href="#" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                            <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false"
                                aria-controls="cardCollpase3"><i class="mdi mdi-minus"></i></a>
                            <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                        </div>
                        <h4 class="header-title mb-0">Packages repartition</h4>

                        <div id="cardCollpase3" class="collapse pt-3 show">
                            <div class="text-center">
                                <div id="total-users" data-colors="#FF4757,#ff843c,#0D1431,#40c78f"><canvas width="220"
                                        height="220"
                                        style="display: inline-block; width: 220px; height: 220px; vertical-align: top;"></canvas>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-4">
                                        <p class="text-muted font-15 mb-1 text-truncate">Free</p>
                                        <h4><i class="fe-arrow-down text-danger mr-1"></i>250</h4>
                                    </div>
                                    <div class="col-4">
                                        <p class="text-muted font-15 mb-1 text-truncate">Standard</p>
                                        <h4><i class="fe-arrow-up text-success mr-1"></i>35</h4>
                                    </div>
                                    <div class="col-4">
                                        <p class="text-muted font-15 mb-1 text-truncate">Premium</p>
                                        <h4><i class="fe-arrow-up text-success mr-1"></i>20</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-8 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-widgets">
                            <a href="#" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                            <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false"
                                aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                            <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                        </div>
                        <h4 class="header-title mb-0">API usage</h4>

                        <div id="cardCollpase2" class="collapse pt-3 show">
                            <div class="text-center">
                                <div id="income-amounts" data-colors="#0D1431"><canvas width="205" height="220"
                                        style="display: inline-block; width: 205px; height: 220px; vertical-align: top;"></canvas>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-6">
                                        <p class="text-muted font-15 mb-1 text-truncate">Last Month</p>
                                        <h4><i class="fe-arrow-up text-success mr-1"></i>115</h4>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-muted font-15 mb-1 text-truncate">This Month</p>
                                        <h4><i class="fe-arrow-up text-success mr-1"></i>850</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="table-responsive sbg-white sshadow">
                    <table class="table table-centered table-borderless mb-0">
                        <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Consumption</th>
                                <th>Package</th>
                                <th>Creation date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john.doe@skrap-it.com</td>
                                <td>150 / 1000</td>
                                <td><span class="sdark">Free</span></td>
                                <td>Oct 23, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kylian</td>
                                <td>Dev</td>
                                <td>kylian.dev@skrap-it.com</td>
                                <td>1850 / 3000</td>
                                <td><span class="sorange">Standard</span></td>
                                <td>Oct 23, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Alfred</td>
                                <td>Joe</td>
                                <td>alfred.joe@skrap-it.com</td>
                                <td>8400 / 10000</td>
                                <td><span class="sred">Premium</span></td>
                                <td>Oct 22, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john.doe@skrap-it.com</td>
                                <td>150 / 1000</td>
                                <td><span class="sdark">Free</span></td>
                                <td>Oct 23, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kylian</td>
                                <td>Dev</td>
                                <td>kylian.dev@skrap-it.com</td>
                                <td>1850 / 3000</td>
                                <td><span class="sorange">Standard</span></td>
                                <td>Oct 23, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Alfred</td>
                                <td>Joe</td>
                                <td>alfred.joe@skrap-it.com</td>
                                <td>8400 / 10000</td>
                                <td><span class="sred">Premium</span></td>
                                <td>Oct 22, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john.doe@skrap-it.com</td>
                                <td>150 / 1000</td>
                                <td><span class="sdark">Free</span></td>
                                <td>Oct 23, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kylian</td>
                                <td>Dev</td>
                                <td>kylian.dev@skrap-it.com</td>
                                <td>1850 / 3000</td>
                                <td><span class="sorange">Standard</span></td>
                                <td>Oct 23, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Alfred</td>
                                <td>Joe</td>
                                <td>alfred.joe@skrap-it.com</td>
                                <td>8400 / 10000</td>
                                <td><span class="sred">Premium</span></td>
                                <td>Oct 22, 2021</td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

@include('dashboard.includes.footer')
