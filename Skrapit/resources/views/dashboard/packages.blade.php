@include('dashboard.includes.header')

<div class="page-title dashboard">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <div class="page-title-content">
                    <p>All Packages</p>
                    <div class="d-flex align-items-center mt-3">
                        <span class="h5 font-weight-normal mr-4 mt-2">Monthly</span>
                        <div class="custom-control custom-switch switch-lg">
                            <input type="checkbox" class="custom-control-input" id="billingSwitch" data-toggle="price"
                                data-target=".price">
                            <label class="custom-control-label text-gray font-weight-normal"
                                for="billingSwitch"></label>
                        </div>
                        <span class="h5 font-weight-normal ml-1 mt-2">Annual</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content-body">
    <div class="container-fluid">
        <div class="row text-gray">
            <div class="col-12 col-lg-6 col-xl-3">
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
                                    1.000</span> uses</li>
                            <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                        class="fas fa-check"></i></span><span class="font-weight-bolder">
                                    Limited</span> access</li>
                            <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                        class="fas fa-check"></i></span><span class="font-weight-bolder">
                                    Maximum 1 API</span></li>
                            <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                        class="fas fa-times"></i></span><del>Graphical statistics available</del></li>
                            <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                        class="fas fa-times"></i></span><del>Quota alert by email</del></li>
                            <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                        class="fas fa-times"></i></span><del>Priority access to new
                                    releases</del></li>
                            <li class="list-group-item font-weight-normal"><span class="sdark"><i
                                        class="fas fa-times"></i></span><del>Priority on support</del></li>
                        </ul>
                    </div>
                    <div class="card-footer px-4 pb-4"> <a href="#" target="_blank"
                            class="btn btn-block sbtn-dark animate-up-2">Start for Free<span class="icon icon-xs"><i
                                    class="fas fa-arrow-right ml-3"></i></span></a></div>
                </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-3">
                <div class="card shadow-soft mb-5 mb-lg-6">
                    <div class="card-header border-light px-4 position-relative">
                        <span class="sbadge-price sbadge-soft-orange badge-pill badge-lg position-absolute right-3">
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
                                    3.000</span> uses</li>
                            <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                        class="fas fa-check"></i></span><span class="font-weight-bolder">
                                    Full</span> access</li>
                            <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                        class="fas fa-check"></i></span><span class="font-weight-bolder">
                                    Maximum 3 API</span></li>
                            <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                        class="fas fa-check"></i></span>Graphical statistics available</li>
                            <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                        class="fas fa-check"></i></span>Quota alert by email</li>
                            <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                        class="fas fa-check"></i></span>Priority access to new releases</li>
                            <li class="list-group-item font-weight-normal"><span class="sorange"><i
                                        class="fas fa-check"></i></span>Priority on support</li>
                        </ul>
                    </div>
                    <div class="card-footer px-4 pb-4"> <a href="#"
                            class="btn btn-block sbtn-orange animate-up-2">Start with Standard<span
                                class="icon icon-xs ml-3"><i class="fas fa-arrow-right"></i></span></a></div>
                </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-3">
                <div class="card shadow-soft border-light mb-5 mb-lg-6">
                    <div class="card-header border-light px-4 position-relative">
                        <span class="sbadge-price sbadge-soft-red badge-pill badge-lg position-absolute right-3">
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
                                    10.000</span> uses</li>
                            <li class="list-group-item font-weight-normal"><span class="sred"><i
                                        class="fas fa-check"></i></span><span class="font-weight-bolder">
                                    Full</span> access</li>
                            <li class="list-group-item font-weight-normal"><span class="sred"><i
                                        class="fas fa-check"></i></span><span class="font-weight-bolder">
                                    Maximum 10 API</span></li>
                            <li class="list-group-item font-weight-normal"><span class="sred"><i
                                        class="fas fa-check"></i></span>Graphical statistics available</li>
                            <li class="list-group-item font-weight-normal"><span class="sred"><i
                                        class="fas fa-check"></i></span>Quota alert by email</li>
                            <li class="list-group-item font-weight-normal"><span class="sred"><i
                                        class="fas fa-check"></i></span>Priority access to new releases</li>
                            <li class="list-group-item font-weight-normal"><span class="sred"><i
                                        class="fas fa-check"></i></span>Priority on support</li>
                        </ul>
                    </div>
                    <div class="card-footer px-4 pb-4"> <a href="#"
                            class="btn btn-block sbtn-red animate-up-2">Start with Pro<span class="icon icon-xs ml-3"><i
                                    class="fas fa-arrow-right"></i></span></a></div>
                </div>
            </div>
        </div>
    </div>
</div>


@include('dashboard.includes.footer')
