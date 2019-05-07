<?php

namespace App\Repositories\link;

use App\Exceptions\link\Weather;
use DB;

class SmartWeatherRepository
{
    protected $smartWeather;


    public function __construct()
    {
        $this->smartWeather = new  Weather();
    }
}