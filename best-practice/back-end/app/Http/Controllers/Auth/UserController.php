<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
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
        //dd($user);
        if ($user){
            $user['access'] = $this->getAccess();
            return response()->json(['code'=>$this->StatusCode['success'],'user'=>$user]);
        }else{
            return response()->json(['code'=>$this->StatusCode['error'],'msg'=>'获取用户信息失败']);
        }
    }

    public function getAccess(){
//        $key = 'role:'.$roles->id;
//        $roles = \App\Models\UserAndRole::where('user_id',$user['id'])->pluck('role_id');
//        $auth_id = \App\Models\RoleAndAuth::whereIn('role_id',$roles)->select('auth_id')->distinct()->pluck('auth_id')->toArray();
//        $auth = \App\Models\Auth::whereIn('id',$auth_id)->get()->toArray();
        $access = [
            '/home',
            '/menu',
            '/config',
            '/user',
            '/auth',
            '/role',
            '/crawler_rules',
        ];
        return $access;
    }
}
