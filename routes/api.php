<?php

use Illuminate\Http\Request;
use App\Services\link\SysInfoDBService;
use Carbon\Carbon;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

//
//Route::get('/winwin', 'Controller@xxx');
//// http://localhost/api/winwin
//
//
//
//
//Route::post('/winwin', 'Controller@xxx');

// '_method : POST'
// '_token : document.querySelect("meta[name='csrf']").content'


Route::get('{key?}',function ($key) {
    $SQLData = new SysInfoDBService();
        $vaule = collect([]);
        switch ($key):
            case 'getOnTmp' :
                $vaule = $SQLData->getTmp();
                break;
            case 'getOnHum' :
                $vaule = $SQLData->getHumi();
                break;
            case 'getOnWaL' :
                $vaule = $SQLData->getWaterLevel();
                break;
            case 'getOnMet' :
                $vaule = $SQLData->getCH4();
                break;
            case 'getOnCoA' :
                $vaule = $SQLData->getCO();
                break;
            case 'getOnLig' :
                $vaule = $SQLData->getLight();
                break;
            case 'getOnCum' :
                $vaule = $SQLData->getRainSat();
                break;
            case 'getOnWid' :
                $vaule = $SQLData->getWindWay();
                break;
        endswitch;
    return $vaule;
});