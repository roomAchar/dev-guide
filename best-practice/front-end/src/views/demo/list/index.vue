<template>
    <div>
        <div style="margin: 8px 0">
            <el-row>
                <el-col :span="14" style="text-align: left">
                    <el-button type="danger" size="small" icon="el-icon-delete" @click="handleDisableAll">禁用所选项</el-button>
                    <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd()">添加{{page_name}}</el-button>
                </el-col>
                <el-col :span="10">
                    <el-input placeholder="请输入要搜索的内容..." size="small" v-model="search.value" class="input-with-select">
                        <el-select style="width: 110px;" size="small" v-model="search.field" slot="prepend" placeholder="请选择">
                            <el-option v-for="item in columns" :key="item.prop" v-if="item.search" :label="item.label" :value="item.prop"></el-option>
                        </el-select>
                        <el-button size="small" slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                    </el-input>
                </el-col>
            </el-row>
        </div>

        <Table ref="table" :url="url" :columns="columns" v-on:tools="handleTools"></Table>

        <el-dialog :title="'添加'+page_name" :visible.sync="addFormVisible">
            <Add ref="addForm" v-if="addFormVisible" v-on:close="addFormVisible = false" v-on:render="this.handleRenderTable"></Add>
        </el-dialog>
        <el-dialog :title="'编辑'+page_name" :visible.sync="editFormVisible">
            <Edit ref="editForm" :id="tools_id" v-if="editFormVisible" v-on:close="editFormVisible = false"  v-on:render="this.handleRenderTable"></Edit>
        </el-dialog>

    </div>
</template>

<script>
    import Table from "../../../components/commons/table";
    import Add from "./add";
    import Edit from "./edit";
    import list from "../../../mixins/list";
    import { BaseData } from "../../../config";
    // import { delUser } from "../../../api/user";

    export default {
        components: {Table, Add, Edit},
        mixins: [list],
        data() {
            return {
                page_name: '用户',
                url: 'user/list',
                addFormVisible: false,
                editFormVisible: false,
                columns: [
                    {
                        prop: 'id',
                        label: 'ID',
                        sort: true,
                        width: '80'
                    },
                    {
                        prop: 'name',
                        label: '用户名',
                        search: true,
                    },
                    {
                        prop: 'mobile',
                        label: '手机号码',
                        search: true,
                    },
                    {
                        prop: 'email',
                        label: '邮箱',
                        search: true,
                    },
                    {
                        prop: 'sex',
                        convert: true,
                        label: '性别',
                        filter:{
                            data:BaseData.get('sex')
                        }
                    },
                    {
                        prop: 'type',
                        convert: true,
                        label: '用户类型',
                        filter:{
                            data:BaseData.get('user_type')
                        }
                    },
                    {

                        label: '用户状态',
                        width: '140px',
                        filter:{
                            data:BaseData.get('user_state')
                        },
                        render:{
                            props: {
                                row: Object         // 接受当前行参数
                            },
                            render: function (createElement) {
                                // 参考链接 https://cn.vuejs.org/v2/guide/render-function.html#%E8%99%9A%E6%8B%9F-DOM
                                return createElement('el-switch',{
                                    attrs:{
                                        value:this.row.state
                                    },
                                    props: {
                                        "active-color":"#13ce66",
                                        "inactive-color":"#ff4949",
                                        "active-value":0,
                                        "inactive-value":1,
                                        "inactive-text":"禁用",
                                        "active-text":"正常",
                                    },
                                    nativeOn: {
                                        click:()=>{
                                            if (this.row.state === 0){
                                                this.row.state = 1;
                                            } else{
                                                this.row.state = 0;
                                            }
                                            // editUser(this.row,this.row.id)
                                        }
                                    },
                                })
                            }
                        }
                    },
                    {
                        label: '操作',
                        width: '200',
                        tools:{
                            // 键名对应 handleTools 中的type参数
                            edit:{
                                type: 'primary',
                                icon: 'el-icon-edit',
                            },
                            delete: {
                                type: 'danger',
                                icon: 'el-icon-delete',
                            }
                        }
                    }
                ],
                select:[],
                user_ids:[],
            }
        },

        methods: {
            // 工具栏事件处理
            handleTools(event, index, row) {
                this.tools_id = row.id;
                if (event == 'edit'){
                    this.editFormVisible = true;
                } else if (event == 'delete') {
                    // //删除数据
                    // delUser(row.id).then((response)=>{
                    //     //成功响应动态移除表格项
                    //     this.handleDeleteRow(index);
                    //     //提示信息
                    //     this.$message.success(response.data.msg);
                    // });
                    this.handleDeleteRow(index);
                    this.$message.success('测试删除数据成功');
                }
            },
            handleAdd(){
                this.addFormVisible = true;
            },
            handleDisableAll(){
                let data = this.handleGetSelection();
                let ids = this.handleGetSelection('id');
                console.log(data);
                this.$message.success('选中数据ID：'+ids.toString()+'<br>所有数据在console中查看');
            }
        }
    }
</script>
