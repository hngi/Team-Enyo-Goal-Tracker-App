<!DOCTYPE html>
<html lang="en">
<head>
	<title>Enyogoal Sign Up</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- bootstrap-->	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<!-- external css for styling -->
	<link rel="stylesheet" type="text/css" href="css/signup.css">
</head>
<body>
	<header>
		<nav class="navbar navbar-expand-sm navbar-color">
		 	<!-- Brand/logo -->
		  	<a class="navbar-brand toplogo" href="#">
		    	<img src="https://res.cloudinary.com/walebant/image/upload/v1569272941/samples/enyo-goal/logo.svg" alt="logo">
		  	</a>
	  	</nav>
  	</header>

      <section>
  		<div class="container">
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					
					<!-- signup form -->
					<h2>Create an account</h2>
						
					<form method="POST" action="{{ route('register') }}">
						@csrf

						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">{{ __('Name') }}</label>

							<div class="cols-sm-10">
								<input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" placeholder="Enter lastname" value="{{ old('name') }}" required autocomplete="name" autofocus>

								@error('name')
									<span class="invalid-feedback" role="alert">
										<strong>{{ $message }}</strong>
									</span>
								@enderror
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">{{ __('E-Mail Address') }}</label>

							<div class="cols-sm-10">
								<input id="email" type="email" class="form-control @error('email') is-invalid @enderror" placeholder="Enter emailaddress" name="email" value="{{ old('email') }}" required autocomplete="email">

								@error('email')
									<span class="invalid-feedback" role="alert">
										<strong>{{ $message }}</strong>
									</span>
								@enderror
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">{{ __('Password') }}</label>

							<div class="cols-sm-10">
								<input id="password" type="password" class="form-control @error('password') is-invalid @enderror" placeholder="Enter password" name="password" required autocomplete="new-password">

								@error('password')
									<span class="invalid-feedback" role="alert">
										<strong>{{ $message }}</strong>
									</span>
								@enderror
							</div>
						</div>

						<div class="form-group">
								<label for="password-confirm" class="cols-sm-2 control-label">{{ __('Confirm Password') }}</label>
	
								<div class="cols-sm-10">
									<input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Re-Enter password" required autocomplete="new-password">
								</div>
							</div>

						<div class="form-group">
							<div class="cols-sm-10">
									<input type="submit" name="submit" id="submit" class="button btn  btn-block  login-button" value="Sign Up">
							</div>
						</div>
						<hr>

						<div>
							<p>Already have an account? <a href="{{ route('login') }}" class="login-link">Log In</a></p>
						</div>

					</form>
				</div>
				<div class="col-md-3"></div>
			</div>
		</div>
	</section>

</body>
</html>