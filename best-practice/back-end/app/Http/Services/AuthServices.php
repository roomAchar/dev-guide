<?php
/**
 * Created by PhpStorm.
 * User: yijia
 * Date: 2018/11/11
 * Time: 5:45 PM
 */

namespace App\Http\Services;


use App\Models\Menu;
use App\Models\User;

class AuthServices
{
    /**
     * 根据 用户ID 获取菜单
     * @param $id
     */
    public static function getUserMenu($id)
    {
        $menu = Menu::with('Children.Children')->where('pid',0)->get()->toArray();
        return $menu;
    }

    /**
     * 根据 用户ID 获取权限
     * @param $id
     */
    public static function getUserAuth($id)
    {

    }

    /**
     * 根据 用户ID 获取前台菜单
     * @param $id
     */
    public static function getUserRoute($id)
    {
//        $key = 'role:'.$roles->id;
//        $roles = \App\Models\UserAndRole::where('user_id',$user['id'])->pluck('role_id');
//        $auth_id = \App\Models\RoleAndAuth::whereIn('role_id',$roles)->select('auth_id')->distinct()->pluck('auth_id')->toArray();
//        $auth = \App\Models\Auth::whereIn('id',$auth_id)->get()->toArray();
        $access = [
            '/home',
            '/demo/list',
            '/demo/list_extend',
            '/user',
            '/auth',
            '/role',
        ];
        return $access;
    }
}
