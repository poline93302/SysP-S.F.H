<?php


namespace App\Exceptions\link;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class FormerUser extends Authenticatable
{
    use  Notifiable;
    protected $table = 'former_users';
//    protected $fillable = [
//    ];
//  guarded => 黑名單 ＝null fillable=>白名單
    protected $guarded = [];
//  hidden => 需隱藏資料欄位
    protected $hidden =['password'];

    public $timestamps = false;
}