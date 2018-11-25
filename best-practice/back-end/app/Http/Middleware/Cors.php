<?php
/**
 * Created by PhpStorm.
 * User: yijia
 * Date: 2018/11/11
 * Time: 4:54 PM
 */

namespace App\Http\Middleware;

use Closure;

class Cors
{
    public function handle($request, Closure $next)
    {

        // 设置允许访问的域地址
        $domains = [
            'http://127.0.0.1:8080',
            'http://localhost:8080'
        ];

        if(isset($request->server()['HTTP_ORIGIN'])){
            $origin = $request->server()['HTTP_ORIGIN'];
            if (in_array($origin, $domains)) {
                header("Access-Control-Allow-Origin: *");
                header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
                header("Access-Control-Allow-Headers: X-Requested-With,Content-Type,Origin,Authorization");
            }
        }

//        if ($request->isMethod('OPTIONS')){
//            return response('ok',200);
//        }

        $response = $next($request);
        return $response;
    }

}
