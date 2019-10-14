<template>
  <div class="index_con">
    <el-dialog
      :visible.sync="is_loginout"
      width="25%"
    >
      <span>请选择是否继续进行注销操作？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="loginout_false()">取 消</el-button>
    <el-button type="primary" @click="loginout_true()">确 定</el-button>
  </span>
    </el-dialog>
    <el-button class="login_out" type="primary" @click="login_out()">注销登录</el-button>
    <div class="index_table_swith">
      <div class="table_item" @click="swich_tab(index)"  v-for="(list, index) in table_items" :class="index== isactive ? item_active :'item_default'">{{list.name}}</div>

    </div>
    <user-info ref="userIn" v-show="is_show[0].is_true"/>
    <migration-list v-show="is_show[1].is_true"/>
    <data-statistics v-show="is_show[2].is_true"/>
    <node-upgrade v-show="is_show[3].is_true"/>
    <service-monitoring v-show="is_show[4].is_true"/>
  </div>
</template>
<script>
  import userInfo from '../../components/userInfo'
  import migrationList from '../../components/migrationList'
  import dataStatistics from '../../components/dataStatistics'
  import nodeUpgrade from '../../components/nodeUpgrade'
  import serviceMonitoring from '../../components/serviceMonitoring'
  export default {
    name: "index",
    components: {userInfo,migrationList,dataStatistics,nodeUpgrade,serviceMonitoring},
    data(){
      return{
        is_show:[
          {"is_true":true},
          {"is_true":false},
          {"is_true":false},
          {"is_true":false},
          {"is_true":false},
        ],
        isactive:0,
        is_loginout:false,
        item_active:'item_active',
        item_default:'item_default',
        table_items:[
          {"name":' 用户信息 '},
          {"name":' 迁移列表 '},
          {"name":' 数据统计 '},
          {"name":' 节点升级 '},
          {"name":' 服务监控  '},
        ]
      }
    },
    methods:{
      swich_tab(e){
        // this.$refs.userIn.select_exchange()
        this.isactive=e
        this.is_show.forEach((item,index,self)=>{
          if(index==e){
            item.is_true=true
          }else {
            item.is_true=false
          }
        })
      },
      login_out(){
        this.is_loginout=true
      },
      loginout_false(){
        this.is_loginout=false
      },
      loginout_true(){
        this.$store.dispatch('login/LogOut').then(() => {
          this.is_loginout=false
          location.reload()
        })
      },
    }
  }
</script>

<style scoped>
  .item_active{
    color: #800080 ;
    border-bottom: 2px solid #800080 ;
    padding-bottom: 5px;
  }
  .item_default{
    color: #000000;
  }
  .table_item{
    margin-bottom:30px;
    font-size: 18px;
    user-select: none;
    cursor: pointer;
  }
  .login_out{
    /*font-size: 18px;*/
    user-select: none;
    cursor: pointer;
    float: right;
    /*color: #800080 ;*/
  }
  .index_table_swith{
    width:48%;
    display: flex;
    justify-content: space-between;
  }
  .index_con{
    padding: 2% 5%;
    width: 90%;
    height: 100%;
  }
</style>
