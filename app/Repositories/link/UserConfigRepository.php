<?php

namespace App\Repositories\link;

use App\Entities\link\UserConfig;
use DB;

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
}