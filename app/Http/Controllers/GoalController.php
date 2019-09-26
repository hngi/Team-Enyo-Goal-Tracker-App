<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Goal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GoalController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index()
    {
        $goals = Goal::currentUser()->latest()->get();

        return response()->json($goals);
    }

    public function store(Request $request)
    {
        $goal = Goal::create(['name' => $request->input('name'), 'user_id' => Auth::user()->id]);

        return response()->json($goal, 201);
    }

    public function show($id)
    {
        $goal = Goal::currentUser()->findOrFail($id);

        return response()->json($goal);
    }

    public function update(Request $request, $id)
    {
        $goal = Goal::currentUser()->findOrFail($id);
        $goal->update($request->all());

        return response()->json($goal, 200);
    }

    public function destroy($id)
    {
        $goal = Goal::currentUser()->findOrFail($id);
        Goal::destroy($id);

        return response()->json(null, 204);
    }
}