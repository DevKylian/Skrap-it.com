@include('dashboard.includes.header')

<div class="page-title dashboard">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <div class="page-title-content">
                    <p>Your Profile</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-7">
                <div class="card">
                    <div class="card-body">
                        <form method="post">
                            <div class="form-row">
                                <div class="form-group col-xl-6">
                                    <label class="mr-sm-2">Firstname</label>
                                    <input type="text" class="form-control" placeholder="John" name="firstname">
                                </div>
                                <div class="form-group col-xl-6">
                                    <label class="mr-sm-2">Lastname</label>
                                    <input type="text" class="form-control" placeholder="Doe" name="lastname">
                                </div>
                                <div class="form-group col-xl-6">
                                    <label class="mr-sm-2">Email</label>
                                    <input type="text" class="form-control" placeholder="john.doe@skrap-it.com"
                                           name="email">
                                </div>
                                <div class="form-group col-xl-6">
                                    <label class="mr-sm-2">Phone number</label>
                                    <input type="text" class="form-control" placeholder="2135096995"
                                           name="phone_number">
                                </div>
                                <div class="form-group col-xl-6">
                                    <label class="mr-sm-2">Address (Optional)</label>
                                    <input type="text" class="form-control" placeholder="42th Jackson Street"
                                           name="address">
                                </div>
                                <div class="form-group col-xl-6">
                                    <label class="mr-sm-2">Country</label>
                                    <input type="text" class="form-control" placeholder="France" name="country">
                                </div>
                                <div class="col-12">
                                    <a href="" class="sbtn sbtn-dark"><i class="fad fa-save mr-3"></i>Save</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-5">
                <div class="card">
                    <div class="card-body">
                        <form action="#">
                            <div class="form-row">
                                <div class="form-group col-xl-6">
                                    <label class="mr-sm-2">New password</label>
                                    <input type="password" name="new_password" class="form-control"
                                           placeholder="********">
                                </div>
                                <div class="form-group col-xl-6">
                                    <label class="mr-sm-2">Confirm new password</label>
                                    <input type="password" name="confirm_new_password" class="form-control"
                                           placeholder="********">
                                </div>
                                <div class="form-group col-12">
                                    <p class="mt-2 mb-0">The password must be 8 characters, 1 capital letter, one
                                        lowercase and a number.</p>
                                </div>
                                <div class="col-12">
                                    <a href="" class="sbtn sbtn-dark"><i class="fad fa-save mr-3"></i>Save</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <form action="#">
                            <div class="form-row">
                                <div class="form-group col-xl-12">
                                    <div class="media align-items-center mb-3">
                                        <img class="mr-3 rounded-circle mr-0 mr-sm-3" src="/img/dashboard/user.png"
                                             width="55"
                                             height="55" alt="">
                                        <div class="media-body">
                                            <h4 class="mb-0">user.png</h4>
                                            <p class="mb-0">Max size 1 mb
                                            </p>
                                        </div>
                                    </div>
                                    <div class="file-upload-wrapper" data-text="Upload avatar">
                                        <input name="file-upload-field" type="file" class="file-upload-field">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <a href="" class="sbtn sbtn-dark"><i class="fad fa-save mr-3"></i>Save</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@include('dashboard.includes.footer')
