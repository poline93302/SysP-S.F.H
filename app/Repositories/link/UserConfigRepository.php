<?php

namespace App\Repositories\link;

use App\Entities\link\UserConfig;
use DB;

class UserConfigRepository
{
    protected $userConfig;

    public function __construct()
    {
        $this->userConfig = new  UserConfig();
    }

}