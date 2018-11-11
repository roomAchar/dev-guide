<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    //




    public function Children()
    {
        return $this->hasMany(Menu::class,'pid','id');
    }


}
