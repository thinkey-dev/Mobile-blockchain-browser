<template>
  <div class="wr_all">
    <el-dialog
      title="累计收益详细"
      :visible.sync="historical_details"
      width="40%"
    >
      <div class="block">
        <div class="con_table">
          <el-table
            :data="historical_data"
            border
            style="width: 100%;"
            :header-cell-style="this.tableHeaderColor">
            <el-table-column
              label="时间"
              align="center">
              <template slot-scope="scope">
                <span>{{timestampToTime(scope.row.timestamp)}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="数值"
              align="center">
              <template slot-scope="scope">
                <span>{{scope.row.address}}</span>
              </template>
            </el-table-column>

          </el-table>
          <el-pagination
            background
            @current-change="change_currentPage_1"
            :current-page="currentPage_1"
            :page-size="pagesize_1"
            layout="total,prev, pager, next"
            :total="totla_1"
          >
          </el-pagination>
        </div>
      </div>

    </el-dialog>
    <div class="con_search">
      <div class="con_search_div">
        <span class="el-icon-search us_search2_1_input_icon"></span>
        <div class="input_fath">
          <el-input v-model="searchphone"
                    placeholder="请输入用户手机号进行检索">
          </el-input>
        </div>
      </div>
      <el-button type="primary" class="con_search_submit"
                 @click="search_phone()">搜索
      </el-button>
      <el-select v-model="selectexchange" @change="select_exchange()"
                 placeholder="" class="select_margin">
        <el-option
          v-for="item in options"
          :key="item.typeId"
          :label="item.typeName"
          :value="item.typeId">
        </el-option>
      </el-select>
      <el-select v-model="selectlevel" @change="select_level()"
                 placeholder="" class="select_margin2">
        <el-option
          v-for="item in options1"
          :key="item.typeId"
          :label="item.typeName"
          :value="item.typeId">
        </el-option>
      </el-select>
    </div>
    <div class="con_table">
      <el-table
        :data="tableData"
        border
        style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
        :header-cell-style="this.tableHeaderColor"
      >
        <el-table-column
          label="用户地址"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.address}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="绑定手机"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.address}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="用户总代币量"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.address}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="锁定代币量"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.address}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="可流通代币量"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.address}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="节点级别"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.address}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="挖矿累计收益"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.address}}</span>
            <span class="see_dil" @click="see_detailed(1)" v-show="scope.row.isshow">查看</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @current-change="currentPageChange"
        :current-page="currentPage"
        :page-size="pagesize"
        layout="total,prev, pager, next"
        :total="totla">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        historical_details: false,
        currentPage: 1,
        pagesize: 10,
        totla: 0,
        currentPage_1: 1,
        pagesize_1: 10,
        totla_1: 0,
        searchphone: '',
        tableData: [
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},

        ],
        historical_data: [
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},

        ],
        selectexchange: 0,
        selectlevel: 0,
        options: [
          {'typeName': '请选择是否绑定手机', 'typeId': 0},
          {'typeName': '成功', 'typeId': 1},
          {'typeName': '失败', 'typeId': 2},
        ],
        options1: [
          {'typeName': '请选择节点级别', 'typeId': 0},
          {'typeName': '源节点', 'typeId': 1},
          {'typeName': '超级节点', 'typeId': 3},
          {'typeName': '金牌节点', 'typeId': 4},
          {'typeName': '银牌节点', 'typeId': 5},
          {'typeName': '普通矿工', 'typeId': 6},
        ],
        search_value:''
      }
    },
    methods: {
      /*获取数据公共方法*/
      getdata(e,q) {
        // getPersonInfo(e).then(response => {
        //   if (response.data.dataList == []) {
        //     this.tableData = []
        //   } else {
        //     this.tableData = response.data.dataList
        //     this.totla = response.data.total
        //     if(q==1){
        //       this.search_value= this.searchphone
        //     }
        //   }
        // })
      },
      /*初始化数据*/
      initialization_data() {
        // let data = {"phone": "", "address": "", "page": 1, "pageSize": 10}
        // this.getdata(data,0)
      },
      /*通过交易所进行筛选*/
      select_exchange() {
        console.log(1)
      },
      /*通过手机号进行筛选*/
      search_phone() {
        if (this.search_phone == '') {

        } else {

        }

      },
      /*通过节点级别进行筛选*/
      select_level() {

      },
      /*表格分页*/
      currentPageChange(e) {

      },
      /*查看单条收益详细*/
      see_detailed(e) {
        this.historical_details = true
      },
      /*详细分页*/
      change_currentPage_1() {

      },
      /*是否绑定手机*/
      is_phone(e) {
        let istrue = ''
        if (e == 0) {
          istrue = '否'
        } else if (e == 1) {
          istrue = '是'
        } else {
          istrue = ''
        }
        return istrue
      }
    },
    created(){
      this.initialization_data()
    }
  }
</script>
<style>
  .wr_all .con_search_div input {
    outline: none;
    border: none;
  }
</style>
<style scoped>

  .block {
    padding-bottom: 60px;
  }

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
    display: flex;
    width: 20%;
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
    margin-left: 2%;
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
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
</style>
