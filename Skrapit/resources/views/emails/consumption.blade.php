@component('mail::message')

# Email Notification

<br/>

Your offer has reached <span class="sred font-weight-bold">80% of its consumption !</span>

<br>
This email sent to you with your personalized offer, you can deactivate it by going to your account settings.

<br>
<br>

(However, we advise you to keep it)

<br/>

@component('mail::button', ['url' => env('APP_URL').'/settings', 'color' => 'dark'])
Check my account settings
@endcomponent

<br/>

Regards,<br/>
Skrap-it Team
@endcomponent
