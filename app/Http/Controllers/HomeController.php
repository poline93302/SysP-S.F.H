<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;

use App\Services\link\SysInfoDBService;

class HomeController extends Controller
{
    protected $SysInfoDB;

    public function __construct(SysInfoDBService $SyDB)
    {
        $this->SysInfoDB = new $SyDB;
    }
    //
    public  function index(){
        $data =  $this->SysInfoDB->getNowTmp();
        dd($data);
        return view('layout.master');
    }
}
