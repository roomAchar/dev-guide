<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable,HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['sex_text','state_text'];

    /**
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hasRole()
    {
        return $this->hasMany(Role::class);
    }


    protected $maps = [
        'sex'   => [
            '0' =>  '未填写',
            '1' =>  '男',
            '2' =>  '女'
        ],
        'type'  => [
            '0' =>  '管理员',
            '1' =>  '普通用户'
        ],
        'state' => [
            '0' =>  '',
            '1' =>  '',
        ]
    ];

    public function getSexTextAttribute(){
        $field = 'sex';
        return $this->maps[$field][$this->attributes[$field]];
    }
    public function getStateTextAttribute(){
        $field = 'state';
        return $this->maps[$field][$this->attributes[$field]];
    }
}
