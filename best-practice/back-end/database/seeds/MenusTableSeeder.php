<?php

use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menus = [
            [
                "id" => 1,
                "pid" => 0,
                "name" => "用户管理",
                "url" => ""
            ],
            [
                "id" => 2,
                "pid" => 0,
                "name" => "组件DEMO",
                "url" => ""
            ],
            [
                "id" => 3,
                "pid" => 0,
                "name" => "错误页",
                "url" => ""
            ],
            [
                "id" => 4,
                "pid" => 1,
                "name" => "用户列表",
                "url" => "/user"
            ],
            [
                "id" => 5,
                "pid" => 2,
                "name" => "基础列表",
                "url" => "/demo/list"
            ],
            [
                "id" => 6,
                "pid" => 2,
                "name" => "下拉列表",
                "url" => "/demo/list_extend"
            ],
            [
                "id" => 7,
                "pid" => 3,
                "name" => "404页",
                "url" => "/404"
            ],
            [
                "id" => 8,
                "pid" => 3,
                "name" => "401页",
                "url" => "/401"
            ],
        ];
        foreach ($menus as $menu){
            \App\Models\Menu::create($menu);
        }
    }
}
