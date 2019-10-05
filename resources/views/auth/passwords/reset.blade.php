<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="https://res.cloudinary.com/walebant/image/upload/v1569272941/samples/enyo-goal/logo.svg" type="image/x-icon"> 
    <link rel="stylesheet" href="css/login.css">
    <title>Reset Password | Enyo</title>
</head>
<body>
    <header>
        <img src="https://res.cloudinary.com/walebant/image/upload/v1569272941/samples/enyo-goal/logo.svg" alt="logo">
    </header>
        
    <section class="container">
        <h1> {{ __('Reset Password') }}</h1>
        
        <form method="POST" action="{{ route('password.update') }}">
            @csrf

            <input type="hidden" name="token" value="{{ $token }}">

            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" placeholder="Email" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror

            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" placeholder="Password" name="password" required autocomplete="new-password">

            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror

            <input id="password-confirm" type="password" class="form-control"  placeholder="Confirm Password" name="password_confirmation" required autocomplete="new-password">
            
            <br>
            <button type="submit" >
                <a href="#">{{ __('Reset Password') }}</a>
            </button>
        </form>
        
        <a href="{{ route('login') }}">Back to login</a>
        <hr>
        <p>Don't have an account? <span><a href="{{ route('register') }}">Sign up</a></span></p>
    </section>

</body>
</html>