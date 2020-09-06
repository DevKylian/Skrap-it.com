@component('mail::message')

# Welcome {{ $name }} !

<br/>

Thank you for your registration,

You're lucky ! For the moment, the access to our <span class="sred font-weight-bold">first offer is free, and for life !</span>

Make good use of it, and don't forget to complete your profile.

But first of all, to <span class="font-weight-bold">activate your account</span>, please click on the button below.

<br/>

@component('mail::button', ['url' => env('APP_URL').'/activate/'.$token, 'color' => 'dark'])
Let's activate my account !
@endcomponent

<br/>

<span class="font-style-italic">This email expires 30 minutes after creation</span>

<br/>

Regards,<br/>
Skrap-it Team
@endcomponent
