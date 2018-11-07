## Table组件

基础表格
```vue
<Table ref="table" :url="url" :columns="columns" v-on:tools="handleTools"></Table>
```
> Demo: src/view/demo/list.vue

下拉表格
```vue
<Table ref="table" :url="url" :columns="columns" :page="false" :checkbox="false" :tools="handleTools" :children="handleGetChildren"></Table>
```
> Demo: src/view/demo/list_extend.vue

### Attributes 组件属性
 
| 参数 | 说明  | 类型 | 可选值 | 默认值 |
| ------------ | --------------- | ----- | ----- | ----- |
| ref | mixin/list.js 绑定操作需要依赖此属性 | String |  | table
| url | 数据请求url地址，统一使用get方法 | String |
| columns | 表格列属性配置 [Columns](#Columns配置) | Array |
| page | 是否开启分页组件 | Boole | true,false | true |
| checkbox | 是否开启复选框组件 | Boole | true,false | true |


### Events 组件事件

| 事件名 | 说明  | 参数 |
| ------------ | --------------- | ----- |
| tools | 用户点击 | type,index,row |
| children | 获取当前行的子集 | row |

### Components 依赖子组件
| 子组件名 | 说明 |
| ------------ | --------------- |
| tools | 表格工具栏按钮组件 |
| fold | 表格开启展开功能后的展开功能组件 |


### 辅助函数
> 表格辅助函数在 ```mixins/list.js``` 中

数据说明

| 名称 | 说明 | 默认值 |
| ------------ | --------------- | --------------- |
| search | 表格组件搜索项 |
| tools_id |   |
| select_ids | 表格开启展开功能后的展开功能组件 |

函数说明

| 名称 | 说明 | 参数说明 |
| ------------ | --------------- | --------------- |
| ```handleSearch()``` | 列表页点击搜索 |
| ```handleGetSelection(field = null)``` | 获取复选框选中行数据 |
| ```handleSetFilter()``` | 设置表格组件筛选项 |
| ```handleGetFilter()``` | 获取表格组件筛选项 |
| ```handleRenderTable()``` | 重载表格组件 |
| ```handleOpenLoading()``` | 开启表格组件Loading层 |
| ```handleCloseLoading()``` | 关闭表格组件Loading层 |
| ```handleDeleteRow(index)``` | 删除表格组件某行数据 |


> 父组件中默认初始化Table筛选条件加在mounted周期中
``` 
mounted(){
    this.handleSetFilter('where',{type:'1'});
},
```

### Columns配置
```javascript
 //...
 columns: [
    {
        prop: 'id',         // [必填] 渲染接口字段，与数据库字段一致！         
        label: 'ID',        // [必填] 显示表头                              
        width: '80',        // 定义列宽
        lazy: true,         // 开启表格类似树形展开效果，必须监听children事件，后端组要传子集数据的count 字段名为'children_count'
        convert: true,      // 渲染数据名是否追加'_text'后缀（后台数据模型层须实现字段的访问器）
        sort: true,         // 是否开启排序
        search: true,       // 是否可搜索
        filter:{            // 是否可筛选,不需要筛选则不填此属性
            multiple: true,                     // 是否可多选，默认为true
            data:BaseData.getArray('sex')       // 下拉数据数组,filter存在则必选，getConfigArray('sex') 函数参考 config/sys_config.js
        },
        tools: {            // 操作工具栏 必须监听tools事件 handleTools(type,index,row) type参数为点击按钮的键值
            show: {
                type: 'primary',        // 按钮类型
                icon: 'el-icon-view',   // 按钮图标
            },
            edit: {
                type: 'primary',
                icon: 'el-icon-edit',
            },
            delete: {
                type: 'danger',
                icon: 'el-icon-delete',
            }
        },
        render: {        
            // 自定义渲染数据,不能和tools一起用，tools优先级大于render
            render: function (createElement) {
                // 参考链接 https://cn.vuejs.org/v2/guide/render-function.html#%E8%99%9A%E6%8B%9F-DOM
                return createElement('el-tag',this.row.keyword)
            },
            props: {
                row: Object         // 接受当前行参数
            },
        }
    },
 ]
 ```