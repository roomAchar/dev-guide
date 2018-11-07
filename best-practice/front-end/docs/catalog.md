# 应用目录说明

* 应用目录说明
    * [静态资源(assets)](#静态资源目录)
        * images
        * css
    * [接口(api)](#API接口目录)
        * index.js(公共api)
        * module1.js(模块1 API)
        * module2.js(模块2 API)
        * ...
    * [组件(components)](#组件目录)
        * commons(全局公用组件)
        * dodule1(模块1 公用组件)
        * ...
    * [配置(config)](#配置文件目录)
        * index.js(单一入口，所有的config文件都由此文件暴露出去)
        * ...
    * [工具函数(utils)](#工具函数目录)
        * ...
    * [混入(mixins)](#混入文件目录)
        * list.js
        * form.js
    * [路由(router)](#路由文件目录)
        * index.js(入口文件，做路由看守，加载路由文件，返回路由实例)
        * routers.js(路由文件，引入各个子模块路由)
        * module(路由子模块)
            * ...
    * [缓存(store)](#缓存目录)
        * index.js(入口文件，加载各个子模块，返回缓存实例)
        * module(子模块)
            * ...
    * [视图(views)](#视图目录)

### 静态资源目录

