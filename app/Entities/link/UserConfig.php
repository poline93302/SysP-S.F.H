<?php


namespace App\Entities\link;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserConfig extends Authenticatable
{
    use  Notifiable;
    protected $table = 'user_config';
//  guarded => 黑名單 ＝null fillable=>白名單
    protected $guarded = [];
//  hidden => 需隱藏資料欄位
    protected $hidden =[];

    public $timestamps = false;
}