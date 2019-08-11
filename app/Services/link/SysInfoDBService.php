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
    public function getTmp()
    {
        return ($this->smartAir->getTmp()[0]);
    }
    /**
     * @return 抓取當下 Humi 值 後抓取第一筆
     */
    public function getHumi()
    {
        return $this->smartAir->getHumi()[0];
    }
    /**
     * @return 抓取當下 CO4 值 後抓取第一筆
     */
    public function getCH4()
    {
        return $this->smartAir->getCH4()[0];
    }
    /**
     * @return 抓取當下 CO 值 後抓取第一筆
     */
    public function getCO()
    {
        return $this->smartAir->getCO()[0];
    }
    /**
     * @return 抓取當下 Light 值 後抓取第一筆
     */
    public function getLight()
    {
        return $this->smartLight->getLightLux()[0];
    }
    /**
     * @return 抓取當下 土壤感測器 值 後抓取第一筆
     */
    public function getSoilHum()
    {
        return $this->smartWater->getSoilHum()[0];
    }
    /**
     * @return 抓取當下 水位 值 後抓取第一筆
     */
    public function getWaterLevel()
    {
        return $this->smartWater->getWatLev()[0];
    }
    /**
     * @return 抓取當下 PH 值 後抓取第一筆
     */
    public function getWaterPH()
    {
        return $this->smartWater->getWatPH()[0];
    }
    /**
     * @return 抓取當下 微氣候溫度 值 後抓取第一筆
     */
    public function getOutTmp()
    {
        return $this->smartWeather->getOutTMP()[0];
    }
    /**
     * @return 抓取當下 微氣候濕度 值 後抓取第一筆
     */
    public function getOutHum()
    {
        return $this->smartWeather->getOutHumi()[0];
    }
    /**
     * @return 抓取當下 累積雨量 值 後抓取第一筆
     */
    public function getRainSat()
    {
        return $this->smartWeather->getRainSatute()[0];
    }
    /**
     * @return 抓取當下 風速 值 後抓取第一筆
     */
    public function getWindSpeed()
    {
        return $this->smartWeather->getWindSpeed()[0];
    }
    /**
     * @return 抓取當下 風向 值 後抓取第一筆
     */
    public function getWindWay()
    {
        return $this->smartWeather->getWindWay()[0];
    }

    /**
     * return 該使用者之所有設定資料
     */

    public function get_user_config()
    {
        return $this->userConfig->getconfig();
    }
}