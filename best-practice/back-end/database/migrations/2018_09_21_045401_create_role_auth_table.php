<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoleAuthTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_auth', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('role_id')->unsigned()->comment('角色ID');
            $table->integer('auth_id')->unsigned()->comment('权限ID');
            $table->text('extented')->comment('权限扩展配置');
            $table->timestamps();


//            $table->foreign('role_id')->references('id')->on('roles');
//            $table->foreign('auth_id')->references('id')->on('authorities');
//            $table->foreign('menu_id')->references('id')->on('menus');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_and_auth');
    }
}
