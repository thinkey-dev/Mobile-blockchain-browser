<template>
  <div class="wr_all">
    <div class="index_table_swith">
      <div class="table_item" @click="swich_tab(index)" v-for="(list, index) in table_items"
           :class="index== isactive ? item_active :'item_default'">{{list.name}}
      </div>

    </div>

    <!--设置节点弹窗-->
    <el-dialog
      title="节点设置"
      :visible.sync="dialogVisible"
      width="30%"

    >
      <el-dialog
        title="节点设置"
        :visible.sync="dialogVisible_1"
        width="30%"
        append-to-body
      >
        <div>
          <span class="dia_left">节点地址：</span><span></span>
        </div>
        <br>
        <div>
          <span class="dia_left">当前级别：</span><span>白银节点</span>
        </div>
        <span class="dia_left">拟修改级别：</span>
        <el-select style="margin-top: 30px" v-model="selecte_node_value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialog_cancel_1()">取 消</el-button>
    <el-button type="primary" @click="dialog_sure_1()">确 定</el-button>
       </span>
      </el-dialog>


      <span>请输入需要改变的节点地址！</span><br>
      <el-input v-model="node_address" placeholder="请输入节点地址" style="margin-top: 30px;width: 75%"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialog_cancel()">取 消</el-button>
    <el-button type="primary" @click="dialog_sure()">确 定</el-button>
       </span>
    </el-dialog>
    <div v-show="is_show[0].is_true">
      <div class="con_search">
        <div class="con_search_div">
          <span class="el-icon-search us_search2_1_input_icon"></span>
          <div class="input_fath">
            <el-input v-model="searchphone_1"
                      placeholder="请输入用户手机号进行检索">
            </el-input>
          </div>
        </div>
        <el-button type="primary" class="con_search_submit"
                   @click="search_phone_1()">搜索
        </el-button>
      </div>
      <div class="con_table">
        <el-table
          :data="tableData_1"
          border
          style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
          :header-cell-style="this.tableHeaderColor"
        >
          <el-table-column
            label="申请时间"
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
            label="未锁定总量"
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
            label="当前级别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="申请级别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center">
            <template slot-scope="scope">
              <div class="part_1_operating">
                <span @click="application_approved()">通过申请</span>
                <span @click="reject_application()">驳回申请</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @current-change="currentPageChange_1"
          :current-page="currentPage_1"
          :page-size="pagesize_1"
          layout="total,prev, pager, next"
          :total="totla_1">
        </el-pagination>
      </div>
    </div>
    <div v-show="is_show[1].is_true">
      <div class="con_search">
        <div class="con_search_div">
          <span class="el-icon-search us_search2_1_input_icon"></span>
          <div class="input_fath">
            <el-input v-model="searchphone_2"
                      placeholder="请输入用户手机号进行检索">
            </el-input>
          </div>
        </div>
        <el-button type="primary" class="con_search_submit"
                   @click="search_phone_2()">搜索
        </el-button>
      </div>
      <div class="con_table">
        <el-table
          :data="tableData_2"
          border
          style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
          :header-cell-style="this.tableHeaderColor"
        >
          <el-table-column
            label="申请时间"
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
            label="申请前级别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="申请级别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="申请状态"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @current-change="currentPageChange_2"
          :current-page="currentPage_2"
          :page-size="pagesize_2"
          layout="total,prev, pager, next"
          :total="totla_2">
        </el-pagination>
      </div>
    </div>
    <div v-show="is_show[2].is_true">
      <div class="con_search">
        <div class="con_search_div">
          <span class="el-icon-search us_search2_1_input_icon"></span>
          <div class="input_fath">
            <el-input v-model="searchphone_3"
                      placeholder="请输入用户手机号进行检索">
            </el-input>
          </div>
        </div>
        <el-button type="primary" class="con_search_submit"
                   @click="search_phone_3()">搜索
        </el-button>
      </div>
      <div class="pass_all">
        <el-button type="primary" @click="pass_all()">批量通过</el-button>
      </div>
      <div class="con_table">
        <el-table
          :data="tableData_3"
          border
          style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
          @selection-change="handleSelectionChange"
          :header-cell-style="this.tableHeaderColor"
          ref="multipleTable"
        >
          <el-table-column
            type="selection"
            align="center"
            width="80">
          </el-table-column>
          <el-table-column
            label="申请时间"
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
            label="当前节点级别"
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
            label="申请解锁数量"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center">
            <template slot-scope="scope">
              <div class="see_dil">
                <span @click="pass_one()">通过申请</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @current-change="currentPageChange_3"
          :current-page="currentPage_3"
          :page-size="pagesize_3"
          layout="total,prev, pager, next"
          :total="totla_3">
        </el-pagination>
      </div>
    </div>
    <div v-show="is_show[3].is_true">
      <div class="con_search">
        <div class="con_search_div">
          <span class="el-icon-search us_search2_1_input_icon"></span>
          <div class="input_fath">
            <el-input v-model="searchphone_4"
                      placeholder="请输入用户手机号进行检索">
            </el-input>
          </div>
        </div>
        <el-button type="primary" class="con_search_submit"
                   @click="search_phone_4()">搜索
        </el-button>
      </div>
      <div class="con_table">
        <el-table
          :data="tableData_4"
          border
          style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
          :header-cell-style="this.tableHeaderColor"
        >
          <el-table-column
            label="申请时间"
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
            label="申请时节点级别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="申请时锁定总量"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="申请解锁数量"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="解锁通过时间"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="审批后节点级别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="解锁前后级别是否变化"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @current-change="currentPageChange_4"
          :current-page="currentPage_4"
          :page-size="pagesize_4"
          layout="total,prev, pager, next"
          :total="totla_4">
        </el-pagination>
      </div>
    </div>
    <div v-show="is_show[4].is_true">
      <div>
        <el-button type="primary" @click="node_settings()">设置节点</el-button>
      </div>
      <div class="con_table">
        <el-table
          :data="tableData_5"
          border
          style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
          :header-cell-style="this.tableHeaderColor"
        >
          <el-table-column
            label="干预时间"
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
            label="干预前级别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="干预后级别"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @current-change="currentPageChange_5"
          :current-page="currentPage_5"
          :page-size="pagesize_5"
          layout="total,prev, pager, next"
          :total="totla_5">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nodeUpgrade",
    data() {
      return {
        selecte_node_value:0,
        node_address:'',
        dialogVisible:false,
        dialogVisible_1:false,
        isactive: 0,
        item_active: 'item_active',
        item_default: 'item_default',
        is_show: [
          {"is_true": true},
          {"is_true": false},
          {"is_true": false},
          {"is_true": false},
          {"is_true": false},
        ],
        table_items: [
          {"name": ' 升级审批 '},
          {"name": ' 升级历史 '},
          {"name": ' 解锁审批 '},
          {"name": ' 解锁历史 '},
          {"name": ' 人工预置 '},
        ],
        options:[
          {
            value: 0,
            label: '普通矿工'
          }, {
            value: 1,
            label: '白银节点'
          }, {
            value: 2,
            label: '黄金节点'
          }, {
            value: 3,
            label: '超级节点'
          }, {
            value: 4,
            label: '源节点'
          }
        ],
        searchphone_1: '',
        searchphone_2: '',
        searchphone_3: '',
        searchphone_4: '',
        tableData_1: [
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},

        ],
        tableData_2: [
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},

        ],
        tableData_3: [
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},

        ],
        tableData_4: [
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},

        ],
        tableData_5: [
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'false'},
          {"address": '566', "isshow": 'true'},
          {"address": '566', "isshow": 'true'},

        ],
        currentPage_1: 1,
        pagesize_1: 10,
        totla_1: 0,
        currentPage_2: 1,
        pagesize_2: 10,
        totla_2: 0,
        currentPage_3: 1,
        pagesize_3: 10,
        totla_3: 0,
        currentPage_4: 1,
        pagesize_4: 10,
        totla_4: 0,
        currentPage_5: 1,
        pagesize_5: 10,
        totla_5: 0,
        multipleSelection: [],
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
      /*part_1 通过手机号进行筛选*/
      search_phone_1() {
        if (this.search_phone == '') {

        } else {

        }

      },
      /*part_1 分页查询*/
      currentPageChange_1(e) {

      },
      /*part_1 同意申请*/
      application_approved(){

      },
      /*part_1 驳回申请*/
      reject_application(){

      },

      /*-------------------------*/
      /*part_2 通过手机号进行筛选*/
      search_phone_2() {
        if (this.search_phone == '') {

        } else {

        }

      },
      /*part_2 分页查询*/
      currentPageChange_2(e) {

      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },


      /*-------------------------*/
      /*part_3 通过手机号进行筛选*/
      search_phone_3() {
        if (this.search_phone == '') {

        } else {

        }

      },
      /*part_3 分页查询*/
      currentPageChange_3(e) {

      },
      /*part_3 批量通过*/
      pass_all() {

      },
      /*part_3 单个通过*/
      pass_one() {

      },


      /*-------------------------*/
      /*part_4 通过手机号进行筛选*/
      search_phone_4() {
        if (this.search_phone_4 == '') {

        } else {

        }

      },
      /*part_4 分页查询*/
      currentPageChange_4(e) {

      },


      /*-------------------------*/
      /*part_5 通过手机号进行筛选*/
      search_phone_5() {
        if (this.search_phone_5 == '') {

        } else {

        }

      },
      /*part_5 分页查询*/
      currentPageChange_5(e) {

      },
      /*part_5 打开节点设置弹框*/
      node_settings(){
        this.dialogVisible=true
      },
      /*part_5 一级弹窗确认地址*/
      dialog_sure(){
        this.dialogVisible_1=true
        if(this.node_address==''){
          this.$message({
            message: '请输入正确节点地址！',
            type: 'error'
          });
        }else {

        }
      },
      /*part_5 一级弹窗取消*/
      dialog_cancel(){
        this.node_address==''
        this.dialogVisible=false
      },
      /*part_5 一级弹窗确认地址*/
      dialog_sure_1(){
        // this.selecte_node_value
      },
      /*part_5 二级弹窗取消*/
      dialog_cancel_1(){
        this.dialogVisible_1=false
        this.selecte_node_value=0
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
  .dia_left{
    display: inline-block;
    width: 100px;
    text-align: right;
    margin-right: 20px;
  }
  .pass_all {
    float: right;
    position: relative;
    top: -40px
  }

  .see_dil span {
    cursor: pointer;
    color: #800080;
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
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .part_1_operating {
    display: flex;
    justify-content: space-around;
    color: #800080;
    cursor: pointer;
  }
</style>
