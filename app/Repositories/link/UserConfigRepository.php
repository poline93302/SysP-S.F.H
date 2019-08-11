<?php

namespace App\Repositories\link;

use App\Entities\link\UserConfig;
use DB;
use Illuminate\Support\Facades\Auth;

class UserConfigRepository
{
    protected $userConfig;

    public function __construct()
    {
        $this->userConfig = new  UserConfig();
    }
    /*
    * * 抓取資料
    */
    public function getBySomeThing()
    {
        $keyword = 'WSD_';
        return $this->smartWeather
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }

    /*
     * 抓取 使用者設定資料
     */

    public function getconfig()
    {
//        Auth::check() ;
        $data =  $this->userConfig->get();
        return $data;
    }


    public function delete_config($id)
    {
        $this->userConfig->where('id',$id)->delete();
    }

    public function edit_config($id,$value,$startT,$endT,$switch)
    {
//        dd($startT);
        $this->userConfig->where('id',$id)->update(['value'=>$value,'start_time'=>$startT,'end_time'=>$endT,'switch'=>$switch]);
    }

    public function add_config($id,$sensor,$value,$startT,$endT,$switch)
    {
//        mode & formername
        $this->userConfig->create([
            'id'=>$id,
            'formname'=>'jojogg',
            'sensorname'=>$sensor,
            'value'=>$value,
            'mode'=>0,
            'start_time'=>$startT,
            'end_time'=>$endT,
            'switch'=>$switch,
        ]);
    }
}