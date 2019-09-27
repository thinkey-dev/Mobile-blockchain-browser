<template>
  <div class="it_con">
    <div class="sbh_header">
      <span @click="go_back()" class="el-icon-arrow-left sbh_header_back"></span>
      <span class="sbh_header_text">{{$t('title.transaction_details')}}</span>
    </div>
    <div style="position: fixed;top:10%;height:88%;overflow: auto;width: 90%;left: 5%;margin-bottom: 5rem">
      <div class="con_title">
        {{$t('table.own_chain')}}：
        <span class="to_tr color_choose" v-show="is_zh">{{chainid_change_zh(all_data.chainId)}}</span>
        <span class="to_tr color_choose" v-show="!is_zh">{{chainid_change_en(all_data.chainId)}}</span>
      </div>
      <!--<div class="con_title" style="font-size:2.5rem">-->
      <!--{{$t('title.transaction_details')}}-->
      <!--</div>-->
      <div class="it_all" style="position: relative;top: 2.5rem;padding-bottom: 5rem">
        <div class="it_all_con">
          <div class="it_all_con_left" style="">
            {{$t('table.transaction_hash')}}
          </div>
          <div class="it_all_con_right" style="border-bottom: 1px solid #DCDFE6;padding-bottom: 1rem;margin-bottom: 3rem">
            {{all_data.hash}}
          </div>
        </div>
        <div class="it_all_con" style="display: flex;justify-content: space-between">
          <div class="it_all_con_left">
            {{$t('table.state')}}
          </div>
          <div class="it_all_con_right">
            <span class="el-icon-success state_success" v-show="all_data.status==1"></span>
            <span class="state_success_text" v-show="all_data.status==1&&is_zh">成功</span>
            <span class="state_success_text" v-show="all_data.status==1&&!is_zh">success</span>
            <span class="el-icon-error state_error" v-show="!all_data.status==1"></span>
            <span class="state_error_text" v-show="!all_data.status==1&&is_zh">失败</span>
            <span class="state_error_text" v-show="!all_data.status==1&&!is_zh">failure</span>
          </div>
        </div>
        <div class="it_all_con">
          <div class="it_all_con_left">
            {{$t('table.ov_block')}}
          </div>
          <div class="it_all_con_right  " style="border-bottom: 1px solid #DCDFE6;padding-bottom: 1rem;margin-bottom: 3rem">
                  <span class="to_tr color_choose"
                        v-show="is_zh">{{chainid_change_zh(all_data.chainId)+' > '+all_data.height}}</span>
            <span class="to_tr color_choose"
                  v-show="!is_zh">{{chainid_change_en(all_data.chainId)+' > '+all_data.height}}</span>
          </div>
        </div>
        <div class="it_all_con" style="display: flex;justify-content: space-between">
          <div class="it_all_con_left">
            {{$t('table.timestamp')}}
          </div>
          <div class="it_all_con_right ">
            <!--{{all_data.theDateString}}-->
            {{timestampToTime(all_data.timestamp)}}

          </div>
        </div>
        <div class="it_all_con" style="display: flex;justify-content: space-between">
          <div class="it_all_con_left">
            {{$t('table.transaction_type')}}
          </div>
          <div class="it_all_con_right">
            <span v-show="is_zh">{{tr_change_zh(all_data.txType)}}</span>
            <span v-show="!is_zh">{{tr_change_en(all_data.txType)}}</span>
          </div>
        </div>
        <div class="it_all_con">
          <div class="it_all_con_left ">
            {{$t('table.issuer')}}
          </div>
          <div class="it_all_con_right  " style="border-bottom: 1px solid #DCDFE6;padding-bottom: 1rem;margin-bottom: 3rem" >
            {{all_data.from}}
          </div>
        </div>
        <div class="it_all_con">
          <div class="it_all_con_left ">
            {{$t('table.recipient')}}
          </div>
          <div class="it_all_con_right  " style="border-bottom: 1px solid #DCDFE6;padding-bottom: 1rem;margin-bottom: 3rem">
          <span s
                @click="to_address_details(all_data.chainId,all_data.to)">{{all_data.to}}</span>
          </div>
        </div>
        <div class="it_all_con" style="display: flex;justify-content: space-between">
          <div class="it_all_con_left">
            {{$t('table.transfer_amount')}}
          </div>
          <div class="it_all_con_right">
            {{scientificCounting(all_data.value)}} TUE
          </div>
        </div>
        <!--<div class="it_all_con">-->
        <!--<div class="it_all_con_left">-->
        <!--{{$t('table.transaction_fee')}}-->
        <!--</div>-->
        <!--<div class="it_all_con_right ">-->
        <!--{{scientificCounting(all_data.txCost)}} TUE-->
        <!--</div>-->
        <!--</div>-->
        <div class="it_all_con">
          <div class="it_all_con_left it_all_con_left_last">
            {{$t('title.input_data')}}
          </div>
          <div class="it_all_con_right it_all_con_right_last ">
            {{all_data.input}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    getBlockNewTxPage,

  } from '../api/interface'

  export default {
    name: "intrachainTransfer",
    data() {
      return {
        is_success: true,
        all_data: {
          'height':''
        },
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
        chain_list: {},
      }
    },
    methods: {
      /*返回上一级界面*/
      go_back() {
        this.$router.go(-1)
      },
      /* 获取当前页数据*/
      initialization_data() {
        // this.all_data=''
        let data = this.$store.getters.home_search_tr_1
        getBlockNewTxPage(data).then(response => {
          this.all_data = response.data.transactionsList.dataList[0]
        })

      },
      /*交易类型转换中文*/
      tr_change_zh(e) {
        let a = ''
        this.tr_zh.forEach((item, index) => {
          if (e == item.value) {
            a = item.name
          }
        })
        return a
      },
      /*交易类型转换英文*/
      tr_change_en(e) {
        let a = ''
        this.tr_en.forEach((item, index) => {
          if (e == item.value) {
            a = item.name
          }
        })
        return a
      },
      /*chainid_转换中文*/
      chainid_change_zh(e) {
        let a = ''
        this.chain_list.zh_chain_arr.forEach((item, index) => {
          if (e == item.value) {
            a = item.label
          }
        })
        return a
      },
      /*chainid_转换英文*/
      chainid_change_en(e) {
        let a = ''
        this.chain_list.en_chain_arr.forEach((item, index) => {
          if (e == item.value) {
            a = item.label
          }
        })
        return a
      },
      /*查看全部区块*/
      to_all_blocks(e, q) {
        let data = {
          "height": e.toString(),
          "chainId": q.toString(),
          "page": 1,
          "pagesize": 10,
          "hash": '',
        }
        this.$store.dispatch('app/setCrosschainBlock_1', data).then(() => {
          this.$router.push({path: '/slicechain_blockdetails'})
        })
      },
      /*点击转账人跳转到地址详情*/
      to_address_details(id, address) {
        let data = {"chainId": id, "address": address}
        this.$store.dispatch('app/setAddressDetails', data).then(() => {
          this.$router.push({path: '/address_details'})
        })
      },
    },
    created() {
      this.chain_list = this.getChainInfoStruct()
      if (this.$store.getters.language == 'zh') {
        this.is_zh = true
      } else {
        this.is_zh = false
      }
      this.initialization_data()
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
  }

  .sbh_header {
    display:flex;
    justify-content:center;
    align-items:center;
    text-align: center;
    font-size: 3rem;
    width: 100%;
    z-index: 99;
    top: 0;
    position: fixed;
    left: 0;
    height:8%;
    background-color: #FFFFFF;
    /*margin-bottom: 5rem;*/
  }

  .state_success {
    color: #6DC542;
    font-size: 25px;
    position: relative;
    top: 3px;
  }

  .state_error {
    color: #F56C6C;
    font-size: 25px;
    position: relative;
    top: 3px;
  }

  .state_success_text {
    color: #6DC542
    /*font-size: 25px;*/
  }

  .state_error_text {
    color: #F56C6C;
  }

  .show_color {
    /*color: #800080;*/
  }

  .show_color_choose {
    /*color: #800080;*/
    /*cursor: pointer;*/
  }

  .it_con {
    width: 100%;
    margin-bottom: 80px;
  }

  .con_title {
    font-size: 3.5rem;
    color: #4F4F50;
    padding: 2rem 0;
  }

  .it_all_con_right_last::-webkit-scrollbar { /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .it_all_con_right_last::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(218, 218, 218, 0.2);
    background: #b5b5b5;
  }

  .it_all_con_right_last::-webkit-scrollbar-track { /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background: #ffffff;
  }
.it_all_con_right_last{
  max-height: 200px;
  padding: 1rem;
  overflow: auto;
}
  .it_all_con {
    /*display: flex;*/
    padding: 4rem 5% 0rem 5%;
  }

  .it_all_con_left {
    padding-bottom: 2rem;
    font-size: 3.5rem;
    color: #7A7A7A;
    line-height: 3.5rem;
  }

  .it_all_con_right {
    font-size: 3rem;
    word-break: break-all;
    line-height: 3rem;
  }

  .it_all {
    width: 100%;
    border-bottom: 0px;
    background-color: #FFFFFF;
    padding: 4rem 0;
  }
</style>
