<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConfigTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('config', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pid')->default(0)->comment('父级分类ID');
            $table->tinyInteger('type')->default(0)->comment('数据类型：{0:text,1:json}');
            $table->string('title')->nullable()->comment('标题');
            $table->string('keyword')->unique()->nullable()->comment('关键字');
            $table->text('value')->nullable()->comment('内容值');
            $table->smallInteger('sort')->default(1000)->comment('排序');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('system_config');
    }
}
