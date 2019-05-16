<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;

use App\Services\link\SysInfoDBService;

class HomeController extends Controller
{
    protected $SysInfoDB;

    public function __construct()
    {
        $this->SysInfoDB = new SysInfoDBService;
    }
    //
    public  function index(){
//        dd($this->SysInfoDB->getTmp());
        return view('layout.master');
    }
}
