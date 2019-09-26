<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="https://res.cloudinary.com/walebant/image/upload/v1569272941/samples/enyo-goal/logo.svg" type="image/x-icon"> 
    <link rel="stylesheet" href="css/login.css">
    <title>Login | Enyo</title>
</head>
<body>
    <header>
        <img src="https://res.cloudinary.com/walebant/image/upload/v1569272941/samples/enyo-goal/logo.svg" alt="logo">
    </header>
        
    <section class="container">
        <h1>Welcome back!</h1>

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" placeholder="Email" name="email" value="{{ old('email') }}" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required autocomplete="email" autofocus>

            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
            
            <input id="password" type="password" class="password form-control @error('password') is-invalid @enderror" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be at least 8 characters and contain at least one number, one uppercase and one lowercase letter" placeholder="Password" name="password" required autocomplete="current-password">

            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
            <br>
            <button type="submit" >
                <a href="#">{{ __('Login') }}</a>
            </button>
        </form>
        
        <a href="{{ route('password.request') }}">Forgot Password?</a>
        <hr>
        <p>Don't have an account? <span><a href="{{ route('register') }}">Sign up</a></span></p>
    </section>

    <footer>

    </footer>

</body>
</html>