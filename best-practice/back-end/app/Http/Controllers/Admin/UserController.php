<?php

namespace App\Http\Controllers\Admin;

use App\Models\Menu;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    //
    public function getList(Request $request){
        $page = $request->input('page',1);
        $limit = $request->input('limit',10);
        $data = User::skip(($page-1)*$limit)->take($limit)->get();
        return $this->returnMsg('success','',['data'=>$data]);
    }


}
