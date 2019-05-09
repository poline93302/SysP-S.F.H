<?php


namespace App\Services\link;

use App\Repositories\link\FormerUserRepository;
use App\Repositories\link\UserConfigRepository;
use App\Repositories\link\SmartAiringRepository;
use App\Repositories\link\SmartLightingRepository;
use App\Repositories\link\SmartWeatherRepository;
use App\Repositories\link\SmartWateringRepository;

class SysInfoDBService
{
    protected $smartWater;
    protected $smartWeather;
    protected $smartLight;
    protected $smartAir;
    protected $formName;
    protected $userConfig;

    public function __construct()
    {
        $this->smartAir     = new SmartAiringRepository();
        $this->smartLight   = new SmartLightingRepository();
        $this->smartWeather = new SmartWeatherRepository();
        $this->smartWater   = new SmartWateringRepository();
        $this->formName     = new FormerUserRepository();
        $this->userConfig   = new UserConfigRepository();
    }

    /**
     * @return 抓取當下 tmp 值 後抓取第一筆
     */
    public function getNowTmp()
    {
        return $this->smartAir->getTmp()[0];
    }
}