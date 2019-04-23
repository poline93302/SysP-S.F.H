<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;

class HomeController extends Controller
{
    //
    public  function index(){
        return view('layout.master');
    }
}
