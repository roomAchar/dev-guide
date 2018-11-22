# GIT练习题
> 测试GIT地址 `git@47.92.228.249:test.git`

> 说明：下面所有的 `<name>` 代表你们名字的简写 如 `<name>-test.txt = zhangsan-test.txt`

## 版本提交与回退
1. 克隆远程仓库到本地

2. 设置用户信息(已经设置过的可跳过)

3. 创建 `dev` 分支，源自远程 `dev` 分支，并pull远程分支内容  
```bash
git checkout -b dev origin/dev     
git pull
```
4. 在本地仓库新建一个 `<name>-1.txt` 文件，并写入任意文本

5. 在本地仓库新建一个 `<name>-ignore.txt` 文件，并写入任意文本(此文件不提交)

6. 添加并提交 `<name>-1.txt`

7. 修改文件 `<name>-1.txt` ，再次添加并提交

8. 撤销上次提交内容

9. 再次修改文件 `<name>-1.txt` ，然后添加并提交

10. 将文件  `<name>-1.txt` 回复到第6步提交的状态

## 分支操作

1. 创建一个分支并切换过去，分支名为 `branch-<name>` 

2. 新建一个 `<name>-2.txt` 文件，并写入任意文本

3. 添加并提交文件 `<name>-2.txt`

4. 切换回 `dev` 分支

5. 将 `branch-<name>` 合并到 `dev` 分支

6. push dev 分支到远程分支

