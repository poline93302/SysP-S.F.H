<?php


namespace App\Services\link;

use App\Repositories\link\UserConfigRepository;

class configDBService
{
    protected $userConfig;

    public function __construct()
    {

        $this->userConfig   = new UserConfigRepository();
    }

    public function del_config_issue($id)
    {
        $this->userConfig->delete_config($id);
   }

    public function edit_user_config($id,$value,$startT,$endT,$switch)
    {
        $this->userConfig->edit_config($id,$value,$startT,$endT,$switch);
   }

    public function add_user_config($id,$sensor,$value,$startT,$endT,$switch)
    {
       $this->userConfig->add_config($id,$sensor,$value,$startT,$endT,$switch);
   }
}