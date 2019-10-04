<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function faq()
    {
        return view('faq');
    }

    public function contact()
    {
        return view('feedback');
    }
}
