<?php

namespace App\Repositories\link;

use App\Exceptions\link\UserConfig;
use DB;

class UserConfigRepository
{
    protected $userConfig;

    public function __construct()
    {
        $this->userConfig = new  UserConfig();
    }

}