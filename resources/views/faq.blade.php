<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/faq.css')}} ">

    <title>Frequently asked questions</title>
  </head>
  <body>
      
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-10">
        <a class="navbar-brand" href="https://team-enyo-goaltracker.herokuapp.com/"><img src="https://res.cloudinary.com/mide358/image/upload/c_scale,w_115/v1569255273/Logo_aikcfk.png" alt="Enyo Logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" id="signUpButton">
                    <a class="nav-link" href="{{ route('register') }}" ><button type="button" class="btn btn-primary">Sign Up</button></a>
                </li>
                <li class="nav-item" id="signUpButton">
                    <a class="nav-link" href="{{ route('login') }}"><button type="button" class="btn">Sign In</button></a>
                </li>
            </ul>

        </div>
        
    </nav>

    <main class="container" id="mainContent">
        <div class="faqTitle"><h1>Frequently Asked Questions</h1></div>

        <div id="accordion" class="faqSection">
            <div class="card" FAQ0="">
            <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1. What is Enyo Goal Tracker?
                </button>
                </h5>
            </div>
        
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                    Enyo goal tracker is designed to help you manage and track your goals. On the app, you are able to note down your goals and the tasks you need to do to achieve each goal. The app is made for not only recording your goals but also allows you to measure your progress, so you know what to improve on.
                </div>
            </div>
            </div>
            <div class="card" FAQ1="">
            <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. How do I get started?
                </button>
                </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                    First you create an account by signing up, then you login, and you are ready to set and track your first goal.
                </div>
            </div>
            </div>
            <div class="card" FAQ2="">
                <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. How do I reset my password?
                    </button>
                </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                    Click on “forgot password” on the login page and follow the instructions there to reset your password.
                </div>
                </div>
            </div>
            <div class="card" FAQ3="">
                <div class="card-header" id="headingFour">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        4. Is my data safe on the app?
                    </button>
                </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div class="card-body">
                    Yes, it is. We are committed to keeping your data secure.
                </div>
                </div>
            </div>
            <div class="card" FAQ4="">
                <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        5. Is the app really free?
                    </button>
                    </h5>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                        Yes, the app is absolutely free.
                    </div>
                </div>
            </div>
            <div class="card" FAQ5="">
                <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        6. How do I add a goal?
                    </button>
                    </h5>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                    <div class="card-body">
                        You can add a goal by clicking the “add new goal” button. Type in your goal and click “add” and your new goal is set.
                    </div>
                </div>
            </div>
            <div class="card" FAQ6="">
                <div class="card-header" id="headingSeven">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        7. Can I edit my goals?
                    </button>
                    </h5>
                </div>
                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                    <div class="card-body">
                        Yes, goals can be edited by clicking on the “option symbol” by the right side of the goal. Click and follow instructions.
                    </div>
                </div>
            </div>
            <div class="card" FAQ7="">
                <div class="card-header" id="headingEight">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        8. How do I delete a goal?
                    </button>
                    </h5>
                </div>
                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                    <div class="card-body">
                        You can delete a goal by clicking on the “options symbol” by the right side of the goal. Click and follow instructions.
                    </div>
                </div>
            </div>
            <div class="card" FAQ8="">
                <div class="card-header" id="headingNine">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        9. How do I delete a task from my goal?
                    </button>
                    </h5>
                </div>
                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                    <div class="card-body">
                        A task can be deleted by clicking on the “options symbol” by the right side of the task. Click and follow instructions.
                    </div>
                </div>
            </div>
            <div class="card" FAQ9="">
                <div class="card-header" id="headingTen">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    10. How do I reset a goal to start over?
                    </button>
                </h5>
                </div>
                <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
                <div class="card-body">
                    You can reset a goal and start over by unchecking the earlier completed tasks. Alternatively, you can delete the tasks for that goal and create new ones.
                </div>
                </div>
            </div>
            <div class="card" FAQ10="">
                <div class="card-header" id="headingEleven">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        11. How do I check in that I’ve completed a goal?

                    </button>
                    </h5>
                </div>
                <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
                    <div class="card-body">
                        You can check in a goal by clicking on the tasks under that goal. The progress bar updates the status of the goal up to completion level.
                    </div>
                </div>
            </div>
            <div class="card" FAQ11="">
                <div class="card-header" id="headingTwelve">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        12. What if I forget to check in a completed task?
                    </button>
                    </h5>
                </div>
                <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordion">
                    <div class="card-body">
                        If you forget to check in a completed task, the progress bar for that goal won’t be updated. It will only update when you check. You can do this anytime.
                    </div>
                </div>
            </div>
            <div class="card" FAQ12="">
                <div class="card-header" id="headingThirteen">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        13. I mistakenly removed a task from my dashboard - how do I add it back?
                    </button>
                    </h5>
                </div>
                <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordion">
                    <div class="card-body">
                        If you mistakenly remove a task from the dashboard, you can add it back by clicking on the “Add a new task” button and follow instructions.
                    </div>
                </div>
            </div>
            <div class="card" FAQ13="">
                <div class="card-header" id="headingFourteen">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        14. Is there a mobile version of the app?
                    </button>
                    </h5>
                </div>
                <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen" data-parent="#accordion">
                    <div class="card-body">
                        Not yet, but you can access the app on all your devices through a web browser. We will inform our users as soon as there's a mobile version available for download.
                    </div>
                </div>
            </div>
        </div>

        <div class="contactUs">
            Still have more questions? <span><a href="{{ route('contact') }}">Contact Us!</a></span>
        </div>
    </main>
      


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>