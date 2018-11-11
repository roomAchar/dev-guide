<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Services\AuthServices;
use App\Models\Menu;
use Illuminate\Support\Facades\Auth;
use App\Crawler\Download\Html\GetHtml;

class UserController extends Controller
{
    public $server;
    public function __construct()
    {
        // $this->server = GetHtml::getInstance();
    }
    // 获取用户信息
    public function getUserInfo()
    {
        $user = Auth::user()->toArray();
        if ($user){
            $user['access'] = AuthServices::getUserRoute($user['id']);
            return $this->returnMsg('success','',['data'=>$user]);
        }else{
            return $this->returnMsg('error','获取用户信息失败');
        }
    }

    public function getUserMenu()
    {
        $menu = AuthServices::getUserMenu(Auth::id());
        return $this->returnMsg('success','',['data'=>$menu]);
    }

}
