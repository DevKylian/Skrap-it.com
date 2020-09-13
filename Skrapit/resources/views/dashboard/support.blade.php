@include('dashboard.includes.header')

<div class="page-title dashboard">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <div class="page-title-content">
                    <p>Support</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="content-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="table-responsive sbg-white sshadow">
                    <table class="table table-centered table-borderless mb-0">
                        <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Creation date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>Unlock my account</td>
                                <td>Oct 23, 2021</td>
                                <td><span class="sred">Closed</span></td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Open ticket">
                                        <i class="fad fa-edit fa-lg sdark mr-3"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>0002</td>
                                <td>Question about package</td>
                                <td>Oct 22, 2021</td>
                                <td><span class="sgreen">Open</span></td>
                                <td>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Open ticket">
                                        <i class="fad fa-edit fa-lg sdark mr-sm-3"></i>
                                    </a>
                                    <a href="" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Close ticket">
                                        <i class="fad fa-times fa-lg sred"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 col-xl-7">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">Messaging</h6>
                        <div class="text-muted mb-4">
                            <i class="fad fa-comments mr-1"></i> Do you have a question? Get an answer within 24
                            hours!
                            <br><i class="fad fa-exclamation-triangle mr-1"></i> Attention, this tool does not allow
                            instant communication, please respect the response time indicated.
                        </div>
                        <div class="mb-5">
                            <div class="text-right">
                                <form class="d-flex">
                                    <div>
                                        <figure class="avatar avatar-sm mr-3">
                                            <img src="/img/dashboard/user.png" class="rounded-circle" alt="...">
                                        </figure>
                                    </div>
                                    <div class="flex-grow-1">
                                        <div class="form-group">
                                            <textarea rows="2" class="form-control"
                                                placeholder="Votre message ..."></textarea>
                                        </div>
                                        <a href="#" class="sbtn sbtn-dark">
                                            <i class="fad fa-paper-plane mr-3 disabled"></i>Send
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr>
                        <div class="mt-3 mb-3">
                            <div class="d-flex mb-3">
                                <div class="d-flex align-items-center">
                                    <figure class="avatar avatar-sm mr-3">
                                        <img src="/img/dashboard/user.png" class="rounded-circle" alt="...">
                                    </figure>
                                    <div class="d-inline-block">
                                        <div><strong>Kylian Dev <span class="sbadge sbadge-red ml-2"><i
                                                        class="fad fa-badge-check mr-2"></i>Owner</span></strong>
                                        </div>
                                        <small class="text-muted">4 hours ago</small>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque
                                eveniet illo minus nemo obcaecati, voluptatem? At corporis cum dolorem eos
                                impedit in magni officiis quibusdam, ratione sequi totam voluptatum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor eos id ipsa
                                nobis omnis, tenetur? Dolor officiis omnis quo?</p>
                        </div>

                        <hr>

                        <div class="mt-3">
                            <div class="d-flex mb-3">
                                <div class="d-flex align-items-center">
                                    <figure class="avatar avatar-sm mr-3">
                                        <img src="/img/dashboard/user.png" class="rounded-circle" alt="...">
                                    </figure>
                                    <div class="d-inline-block">
                                        <div><strong>John Doe</strong></div>
                                        <small class="text-muted">6 hours ago</small>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque
                                eveniet illo minus nemo obcaecati, voluptatem? At corporis cum dolorem eos
                                impedit in magni officiis quibusdam, ratione sequi totam voluptatum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor eos id ipsa
                                nobis omnis, tenetur? Dolor officiis omnis quo?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@include('dashboard.includes.footer')
