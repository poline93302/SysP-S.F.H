<?php

namespace App\Repositories\link;

use App\Entities\link\Weather;
use DB;

class SmartWeatherRepository
{
    protected $smartWeather;


    public function __construct()
    {
        $this->smartWeather = new  Weather();
    }


    /**
     * * 風速
     */
    public function getWindSpeed()
    {
        $keyword = 'WDS_';
        return $this->smartWeather
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
    /**
     * * 風向
     */
    public function getWindWay()
    {
        $keyword = 'WDW_';
        return $this->smartWeather
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
    /**
     * * 相對濕度
     */
    public function getOutTMP()
    {
        $keyword = 'OTM_';
        return $this->smartWeather
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
    /**
     *  溫度
     */
    public function getOutHumi()
    {
        $keyword = 'OHI_';
        return $this->smartWeather
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
    /**
     * * 累積雨量
     */
    public function getRainSatute()
    {
        $keyword = 'RST_';
        return $this->smartWeather
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
}