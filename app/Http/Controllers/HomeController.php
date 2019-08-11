<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
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

    public function login(){
//        登入
    }
    public function logout(){
//        登出
    }
    public function Register(){
//        註冊
    }
}
