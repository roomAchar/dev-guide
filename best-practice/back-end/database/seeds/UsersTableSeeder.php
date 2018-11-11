<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         *
         */
        App\Models\User::create([
            'name'      => '超管账号',
            'email'     => 'admin@mail.com',
            'password'  => \Illuminate\Support\Facades\Hash::make('123456'),
            'avatar'    => 'https://avatars3.githubusercontent.com/u/22978107?s=400&u=9f5e2f4f5bece26e3fe87dc9209d3ea3fc1efbc5&v=4'
        ]);
        factory(App\Models\User::class, 50)->create();
    }
}
