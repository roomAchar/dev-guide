<?php

namespace App\Http\Controllers\Admin;

use App\Models\Menu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MenuController extends Controller
{
    //
    public function getData($pid){
        $menu = Menu::withCount('Children as children_count')->where('pid',$pid)->get()->toArray();
        return $this->returnMsg('success','',['data'=>$menu]);
    }
}
