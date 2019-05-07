<?php

namespace App\Repositories\link;

use App\Exceptions\link\Light;
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
        return $this->smartLighting->collection('')->get();
    }
}