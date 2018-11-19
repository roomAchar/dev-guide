# GIT文档
[常用命令](#常用命令)
## 教程
[Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
[Git-简明指南](https://rogerdudler.github.io/git-guide/index.zh.html)
[Git-常用操作](https://github.com/521xueweihan/git-tips)

* 加入项目开发
* 分支说明
* 常用流程


## 加入项目开发
> 生成SSH密钥	`ssh-keygen -t rsa -C "youmail@qq.com"`

> 测试GIT地址 `git@47.92.228.249:test.git`

1. 克隆代码到本地 `git clone <address> `
2. 根据readme.md文档部署本地环境
3. 新建自己的分支 `git checkout -b <name>`
4. 在自己的分支上展开工作


## 分支说明

* 主分支 master
* 开发分支 develop
* 预发布分支 release
* 功能分支 feature
* bug分支 fixbug
* 其它分支 other

## 常用流程
### 日常开发流程
1. 暂存本地工作区 `git stash`
2. 切换到主分支 `git checkout master`
3. 新建bug修复分支，并切换 `git checkout -b fixbug#1`, `#1`代表BUG编号
4. 在 `fixbug#1` 分支上完成修复
5. 提交本次修改，切换至预发布分支
---
### 解决BUG流程

---
### 新增功能流程
---



## 常用命令
命令 | 说明 | 参数说明
--|--|--
`git init` | 创建版本库 
`git clone` | 克隆一个版本库
`git add <name>` | 添加文件进入暂存区 | name:文件名
`git commit -m <describe>` | 提交 | describe：本次提交的描述
`git status` | 查看当前状态 | 
`git diff <name>` | 查看文件差异 | name:文件名
`git reset --hard [commit_id | HEAD^]` | 版本回退 | commit_id:提交版本号  HEAD^：上一个版本
`git push <name> ` | 推送 
`git pull ` | 拉取 
`git checkout [-b] <name>` | 切换分支 | -b:切换并创建分支，name:分支名
`git branch <name>` | 创建分支 | name:要创建的分支名称
`git stash` | 
`git stash pop` |
`git merge <name>` | 分支合并 | name:要合并的分支名
`git log [--pretty=oneline]` | 查看日志 | --pretty=oneline：简化输出
`git reflog` | 查看所有日志，包括未来的版本 |
`git remote add origin <address>` | 添加远程仓库 | 