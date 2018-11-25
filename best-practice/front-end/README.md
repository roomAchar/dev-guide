# Front-End Guide

## 项目说明
 前后端分离实践项目 
 vue+element-ui
> 线上地址 [http://test.com]()

> 远程仓库地址 `git@192.168.0.1:dev-guide-front-end.git`

> [Easy-Mock数据地址](https://www.easy-mock.com/)

### 资源链接
* [Vue.js风格指南](https://vuejscaff.com/v2/style-guide/index.html)
* [Mock.js](http://mockjs.com/)
* [GraphQL](http://graphql.cn/)


## 快速开始
> 获取代码
```bash
git clone git@192.168.0.1:dev-guide-front-end.git
```
> 生成本地配置文件,需要自行修改 .env 文件
```
cp .env.bak .env
```
> 安装依赖
```
npm install
```
> 运行开发环境
```
npm run dev
```
> 运行集成测试环境
```
npm run sit
```
> 打包正式环境
```
npm run build
```
> 打包到集成测试环境
```
npm run build:sit
```


## 集成测试流程
1. 克隆仓库
```bash
git clone git@192.168.0.1:project.git
```
2. 切换到预发布分支，pull代码
```git
git checkout -b release origin/release
git pull
```
3. 安装依赖
```bash
npm install
```
4. 运行
```
npm run sit
