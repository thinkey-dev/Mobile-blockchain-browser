<template>
  <div class="wr_all">
    <div class="index_table_swith">
      <div class="table_item" @click="swich_tab(index)" v-for="(list, index) in table_items"
           :class="index== isactive ? item_active :'item_default'">{{list.name}}
      </div>

    </div>
    <div v-show="is_show[0].is_true">
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
      </div>
      <div class="con_table">
        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
          :header-cell-style="this.tableHeaderColor"
        >
          <el-table-column
            label="交易时间"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="节点地址"
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
            label="交易类别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="交易金额"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
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
    <div v-show="is_show[1].is_true">
      <div class="mingration_con">
        <div><span>结算时间：</span><span>2019-10-11 11:00:00</span></div>
      </div>
      <div class="con_table">
        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
          :header-cell-style="this.tableHeaderColor"
        >
          <el-table-column
            label=""
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="锁定总量"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="当期获得HNW数量"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="累计获得HNW数量"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
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

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isactive: 0,
        item_active: 'item_active',
        item_default: 'item_default',
        is_show: [
          {"is_true": true},
          {"is_true": false},
        ],
        table_items: [
          {"name": ' 交易记录 '},
          {"name": ' 挖矿数据 '},
        ],
        currentPage: 1,
        pagesize: 10,
        totla: 0,
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
        selectexchange: 0,
        options: [
          {'typeName': '请选择交易类别', 'typeId': 0},
          {'typeName': '锁定', 'typeId': 1},
          {'typeName': '解锁', 'typeId': 2},
        ],
      }
    }, methods: {
      /*table切换*/
      swich_tab(e) {
        if (e == 0) {

        } else {

        }
        this.isactive = e
        this.is_show.forEach((item, index, self) => {
          if (index == e) {
            item.is_true = true
          } else {
            item.is_true = false
          }
        })
      },
      /*通过交易类别进行筛选*/
      select_exchange() {
        console.log(1)
      },
      /*通过手机号进行筛选*/
      search_phone() {
        if (this.search_phone == '') {

        } else {

        }

      },
      currentPageChange(e) {

      },
      /*交易类别判断*/
      is_tr(e) {
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
    width: 16%;
    display: flex;
    justify-content: space-between;
  }

  .mingration_con {

    color: #800080;
  }
</style>
