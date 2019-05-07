<?php

namespace App\Repositories\link;

use App\Exceptions\link\FormerUser;
use DB;

class FormerUserRepository
{
    protected $formerUser;

    public function __construct()
    {
        $this->formerUser =  new FormerUser();
    }
}