<template>
  <div>
    aaaaaa
    aaaaaa
    <div class="index_table_swith">
      <div class="table_item" @click="swich_tab(index)"  v-for="(list, index) in table_items" :class="index== isactive ? item_active :'item_default'">{{list.name}}</div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "nodeUpgrade",
    data(){
      return{
        isactive:0,
        item_active:'item_active',
        item_default:'item_default',
        is_show:[
          {"is_true":true},
          {"is_true":false},
        ],
        table_items:[
          {"name":' 交易记录 '},
          {"name":' 挖矿数据 '},
        ],
      }
    },methods:{
      /*table切换*/
      swich_tab(e){
        if(e==0){

        }else {

        }
        this.isactive=e
        this.is_show.forEach((item,index,self)=>{
          if(index==e){
            item.is_true=true
          }else {
            item.is_true=false
          }
        })
      },
    }
  }
</script>

<style scoped>
  .see_dil {
    cursor: pointer;
    color: #800080;
    float: right;
    position: absolute;
    right: 15%;
  }

  .con_search {
    position: relative;
    display: flex;
    margin-top: 20px;
  }

  .con_search_div {
    width: 20%;
    display: flex;
    border-radius: 3px;
    background-color: #ffffff;
  }

  .us_search2_1_input_icon {
    position: relative;
    left: 14px;
    margin-top: 12px;
    z-index: 1;
  }

  .con_search_submit {
    margin-left:2%;
  }

  .input_fath {
    width: 80%;
    position: relative;
    left: 3%;
  }

  .el-pagination {
    position: relative;
    float: right;
    margin-right: 3%;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .item_active {
    color: #800080;
  }

  .item_default {
    color: #000000;
  }

  .select_margin {
    position: relative;
    left: 4%;
  }

  .select_margin2 {
    position: relative;
    left: 6%;
  }

  .table_item {
    margin-bottom: 30px;
    font-size: 17px;
    user-select: none;
    cursor: pointer;
  }

  .index_table_swith {
    width: 16%;
    display: flex;
    justify-content: space-between;
  }
</style>
