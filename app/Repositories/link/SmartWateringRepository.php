<?php

namespace App\Repositories\link;

use App\Entities\link\Water;
use DB;

class SmartWateringRepository
{
    protected $smartWatering;

    public function __construct()
    {
        $this->smartWatering = new Water();
    }

    /**
     * @return 土壤濕度
     */
    public function getSoilHum()
    {
        $keyword = 'SOH_';
        return $this->smartWatering
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
     /**
     * @return 水位
     */
    public function getWatLev()
    {
        $keyword = 'WTL_';
        return $this->smartWatering
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
    /**
     * @return 水PH
     */
    public function getWatPH()
    {
        $keyword = 'WTP_';
        return $this->smartAiring
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
}