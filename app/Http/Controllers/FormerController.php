<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Services\link\SysInfoDBService;
use App\Services\link\configDBService;

class FormerController extends Controller
{
    protected $sysInfo ;
    protected $configInfo ;
    public function __construct(SysInfoDBService $sysInfoDBService , configDBService $configDBService)
    {
        $this->sysInfo = $sysInfoDBService ;
        $this->configInfo = $configDBService;
    }

    public function create(Request $req)
    {
//        新增農夫設定
//        dd($req);
        $req->input('switch_config')!=null?$switch=1 : $switch = 0;
        $this->configInfo->add_user_config($req->input('issue_id'),$req->input('sensor'),$req->input('value_config'),$req->input('startT_config'),$req->input('endT_config'),$switch);
    }
    public function edit(Request $req)
    {
        $req->input('switch_config')!=null?$switch=1 : $switch = 0;
        $this->configInfo->edit_user_config($req->input('issue_id'),$req->input('value_config'),$req->input('startT_config'),$req->input('endT_config'),$switch);
    }
    public function delete(Request $req)
    {
//        刪除農夫設定
        $this->configInfo->del_config_issue($req->input('issue_id'));
        echo ($req->input('issue_id'));
    }

    public function show()
    {
//        顯示農夫設定
        $data  =   $this->sysInfo->get_user_config();
//        auth login checkx
//        $data =[
//            'Issue_Id'      => 100621,
//            'Former_Name'   => 'jojoBB',
//            'Sensor_Name'   => 'WTL_001',
//            'Start_Time'    => date('Y-m-d',strtotime('2019/08/07')),
//            'End_Time'      => date('Y-m-d',strtotime('2019/08/09')),
//            'Sensor_Value'  => 30,
//        ];
        echo json_encode($data);
    }
}
