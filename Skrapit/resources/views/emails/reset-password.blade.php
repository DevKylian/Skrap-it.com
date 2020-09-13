@component('mail::message')

# Forgot your password ?

<br/>

Don't panic ! You can set a new password.

For this, please click on the button below and this time, don't forget it

<br/>

@component('mail::button', ['url' => env('APP_URL').'/reset-password/'.$token, 'color' => 'dark'])
Let's change my password !
@endcomponent

<br/>

<span class="font-style-italic text-center">This email expires 30 minutes after creation</span>

<br/>

Regards,<br/>
Skrap-it Team
@endcomponent
