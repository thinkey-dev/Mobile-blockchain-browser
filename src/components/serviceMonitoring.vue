<template>
  <div class="serve_all">
    <div class="con_table">
      <el-table
        :data="tableData"
        border
        style="width: 100%;margin-bottom: 30px;margin-top: 40px;min-height: 529px"
        :header-cell-style="this.tableHeaderColor"
      >
        <el-table-column
          label="时间"
          align="center">
          <template slot-scope="scope">
            <span>{{timestampToTime(scope.row.timestamp)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="数据库"
          align="center">
          <template slot-scope="scope">
            <span>{{is_success(scope.row.mongoStatus)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="缓存"
          align="center">
          <template slot-scope="scope">
            <span>{{is_success(scope.row.redisStatus)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="钱包服务"
          align="center">
          <template slot-scope="scope">
            <span>{{is_success(scope.row.walletStatus)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="rpc服务"
          align="center">
          <template slot-scope="scope">
            <span>{{is_success(scope.row.rpcStatus)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="错误信息"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.errorMsg}}</span>
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
  // import {getSystemHealthInfo} from '../../api/interface'

  export default {
    name: 'serviceMonitoring',
    data() {
      return {
        tableData: [],
        loading: false,
        currentPage: 1,
        pagesize: 10,
        totla: 0,
      }
    },
    methods: {
      /*page切换*/
      currentPageChange(e) {
        this.currentPage = e
        let data = {
          "page": this.currentPage,
          "pageSize": this.pagesize,
        }
        // getSystemHealthInfo(data).then(response => {
        //   if (response.data.dataList == []) {
        //     this.tableData = []
        //     this.totla =0
        //   } else {
        //     this.tableData = response.data.dataList
        //     this.totla = response.data.total
        //   }
        // })
      },
      /*初始化数据*/
      initialization_data() {
        this.currentPage=1
        let data = {
          "page": this.currentPage,
          "pageSize":this.pagesize,
        }
        // getSystemHealthInfo(data).then(response => {
        //   if (response.data.dataList == []) {
        //     this.tableData = []
        //     this.totla =0
        //   } else {
        //     this.tableData = response.data.dataList
        //     this.totla = response.data.total
        //   }
        // })
      },
      is_success(e){
        let a=''
        if(e==0){
          a='失败'
        }else {
          a='成功'
        }
        return a
      },
      updata_all(){
        let _this = this
        this.set_sta = setInterval(function () {
          let data = {
            "page": _this.currentPage,
            "pageSize": _this.pagesize,
          }
          // getSystemHealthInfo(data).then(response => {
          //   if (response.data.dataList == []) {
          //     _this.tableData = []
          //     _this.totla =0
          //   } else {
          //     _this.tableData = response.data.dataList
          //     _this.totla = response.data.total
          //   }
          // })
        }, 600000)
      }
    },
    mounted() {
    },
    created() {
      this.initialization_data()
      // this.updata_all()
    }
  };
</script>
<style>
</style>
<style scoped>
  .el-pagination {
    position: relative;
    float: right;
    margin-right: 3%;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .serve_all {
    width: 100%;
  }

  .con {
    padding: 30px 5%;
  }
</style>

