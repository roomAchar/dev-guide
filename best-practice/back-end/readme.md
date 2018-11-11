# Back-End Guide

## 项目概述
 前后端分离实践项目 
 laravel
> 线上地址 [http://test.com]()
* [Laravel 项目开发规范](https://laravel-china.org/docs/laravel-specification/5.5)
* [laravel 5.6](https://laravel-china.org/docs/laravel/5.6)
* [GraphQL](http://graphql.cn/)


## 运行环境
* Nginx/Apache
* PHP 7.0+
* Mysql 5.7+
* Redis 3.0+

## 开发环境部署/安装

### 基础安装
#### 1. 克隆源代码到本地：
```bash
 git clone git@192.168.0.1:dev-guide-back-end.git
```
#### 2. 配置本地环境


#### 3. 安装扩展包依赖
```bash
composer install
```

#### 4. 生成配置文件
```bash
cp .env.example .env
```
你可以根据情况修改 .env 文件里的内容，如数据库连接、缓存、邮件设置等：

#### 5. 生成秘钥
```bash
php artisan key:generate
```

#### 6. 生成数据表及生成测试数据
在网站根目录下运行以下命令
```bash
php artisan migrate --seed
```
数据迁移生成表与模拟数据，超管账号：
```bash
email:admin@gmail.com
password:123456
```

#### 7. 创建生成安全访问令牌时所需的加密密钥
```bash
php artisan passport:install
```

## 扩展包说明

## 自定义 Artisan 命令列表

## 队列列表




