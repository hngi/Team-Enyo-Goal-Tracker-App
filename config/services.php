<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, SparkPost and others. This file provides a sane default
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

<<<<<<< HEAD
    'google' => [
        'client_id'     => '283283146190-3u8f3bb07a294jkjpc7tfadbmtepvked.apps.googleusercontent.com',
        'client_secret' => 'SvPt8kSS5cLzsUUwv0Lnaq7G',
        'redirect' => 'http://localhost/Team-Enyo-Goal-Tracker-App/login/google/callback'
=======
    'twitter' => [
        'client_id' => env('TW_CLIENT_ID'),
        'client_secret' => env('TW_CLIENT_SECRET'),
        'redirect' => env('TW_REDIRECT_URL'),
>>>>>>> eef4bb1ee8c1819a2b41ef678cbb2a5924af568b
    ],

];
