## 资源
[markdown基本语法](https://www.jianshu.com/p/191d1e21f7ed)

[Markdown在线编辑器](http://www.mdeditor.com/)


## 目录
* [标题](#标题)
* [字体](#字体)
* [引用](#引用)
* [分割线](#分割线)
* [图片](#图片)
* [超链接](#超链接)
* [列表](#列表)
* [表格](#表格)
* [代码](#代码)


# 标题

# 这是一级标题
> `# 这是一级标题`
## 这是二级标题
> `## 这是二级标题`
### 这是三级标题
> `### 这是三级标题`
#### 这是四级标题
> `#### 这是四级标题`

# 字体
*斜体*
> `*斜体*`

**加粗**
> `**加粗**`

***斜体加粗***
> `***斜体加粗***`

~~删除线~~

# 引用
> `>引用的内容`

>> `>>引用的内容`

>>> `>>>引用的内容`


# 分割线
---
***
> `--- | ***`
# 图片

![this is img](./img.jpg "alt")

> `![this is img](./img.jpg "alt")`

# 超链接

[百度](http://www.baidu.com)

> `[百度](http://www.baidu.com)`

[锚点](#超链接)

> `[锚点](#超链接)`

# 列表

* 无须列表 
    * 列表内容 `* 列表内容`
    * 列表内容 `* 列表内容`
    * 列表内容 `* 列表内容`
* 有序列表
    1. 列表内容 `1. 列表内容`
    2. 列表内容 `2. 列表内容`
    3. 列表内容 `3. 列表内容`


# 表格

表头|表头|表头
---|--|---
内容内容内容|内容内容内容|内容内容内容
内容|内容内容内容内容|内容


```
表头|表头|表头
---|:--:|---:
内容内容内容|内容内容内容|内容内容内容
内容|内容内容内容内容|内容
```
# 代码

单行代码: `console.log('hello world')` 
> \`console.log('hello world')\` 

多行代码：
```json
{
    "status": 0,
    "msg": "ok",
    "data": [
        //.....
    ]
}
```
> \```json
{
    "status": 0,
    "msg": "ok",
    "data": [
        //.....
    ]
}
\```