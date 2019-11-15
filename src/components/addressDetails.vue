<template>
  <div class="sbh_con">
    <div class="sbh_header">
      <span @click="go_back()" class="el-icon-arrow-left sbh_header_back"></span>
      <span class="sbh_header_text">{{$t('title.address_de')}}</span>
    </div>
    <div class="sbh_con_last">
      <!--<div class="con_title">-->
      <!--{{$t('title.blockchain_details')}}-->
      <!--</div>-->
      <div class="con_title" >
        {{$t('title.address_de')}}
      </div>
      <div class="con_title" style="margin-top: 3rem;border-bottom: 1px solid #C8C8C8;padding-bottom: 3rem">
        <span style="color: #82848a;word-break: break-all">{{slice_address1(get_data.address)}}</span>
      </div>
      <div class="con_title" style="margin-top: 3rem;font-size: 3rem">
        {{$t('table.transfer_amount')}} <span style="color: #82848a;float: right">{{scientificCounting(account_data.balances)}} <span>TUE</span></span>
      </div>
      <div class="con_title" style="margin-top: 3rem">
        {{$t('table.ac_any_other')}}
      </div>
      <div class="dd_all">
        <div v-for="item,index in account_data.details" class="con_title" style="margin-top:3rem;padding-bottom: 1rem;font-size: 3rem;border-bottom: 1px solid #C8C8C8;height: 4rem;line-height: 4rem">
          <span class="to_tr" style="color: #82848a;" v-show="is_zh">{{chainid_change_zh(item.chainId)}}</span>
          <span class="to_tr" style="color: #82848a;"
                v-show="!is_zh">{{chainid_change_en(item.chainId)}}</span>

          <span style="color: #82848a;float: right;font-size: 3rem">{{item.balance==''?0:scientificCounting(item.balance)}} <span>TUE</span></span>
        </div>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%;margin-bottom: 30px;margin-top: 30px;min-height: 529px;font-size: 2.3rem"
      :header-cell-style="this.tableHeaderColor"
    >
      <el-table-column
        :label="$t('table.transaction_hash')"
        align="center">
        <template slot-scope="scope">
          <span class="to_tr show_color_choose"
                @click="see_trfor_hash(scope.row.chainId,scope.row.txType,scope.row.hash)">{{slice_hash(scope.row.hash)}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.timestamp')"
        align="center"
      width="150px"
      >
        <template slot-scope="scope">
          <span>{{timestampToTime(scope.row.timestamp)}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.initiator')"
        align="center">
        <template slot-scope="scope">
          <!--<span :class="is_click(scope.row.txType,scope.row.from)"-->
                <!--@click="view_initiator(scope.row.chainId,scope.row.from,scope.row.txType)">{{slice_address(scope.row.from)}}</span>   -->
          <span>{{slice_address(scope.row.from)}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.receiver')"
        align="center">
        <template slot-scope="scope">
          <!--<span :class="is_click_1(scope.row.txType,scope.row.to)"-->
                <!--@click="view_recipient(scope.row.chainId,scope.row.to,scope.row.txType)">{{slice_address(scope.row.to)}}</span>     -->
          <span>{{slice_address(scope.row.to)}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.transfer_amount')"
        align="center">
        <template slot-scope="scope">
          <span class="to_tr ">{{scientificCounting(scope.row.value)}} TUE</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="currentPageChange"
      :current-page="currentPage"
      :page-size="pagesize"
      layout="prev, pager, next"
      :total="totla">
    </el-pagination>
  </div>
</template>

<script>
  import {
    getBlockTxByAddress,
    getAccountByAddress,
  } from '../api/interface'

  export default {
    name: "addressDetails",
    data() {
      return {
        currentPage: 1,
        pagesize: 10,
        totla: 0,
        tableData: [],
        chain_data: '',
        loading: false,
        chain_list: {},
        is_zh: true,
        tr_zh: [
          {'name': '合约发布', 'value': 1},
          {'name': '合约交易', 'value': 2},
          {'name': '链内交易', 'value': 3},
          {'name': '跨链转账取款', 'value': 4},
          {'name': '跨链转账存款', 'value': 5},
          {'name': '跨链转账撤销', 'value': 6},
        ],
        tr_en: [
          {'name': 'Contract release', 'value': 1},
          {'name': 'Contract transaction', 'value': 2},
          {'name': 'Intra-chain trading', 'value': 3},
          {'name': 'Cross-chain transfer withdrawal', 'value': 4},
          {'name': 'Cross-chain transfer deposit', 'value': 5},
          {'name': 'Cross-chain transfer cancellation', 'value': 6},
        ],
        get_data: '',
        account_data:''
      }
    },
    methods: {
      go_back(){
        this.$router.go(-1)
      },
      chainid_change_zh(e) {
        let a = ''
        this.chain_list.zh_chain_arr.forEach((item, index) => {
          if (e == item.value) {
            a = item.label
          }
        })
        return a
      },
      chainid_change_en(e) {
        let a = ''
        this.chain_list.en_chain_arr.forEach((item, index) => {
          if (e == item.value) {
            a = item.label
          }
        })
        return a
      },
      tr_change_zh(e) {
        let a = ''
        this.tr_zh.forEach((item, index) => {
          if (e == item.value) {
            a = item.name
          }
        })
        return a
      },
      tr_change_en(e) {
        let a = ''
        this.tr_en.forEach((item, index) => {
          if (e == item.value) {
            a = item.name
          }
        })
        return a
      },
      currentPageChange(e) {
        this.currentPage = e
        this.loading = true
        let data = {
          "chainId": this.get_data.chainId.toString(),
          "address": this.get_data.address,
          "page": this.currentPage,
          "pagesize": 10
        }
        getBlockTxByAddress(data).then(response => {
          this.loading = false
          this.tableData = response.data.transactionsList.dataList
          this.totla = response.data.transactionsList.total
        })
      },
      getAccountByAddress() {
        let data = {"chainId": this.get_data.chainId.toString(), "address": this.get_data.address}
        getAccountByAddress(data).then(response => {
          // response.data.details=response.data.details.concat(response.data.details)
          this.account_data = response.data
        })
      },
      getBlockTxByAddress() {
        this.loading = true
        let data = {
          "chainId": this.get_data.chainId.toString(),
          "address": this.get_data.address,
          "page": 1,
          "pagesize": 10
        }
        getBlockTxByAddress(data).then(response => {
          this.loading = false
          this.tableData = response.data.transactionsList.dataList
          this.totla = response.data.transactionsList.total
        })
      },
      view_initiator(e, q, w) {
        if (w == 1) {
        } else if (q == this.get_data.address) {
        } else {
          let data = {"chainId": e.toString(), "address": q}
          this.$store.dispatch('app/setAddressDetails', data).then(() => {
            this.$router.push({path: '/address_details'})
            this.get_data = this.$store.getters.address_details
          })
          getAccountByAddress(data).then(response => {
            this.account_data = response.data
          })
          this.loading = true
          let data1 = {
            "chainId": e.toString(),
            "address": q,
            "page": 1,
            "pagesize": 10
          }
          getBlockTxByAddress(data1).then(response => {
            this.loading = false
            this.tableData = response.data.transactionsList.dataList
            this.totla = response.data.transactionsList.total
          })
        }

      },
      view_recipient(e, q, w) {
        if (w == 1) {
        }
        else if (w == 2) {
          let data = {"chainId": e.toString(), "contract": q}
          this.$store.dispatch('app/setContractDetails', data).then(() => {
            this.$router.push({path: '/contract_details'})
          })
        }
        else if (w == 3) {
          if (q == this.get_data.address) {
          } else {
            let data = {"chainId": e.toString(), "address": q}
            this.$store.dispatch('app/setAddressDetails', data).then(() => {
              this.$router.push({path: '/address_details'})
              this.get_data = this.$store.getters.address_details
            })
            getAccountByAddress(data).then(response => {
              this.account_data = response.data
            })
            this.loading = true
            let data1 = {
              "chainId": e.toString(),
              "address": q,
              "page": 1,
              "pagesize": 10
            }
            getBlockTxByAddress(data1).then(response => {
              this.loading = false
              this.tableData = response.data.transactionsList.dataList
              this.totla = response.data.transactionsList.total
            })
          }
        }
        else if (w == 4 || w == 5 || w == 6) {
          let data = {"chainId": e.toString(), "address": q}
          this.$store.dispatch('app/setCrossChainContract', data).then(() => {
            this.$router.push({path: '/crosschain_contract'})
          })
        }
      },
      is_click(e, q) {
        let a = ''
        if (e == 3) {
          if (q == this.get_data.address) {
            a = 'to_tr'
          } else {
            a = 'to_tr show_color_choose'
          }
        } else {
          a = 'to_tr'
        }
        return a
      },
      is_click_1(e, q) {
        let a = ''
        if (e == 1) {
          a = 'to_tr'
        } else if (e == 4 || e == 5 || e == 6 || e == 2) {
          a = 'to_tr show_color_choose'
        } else if (e == 3) {
          if (q == this.get_data.address) {
            a = 'to_tr'
          } else {
            a = 'to_tr show_color_choose'
          }
        }
        return a
      },
      see_trfor_hash(id, type, hash) {
        let data = {
          'page': 1,
          'chainId': id.toString(),
          'hash': hash,
          'pagesize': 5,
        }
        if (type == 3) {
          this.$store.dispatch('app/setSearchTr1', data).then(() => {
            this.$router.push({path: '/intrachain_transfer'})
          })
        }
        else if (type == 2) {
          this.$store.dispatch('app/setSearchTr3', data).then(() => {
            this.$router.push({path: '/contract_transaction'})
          })
        }
        else if (type == 1) {
          this.$store.dispatch('app/setSearchTr4', data).then(() => {
            this.$router.push({path: '/contract_release'})
          })
        }
        else if (type == 4) {
          this.$store.dispatch('app/setSearchTr2', data).then(() => {
            this.$router.push({path: '/transfer_withdrawal'})
          })
        }
        else if (type == 5) {
          this.$store.dispatch('app/setSearchTr5', data).then(() => {
            this.$router.push({path: '/transfer_deposit'})
          })
        }
        else if (type == 6) {
          this.$store.dispatch('app/setSearchTr6', data).then(() => {
            this.$router.push({path: '/transfer_cancellation'})
          })
        }


      },
    },
    created() {
      this.get_data = this.$store.getters.address_details
      if (this.$store.getters.language == 'zh') {
        this.is_zh = true
      } else {
        this.is_zh = false
      }
      this.chain_list = this.getChainInfoStruct()
      this.getAccountByAddress()
      this.getBlockTxByAddress()
    },
    computed: {
      lang() {
        return this.$store.getters.language;
      }
    },
    watch: {
      lang(a, b) {
        if (a == 'zh') {
          this.is_zh = true
        } else {
          this.is_zh = false
        }
      }
    }
  }
</script>
<style>
  .message_logout {
    font-size:2rem;
  }
  .message_logout .el-message__content {
    font-size:2rem;
  }
  .el-pagination .btn-prev {
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    font-weight: normal;
    width: 6rem;
  }

  .el-pagination .btn-next {
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    font-weight: normal;
    width: 6rem;
  }
  .el-pagination .el-icon-arrow-left {
    font-size: 2.5rem!important;

  }
  .el-pagination .el-icon-arrow-right {
    font-size: 2.5rem!important;

  }
  .el-pagination .el-pager li {
    background-color: #800080;
    color: #FFFFFF;
    height: 6rem;
    font-size:2.5rem;
    line-height: 6rem;
    text-align: center;
    font-weight: normal;
    width: 6rem;
  }
</style>
<style scoped>
  .sbh_header_back {
    font-size: 7rem;
    left: 0;
    position: absolute;
    line-height: 12rem;
    padding-left: 3%;
    float: left;
  }

  .sbh_header_text {
    font-size: 4rem;
    position: relative;
    /*left: -5%;*/
    line-height: 12rem;
  }

  .sbh_header {
    text-align: center;
    font-size: 3rem;
    width: 110%;
    top: -30px;
    position: relative;
    left: -5%;
    height: 12rem;
    background-color: #FFFFFF;
    /*margin-bottom: 5rem;*/
  }

  .sbh_con_last {
    background-color: #FFFFFF;
    padding: 5%;
  }

  .el-pagination {
    position: relative;
    float: right;
    font-size: 2rem;
    margin-right: 3%;
    margin-top: 30px;
  }


  .show_color_choose {
    color: #800080;
    cursor: pointer;
  }

  .ad_amount_deail_right {
    width: 80%;
    text-align: center;
  }

  .ad_amount_deail_left {
    /*text-indent: 30px;*/
    width: 22.5%;
    margin-left: 2%;
    text-align: center;
    border: 1px solid #DCDFE6;
    margin-top: 20px;

  }

  .dd_bor {
    border-right: 1px solid #DCDFE6;
  }

  .ad_amount {
    width: 100%;

    /*border: 1px solid #DCDFE6;*/
    border-bottom: none;
    /*height: 200px;*/
  }

  .ad_amount_deail {
    width: 100%;
    line-height: 3;
    display: flex;
    flex-wrap: wrap;

    /*border-bottom: 1px solid #DCDFE6;*/
  }

  .ma_left {
    margin-left: 0;
  }

  .dd_all {
    padding-bottom: 2rem;
    /*border-bottom: 1px solid #DCDFE6;*/
  }

  .sbh_con {
    width: 100%;
    margin-bottom: 180px;
  }

  .con_title {
    font-size: 3rem;
    color: #C8C8C8;
  }
</style>
