<!doctype html>
<html lang="en">
  <head>
    <title>Enyo goal tracker</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="https://res.cloudinary.com/walebant/image/upload/v1569272934/samples/enyo-goal/favicon.ico" type="image/x-icon"/>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    
</head>
  <body>       
         <!-- navigation -->
        <nav class="px-5 py-3">
            <div class="pl-md-5 logo">
                <a class="" href="#">
                    <img src="https://res.cloudinary.com/mide358/image/upload/c_scale,w_115/v1569255273/Logo_aikcfk.png" alt="logo" class="pl-4 img-fluid" alt="logo-image">
                </a>
            </div>                  
            <ul class="nav-links pr-md-5 pt-2">
                @if (Route::has('login'))
                    @auth
                        <li class="">
                            <a class="login-link" href="{{ url('/home') }}">Home</a>
                        </li>
                    @else
                        @if (Route::has('register'))
                            <li class="nav-sign-up">
                                <a class="signup-link" href="{{ route('register') }}">Sign Up</a>
                            </li>
                        @endif
                  
                        <li class="">
                            <a class="login-link" href="{{ route('login') }}">Log In</a>
                        </li>
                        
                    @endauth
                
                @endif
            </ul>
            
            </div>
        </nav>
    
        <!--section-->
        <section class="">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <h4 class="hero-text">Set goals.</h4>
                        <h4 class="hero-text">Track progress.</h4>
                        <h4 class="hero-text">Stay productive.</h4>

                        <div class="">
                            <img src="images/Logo-mobile.png" class="img-fluid logo-mobile" alt="goal-img">
                            <p class="hero-small-text">Your goals tracked effortlessly!</p>
                        </div>

                        

                        <div class="hero-button hero-button-signup  ">
                            <a href="{{ route('register') }}" class="button signup-link">Sign Up</a> 
                        </div>
                        <div class="hero-button hero-button-login">
                            <a class="button login-link" href="{{ route('login') }}">Log In</a>                            
                        </div>

                    </div> 
                    <div class="col-md-6 col-lg-6 col-xs-12 bg-img">
                        <div class="goal-image" >
                            <img src="images/bg-img.png" class="img-fluid" alt="goal-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>  
      
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>