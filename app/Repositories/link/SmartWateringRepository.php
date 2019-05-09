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
        return $this->smartWatering->collection('')->get();
    }
     /**
     * @return 水位
     */
    public function getWatLev()
    {
        return $this->smartWatering->collection('')->get();
    }
    /**
     * @return 水PH
     */
    public function getWatPH()
    {
        return $this->smartWatering->collection('')->get();
    }
}