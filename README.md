# 项目开发规范文档
 为什么需要项目开发规范
* 高效编码 - 避免了过多的选择造成的『决策时间』浪费；
* 风格统一 - 最大程度统一了开发团队成员代码书写风格和思路，代码阅读起来如出一辙；
* 减少错误 - 减小初级工程师的犯错几率。
* 提高技术团队的凝聚力、一致性和生产效率。

# 目录
* [公用规范](#公用规范)
    * [文档编写规范](#文档编写规范)
    * [命名规范](#命名规范)
    * [缩进与排版](#缩进与排版)
    * [注释](#注释)
        * [实现注释](#实现注释)
        * [文档注释](#文档注释)
    * [环境说明](#环境说明)
    * [配置信息与环境变量]()
    * [版本控制工具]()
        * [SVN]()
        * [GIT]()
* [前端](#前端)
    * [编码规范](#编码规范)
    * [应用目录]()
        * [资源目录(assets)]()
        * [接口(api)]()
        * [组件(components)](#)
        * [配置(config)](#config)
        * [工具函数(utils)]()
        * [混入(mixins)]()
        * [路由(router)](#)
        * [缓存(store)]()
        * [视图(views)]()
    * [mock数据]()
    * [测试](#系统事件)
        * [e2e]()
        * [unit]()
    * [设计模式]()
* [后台](#特性)
    * [编码规范]()
        * [PSR-N](https://github.com/PizzaLiu/PHP-FIG)
    * [设计模式](#)
        * [工厂模式]()
        * [单例模式]()
        * [注册树模式]()
        * [适配器模式]()
        * [策略模式]()
        * [数据映射模式]()
        * [观察者模式]()
        * [装饰器模式]()
        * [迭代器模式]()
        * [代理模式]()
    * [设计理念]()
        * [MVC]()
        * [Restful]()
    * [鉴权](#)
        * [OAuth2]()
        * [JWT]()
        * [Token]()
    * [单元测试]()
    * [功能测试]()
    * [日志系统]()

* [测试](#特性)
* [开发环境部署]()
    * [前端]()
    * [后台]()
* [协作](#)
* [工具]()
* [资源](#资源)
    * [GraphQL](http://graphql.cn/)
    * [Mock.js](http://mockjs.com/)
    * [Selenium](http://www.testclass.net/selenium_python/)
    * 优秀专栏
        * [猿论](https://zhuanlan.zhihu.com/c_159682850)
        * [PHP / Laravel / 全栈](https://zhuanlan.zhihu.com/fsdhub)
        * [WEB前端知识总结](https://zhuanlan.zhihu.com/p/25334672)

---
# 公用规范
关于公用规范
## 文档编写规范
### 能愿动词
为了避免歧义，文档大量使用「能愿动词」，对应的解释如下：
* 必须（Must） - 只能这样子做，请无条件遵循，没有别的选项；
* 绝不（Must Not）- 严令禁止，在任何情况下都不能这样做；
* 应该（Should） - 强烈建议这样做，但是不强求；
* 不应该（Should Not） - 强烈建议不这样做，但是不强求；
* 可以（May） - 选择性高一点，在这个文档内，此词语使用较少；

## 命名规范
* 目录命名 **应该**统一小写
* 文件命名 **应该**使用下划线命名
* 类的命名 **必须**使用大驼峰命名
* 接口命名 **必须**使用大驼峰命名，并且首字母必须是I
* 属性/方法命名 **必须**使用小驼峰命名
* 常量命名 **必须**全都使用大写字母，单词之间用下划线分割，并且指出该常量完整含义

## 缩进与排版
**必须**使用4个空格来代替tab缩进,编辑器默认

## 注释
关于注释
### 实现注释
### 文档注释

## 环境说明
* Local - 本地开发环境
* Staging - 线上测试环境，对应git的test分支
* Production - 线上生产环境，对应git的master分支


## 版本控制工具

### SVN
* trunk 主分支 日常开发进行的地方。
* branches 分支  一些阶段性的release版本，这些版本是可以继续进行开发和维护的，则放在branches目录中。又比如为不同用户客制化的版本，也可以放在分支中进行开发。
* tags 一般是只读的，这里存储阶段性的发布版本，只是作为一个里程碑的版本进行存档。

### GIT

主分支
* master 分支
* develop 分支

辅助性分支
* 功能分支
* 发布分支
* 热修复分支

每个开发人员一个独立分支，每次完成相关功能后push到develop分支

每个issue一个分支，解决后push到dev分支

# 前端

## [编码规范](https://codeguide.bootcss.com/)
## [TGuide](http://tguide.qq.com/main/base.htm)






# 资源
## [GraphQL](http://graphql.cn/)
一种用于 API 的查询语言，后台只需要定义实现数据模型及映射关系，前端可自定义编写所需的数据进行查询

1.建议项目目前一部分功能使用GraqhQL实现，如经常重复使用的资源，公共资源，配置数据等

2.前端需要什么数据后端只会返回需要用到的数据字段，因为控制数据的是前端，而不是服务器。这样前端可避免跟后台去要接口

3.GraphQL查询不仅能够获得资源的属性，还能沿着资源间引用进一步查询。还可以把多个资源通过一次请求就获取前端所需的所有数据。
## [Mock.js](http://mockjs.com/)
Mock.js是一个模拟数据生成器，可帮助前端开发和原型分离后端进度，并减少一些单调，特别是在编写自动化测试时。

1.前端不需要后台返回数据，可根据文档中约定的数据格式自行编写mock规则生成JSON数据。

2.后台接口完成后，可根据前端编写的mock规则校验接口数据是否符合规范。

3.当功能改动时可利用编写的mock规则做接口的回归测试。

4.不需要修改既有代码，就可以拦截 Ajax 请求，返回模拟的响应数据。
> [Easy Mock](https://www.easy-mock.com/) 是一个可视化，并且能快速生成 模拟数据 的持久化服务
## [Selenium](http://www.testclass.net/selenium_python/)
Selenium也是一个用于Web应用程序测试的工具。Selenium测试直接运行在浏览器中，就像真正的用户在操作一样。支持的浏览器包括IE、Mozilla Firefox、Mozilla Suite等。这个工具的主要功能包括：测试与浏览器的兼容性——测试你的应用程序看是否能够很好得工作在不同浏览器和操作系统之上。测试系统功能——创建衰退测试检验软件功能和用户需求。支持自动录制动作和自动生成。Net、Java、Perl等不同语言的测试脚本。Selenium 是ThoughtWorks专门为Web应用程序编写的一个验收测试工具。
