<?php

namespace App\Repositories\link;

use App\Entities\link\Light;
use DB;

class SmartLightingRepository
{
    protected $smartLighting;


    public function __construct()
    {
        $this->smartLighting = new Light();
    }

    /**
     * @return 亮度
     */
    public function getLightLux()
    {
        $keyword = 'LIL_';
        return $this->smartLighting
            ->where('sensorname','like','%'.$keyword.'%')
            ->orderby('sendtime','desc')
            ->paginate(20);
    }
}