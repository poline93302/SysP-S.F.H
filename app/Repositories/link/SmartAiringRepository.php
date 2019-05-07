<?php

namespace App\Repositories\link;

use App\Entities\link\Air;
use DB;

class SmartAiringRepository
{
    protected $smartAiring;


    public function __construct()
    {
        $this->smartAiring = new Air;
    }

    /***
     * 室內溫度_抓取時間排序後 進行TMP模糊搜尋 抓取前20筆
     */
    public function getTmp()
    {
        $keyword = 'TMP_';
        return $this->smartAiring
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
    /***
     * 室內相對濕度
     */
    public function getHumi()
    {
        $keyword = 'Hum_';
        return $this->smartAiring
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
    /***
     * 甲烷
     */
    public function getNowCH4()
    {
        $keyword = 'CHF_';
        return $this->smartAiring
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(1);
    }
    /***
     * 一氧化碳
     */
    public function getNowCO()
    {
        $keyword = 'COS_';
        return $this->smartAiring
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(1);
    }


}