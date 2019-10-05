<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="https://res.cloudinary.com/walebant/image/upload/v1569272941/samples/enyo-goal/logo.svg" type="image/x-icon"> 
    <link rel="stylesheet" href="{{ asset('css/forgot-password.css') }}">
    <title>Forget Password | Enyo</title>
</head>
<body>
    <header>
        <img src="https://res.cloudinary.com/walebant/image/upload/v1569272941/samples/enyo-goal/logo.svg" alt="logo">
    </header>
        
    <section class="container">
        <h1>Reset password</h1>
        <h3>Enter your email and we'll send you instructions on how to reset your password.</h3>
        
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div><br><br>
        @endif

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" placeholder="Email" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
            
            <br>
            <button type="submit" name="button" value="submit">
                {{ __('Send Password Reset Link') }}
            </button>
        </form>
        
        <a href="{{ route('login') }}">Back to login</a>
        <hr>
        <p>Don't have an account? <span><a href="{{ route('register') }}">Sign up</a></span></p>
    </section>

</body>
</html>