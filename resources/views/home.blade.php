<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/dash.css') }}">

    <title>Dashboard | Enyo</title>
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-md-4 sidebar">
                <h3 class="welcome-message">Welcome back, <span class="username">{{ Auth::user()->name }}</span></h3>
                <p class="title">
                    <img class="icon" src="{{ asset('images/sniper.png') }}" /> Goals
                </p>

                <input class="search" type="text" name="name" placeholder="name your goal">

                <ul>
                @forelse (Auth::user()->goals as $goal)
                    @if ($loop->first)
                    <li class="selected">
                    @else
                    <li>
                    
                    @endif
                        {{ $goal->name }}
                        <span class="treedots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
                        <div class="dropdown-menu manipulate" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item edit" href="#">
                                <i class="fa fa-edit"></i>edit
                            </a>
                            <a class="dropdown-item delete" href="#">
                                <i class="fa fa-trash-o"></i>delete
                            </a>
                        </div>
                    </li>
                @empty
                    <p>Click the button below to create a goal</p>
                @endforelse
                    
                </ul>

                <button class="add-goal">
                    <img class="icon" src="https://res.cloudinary.com/mide358/image/upload/c_scale,w_16/v1569327133/Group_2_nr6p6g.png">Add a new goal
                </button>



            </div>
            <div class="col-md-8 main">
                <nav class="navbar">
                    <a class="navbar-brand" href="#">
                        <img class="logo" src="https://res.cloudinary.com/mide358/image/upload/c_scale,w_115/v1569255273/Logo_aikcfk.png" alt="logo">
                    </a>

                    <form class="form-inline my-1" id="logout-form" action="{{ route('logout') }}"  method="POST">
                        @csrf
                        <button class="btn btn-outline-white btn-sm my-0" type="submit">Logout</button>
                    </form>

                </nav>
                <div class="content">

                @if ( count(Auth::user()->goals) > 0)
                    @php ($goal = Auth::user()->goals[0])
                    <div class="row content-header">
                        <div class="col-md-12 goal-header">
                        {{ $goal->name }}
                        </div>
                    </div>

                    <div class="row content-body">
                        <div class="col-md-4 sidebar">
                            <p class="title">To do List</p>

                            <div>
                                @forelse($goal->items as $item)
                                <label class="custom-check"> {{ $item->title }} 
                                    @if ($item->done)
                                        <input type="checkbox" checked="checked">
                                    @else 
                                        <input type="checkbox">
                                    @endif
                                    
                                    <span class="checkmark"></span>
                                </label>
                                @empty
                                    <p>Click the button below to create add item</p>
                                @endforelse

                                <button class="add-goal">
                                    <img class="icon" src="https://res.cloudinary.com/mide358/image/upload/c_scale,w_16/v1569327133/Group_2_nr6p6g.png">Add a new task
                                </button>
                            </div>
                        </div>
                        <div class="col-md-8 pt-3 goal-status">
                            <div class="progress-container row">
                                <div class="col-md-12">
                                    <p class="title">Progess</p>

                                    <div class="progress">
                                        <div class="progress-bar bg-orange" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            25%
                                        </div>
                                    </div>

                                    <div class="progress-labels">
                                        <span class="stat">0%</span>
                                        <span class="end">100%</span>
                                    </div>
                                </div>

                                <p class="col-md-12 m-2 note">
                                    Complete the three remaining tasks to achieve this goal
                                </p>
                            </div>

                            <div class="row">
                                <div class="col-md-12 pt-3">
                                    <p class="title">Statistics</p>


                                </div>
                            </div>

                        </div>
                    </div>
                @else
                    <p>Kindly select a goal to see more info</p>
                @endif
                </div>

            </div>
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>