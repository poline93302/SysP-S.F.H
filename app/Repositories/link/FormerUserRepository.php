<?php

namespace App\Repositories\link;

use App\Entities\link\FormerUser;
use DB;

class FormerUserRepository
{
    protected $formerUser;

    public function __construct()
    {
        $this->formerUser =  new FormerUser();
    }
}