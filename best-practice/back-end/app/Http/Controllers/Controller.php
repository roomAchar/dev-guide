<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * 接口返回状态码，接口中统一使用此处状态码
     *
     * @var array
     */
    protected $StatusCode = [
        'success' => 0,      // 成功
        'error' => -1,     // 失败
        'no_authority' => -2, // 无权限
    ];


    protected function returnMsg($status,$msg='',$other=[]){
        if (in_array($status,$this->StatusCode)){
            $return = [
                'msg'       => $msg,
                'status'    => $this->StatusCode[$status]
            ];
            $return = array_merge($return,$other);
            return response()->json($return);
        }else{
            throw new \Exception('返回状态值未定义');
        }
    }

}
