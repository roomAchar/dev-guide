<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request){
        $data = $request->validate(
            [
                'email' => 'required',
                'password' => 'required|string|min:6',
            ]
        );
        if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']])){
            $token =  Auth::user()->createToken(config('auth.token_name'))->accessToken;
            return response()->json([
                'msg'    =>  '登陆成功',
                'code'   =>  $this->StatusCode['success'],
                'token'  =>  $token,
            ]);
        }
        return response()->json([
            'msg'    =>  '登陆失败，账号或密码不匹配',
            'code'   =>  $this->StatusCode['error']
        ]);
    }

    public function logout(Request $request){

    }

}
