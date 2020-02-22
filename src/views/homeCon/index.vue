<template>
  <div class="hc_con">
    <div class="con_title">
      {{$t("title.blockchain_details")}}
    </div>
    <div class="hc_search">
      <!--<div class="hc_search1_1">-->
      <!--<div class="hc_search1_1_top">-->
      <!--<div class="hc_search1_1_top_title"> {{$t("title.block_details_query")}}</div>-->
      <!--</div>-->
      <!--<div class="hc_search2_1">-->
      <!--<div class="hc_search2_1_input">-->
      <!--&lt;!&ndash;<span class="el-icon-search hc_search2_1_input_icon"></span>&ndash;&gt;-->
      <!--<el-input @input="handinput()" v-model="search_height"-->
      <!--:placeholder="$t('placeholder.placeholder_1')"></el-input>-->
      <!--</div>-->
      <!--<el-button type="primary" class="hc_search_submit" @click="go_search_height()">{{$t("placeholder.search")}}-->
      <!--</el-button>-->
      <!--</div>-->
      <!--</div>-->
      <div class="hc_search1_2">
        <div class="hc_search1_1_top">
          <div class="hc_search1_1_top_title">{{$t("title.transaction_details_inquiry")}}</div>
          <div>
          </div>
        </div>
        <div class="hc_search2_1">
          <div class="hc_search2_1_input">
            <!--<span class="el-icon-search hc_search2_1_input_icon"></span>-->
            <el-input size="medium" v-model="search_transaction"
                      :placeholder="$t('placeholder.placeholder_2')"></el-input>
          </div>
          <span type="primary" class="hc_search_submit" @click="go_search_tr()">{{$t("placeholder.search")}}
          </span>
        </div>
      </div>
    </div>
    <!--<div class="hc_tishi">-->
    <!--{{$t("prompt.prompt_1")}}-->
    <!--</div>-->
    <div class="chain_part">
      <div class="chain_part_item">
        <div class="chain_part_padding">
          <div class="chain_part_item_title">
            {{$t("title.main_chain")}}
          </div>
          <div class="chain_part_item_img">
            <div class="chain_part_item_text">
              {{chain_info.mainChainCount}}
            </div>
          </div>
        </div>
      </div>
      <div class="chain_part_item">
        <div class="chain_part_padding">
          <div class="chain_part_item_title">
            {{$t("title.task_chain")}}
          </div>
          <div class="chain_part_item_img_1">
            <div class="chain_part_item_text">
              {{chain_info.childrensCount}}
            </div>
          </div>
        </div>
      </div>
      <div class="chain_part_item">
        <div class="chain_part_padding">
          <div class="chain_part_item_title">
            {{$t("title.trading_chain")}}
          </div>
          <div class="chain_part_item_img_2">
            <div class="chain_part_item_text">
              {{chain_info.childrensSon}}
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="chain_part">
      <div class="chain_part_item" style="width: 48.2%;">
        <div class="chain_part_padding">
          <div class="chain_part_item_title">
            {{$t("title.data_node")}}
          </div>
          <div class="chain_part_item_img_3" style="background-size: 48%">
            <div class="chain_part_item_text">
              {{chain_info.dataNodeCount}}
            </div>
          </div>
        </div>
      </div>
      <div class="chain_part_item" style="width: 48.2%;">
        <div class="chain_part_padding">
          <div class="chain_part_item_title">
            {{$t("title.consensus_node")}}
          </div>
          <div class="chain_part_item_img_4" style="background-size: 48%">
            <div class="chain_part_item_text">
              {{chain_info.commonCount}}
            </div>
          </div>
        </div>
      </div>
      <!--<div class="chain_part_item">-->
        <!--<div class="block_related_item_padding">-->
          <!--<div class="chain_part_item_title">-->
            <!--{{$t("title.network_market_value")}}-->
          <!--</div>-->
          <!--<div class="chain_part_item_img_6">-->
            <!--<div class="chain_part_item_text_1">-->
              <!--$ {{NewTickers_2}} {{$t("title.billion")}}-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <!--<div class="block_related">-->
      <!--<div class="block_related_item_3">-->
        <!--<div class="block_related_item_padding">-->
          <!--<div class="chain_part_item_title">-->
            <!--TPS-->
          <!--</div>-->
          <!--<div id="echats_1" style="width:120%;height:120%;position: relative;-->
    <!--left: -10%;-->
    <!--top: -20%;">-->

          <!--</div>-->
        <!--</div>-->

      <!--</div>-->
      <!--<div class="block_related_item_2">-->
        <!--<div class="block_related_item_padding">-->
          <!--<div class="chain_part_item_title">-->

            <!--{{$t("title.total_online_transaction_volume")}}-->
          <!--</div>-->
          <!--<div id="echats_2" style="width:100%;height:90%">-->

          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <div class="go_pc" @click="go_link()">
        查看更多请到PC端 <span class="el-icon-right"></span>
    </div>
    <!--<div class="hc_overview hc_overview_1">-->
      <!--<div>-->
        <!--<span style="font-size:2.5rem;line-height: 8rem" class="color_choose"-->
              <!--@click='to_main_chain_interface()'>{{$t("title.main_chain")}}</span>-->
      <!--</div>-->
      <!--<div>-->
        <!--<span class="hc_overview_he">{{$t("title.block_height")}}</span><br/>-->
        <!--<br/>-->
        <!--<span class="color_choose" style="font-size: 1.8rem"-->
              <!--@click="click_main_height(chain_data.currentheight)">{{chain_data.currentheight||0}}</span>-->
      <!--</div>-->
      <!--&lt;!&ndash;<div style="border-right:1px solid #DCDFE6 ">&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="hc_overview_he">{{$t("title.current_committee_member")}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;<br/>&ndash;&gt;-->
      <!--&lt;!&ndash;<br/>&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="color_choose" @click="to_main_chaincommittee(0,0)">{{chain_data.currentcomm}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--<div style="border-right:1px solid #DCDFE6 ">-->
        <!--<span-->
          <!--class="hc_overview_he">{{$t("title.number_of_sub_chains")}}</span>-->
        <!--<br/>-->
        <!--<br/>-->
        <!--<span class="" style="font-size: 1.8rem">{{chain_data.ChildrenCount||0}}</span>-->
      <!--</div>-->
      <!--&lt;!&ndash;<div>&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="hc_overview_he">{{$t("title.miner")}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;<br/>&ndash;&gt;-->
      <!--&lt;!&ndash;<br/>&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="color_choose">{{slice_hash(chain_data.miner)||''}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--</div>-->
    <!--<div class="con_title ">-->
      <!--{{$t("title.split_subchain")}}-->
    <!--</div>-->
    <!--&lt;!&ndash;已分片子链列表&ndash;&gt;-->
    <!--<el-table-->
      <!--:data="chainStatA"-->
      <!--border-->
      <!--style="width: 100%;margin-bottom: 30px;font-size: 1.8rem"-->
      <!--:header-cell-style="this.tableHeaderColor"-->
    <!--&gt;-->
      <!--<el-table-column-->
        <!--:label="$t('table.subchain_id')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span class="to_tr color_choose" v-show="is_zh" @click="to_subchain_interface(scope.row.chainId)">{{chainid_change_zh(scope.row.chainId)}}</span>-->
          <!--<span class="to_tr color_choose" v-show="!is_zh" @click="to_subchain_interface(scope.row.chainId)">{{chainid_change_en(scope.row.chainId)}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--:label="$t('table.block_height')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span class="to_tr color_choose" @click="click_slice_height(0,scope.row.chainId,scope.row.currentheight)">{{scope.row.currentheight}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;:label="$t('table.current_committee_member')"&ndash;&gt;-->
      <!--&lt;!&ndash;align="center">&ndash;&gt;-->
      <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="to_tr color_choose" @click="to_main_chaincommittee(1,scope.row.chainId)">{{scope.row.currentcomm}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</template>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
      <!--<el-table-column-->
        <!--:label="$t('table.number_of_fragments')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span class="to_tr ">{{scope.row.ChildrenCount}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--:label="$t('table.total_share_of_its_segmented_chain')"-->
        <!--align="center"-->
        <!--width="350"-->
      <!--&gt;-->
        <!--<template slot-scope="scope">-->
          <!--<span class="to_tr ">{{scope.row.ChildrenTxcount}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;:label="$t('table.miner')"&ndash;&gt;-->
      <!--&lt;!&ndash;align="center">&ndash;&gt;-->
      <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
      <!--&lt;!&ndash;<span>{{slice_hash(scope.row.miner)}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</template>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
    <!--</el-table>-->
    <!--<div class="con_title ">-->
      <!--{{$t("title.unfragmented_subchain")}}-->
    <!--</div>-->
    <!--&lt;!&ndash;未分片子链列表&ndash;&gt;-->
    <!--<el-table-->
      <!--:data="chainStatB"-->
      <!--border-->
      <!--style="width: 100%;margin-bottom: 30px;font-size: 1.8rem"-->
      <!--:header-cell-style="this.tableHeaderColor"-->
    <!--&gt;-->
      <!--<el-table-column-->
        <!--:label="$t('table.subchain_id')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span class="to_tr color_choose" v-show="is_zh" @click="to_unfragmented_interface(scope.row.chainId)">{{chainid_change_zh(scope.row.chainId)}}</span>-->
          <!--<span class="to_tr color_choose" v-show="!is_zh" @click="to_unfragmented_interface(scope.row.chainId)">{{chainid_change_en(scope.row.chainId)}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--:label="$t('table.block_height')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span class="to_tr color_choose" @click="click_slice_height(1,scope.row.chainId,scope.row.currentheight)">{{scope.row.currentheight}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;:label="$t('table.current_committee_member')"&ndash;&gt;-->
      <!--&lt;!&ndash;align="center">&ndash;&gt;-->
      <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="to_tr color_choose" @click="to_Unfragmented_chaincommittee(scope.row.chainId)">{{scope.row.currentcomm}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</template>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
      <!--<el-table-column-->
        <!--:label="$t('table.trading_volume')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span class="to_tr ">{{scope.row.txcount}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;:label="$t('table.miner')"&ndash;&gt;-->
      <!--&lt;!&ndash;align="center">&ndash;&gt;-->
      <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
      <!--&lt;!&ndash;<span>{{slice_hash(scope.row.miner)}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</template>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
    <!--</el-table>-->
    <!--<div class="con_title ">-->
      <!--{{$t("title.trading_information")}}-->
    <!--</div>-->
    <!--&lt;!&ndash;交易信息列表&ndash;&gt;-->
    <!--<el-table-->
      <!--:data="tr_data"-->
      <!--border-->
      <!--style="width: 100%;margin-bottom: 30px;min-height: 529px;font-size: 1.8rem"-->
      <!--:header-cell-style="this.tableHeaderColor"-->
    <!--&gt;-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;:label="$t('table.transaction_hash')"&ndash;&gt;-->
      <!--&lt;!&ndash;align="center">&ndash;&gt;-->
      <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="to_tr color_choose"&ndash;&gt;-->
      <!--&lt;!&ndash;@click="see_transaction_information(scope.row.chainId,scope.row.txType,scope.row.hash)">{{slice_hash(scope.row.hash)}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</template>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;:label="$t('table.own_chain')"&ndash;&gt;-->
      <!--&lt;!&ndash;align="center">&ndash;&gt;-->
      <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="to_tr color_choose" v-show="is_zh" @click="to_unfragmented_interface(scope.row.chainId)">{{chainid_change_zh(scope.row.chainId)}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;<span class="to_tr color_choose" v-show="!is_zh" @click="to_unfragmented_interface(scope.row.chainId)">{{chainid_change_en(scope.row.chainId)}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</template>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
      <!--<el-table-column-->
        <!--:label="$t('table.timestamp')"-->
        <!--align="center"-->
        <!--width="200px"-->
      <!--&gt;-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{timestampToTime(scope.row.timestamp)}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--:label="$t('table.transaction_type')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span v-show="is_zh">{{tr_change_zh(scope.row.txType)}}</span>-->
          <!--<span v-show="!is_zh">{{tr_change_en(scope.row.txType)}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--:label="$t('table.initiator')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span class="to_tr color_choose"-->
                <!--@click="to_address_interface(0,scope.row.chainId,scope.row.from,scope.row.txType)">{{slice_hash(scope.row.from)}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--:label="$t('table.receiver')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span :class="scope.row.txType==1?'to_tr':'to_tr color_choose'"-->
                <!--@click="to_address_interface(1,scope.row.chainId,scope.row.to,scope.row.txType)">{{slice_hash(scope.row.to)}}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--:label="$t('table.transfer_amount')"-->
        <!--align="center">-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{scientificCounting(scope.row.value)}} TKM</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;:label="$t('table.transaction_fee')"&ndash;&gt;-->
      <!--&lt;!&ndash;align="center">&ndash;&gt;-->
      <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
      <!--&lt;!&ndash;<span>{{scientificCounting(scope.row.txCost)}}</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</template>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
    <!--</el-table>-->
    <!--<el-button style="width: 100%;margin-bottom: 50px;margin-top: 20px;font-size: 2.5rem" type="primary"-->
               <!--@click="to_transaction_information()">-->
      <!--{{$t("title.see_more_deals")}}-->
    <!--</el-button>-->
  </div>

</template>
<script>
  import {
    getMainPageInfo,
    getMainChainStat,
    getChainStatByType,
    getBlockNewTxPage,
    getBlockDataByPage,
    getMainPageChainInfo,
    getNewTickers,
    getMainPageTxByDay
  } from '../../api/interface'
  import echarts from 'echarts'

  export default {
    name: "idnex",
    data() {
      return {
        search_height: '',
        search_transaction: '',
        marke: '',
        chain_data: '',
        chainStatA: [],
        chainStatB: [],
        tr_data: [],
        loading: false,
        loading1: false,
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
        set_sta: '',
        chain_info: '',
        chain_market_info: [],
        NewTickers_1: 0,
        NewTickers_2: 0
      }
    },
    methods: {
      go_link(){
        window.location.href='https://browser.thinkey.org/#/home'
      },
      getMainPageInfo() {
        getMainPageInfo().then(response => {
          this.marke = response.data
          // this.drawing()
        })
      },
      getTickers() {
        getNewTickers().then(response => {
          this.NewTickers_1 = response.data.priceInfo
        })
      },
      getMainChainStat() {
        let data = {"chainId": '0'}
        getMainChainStat(data).then(response => {
          this.chain_data = response.data
          this.chain_data.currentcomm = this.chain_data.currentcomm.length

        })
      },
      getChainStatByType() {
        this.loading = true
        getChainStatByType().then(response => {
          this.chainStatA = response.data.chainStatA
          this.chainStatB = response.data.chainStatB
          this.chainStatA.forEach((item, index, self) => {
            self[index].currentcomm = self[index].currentcomm.length
          })
          this.chainStatB.forEach((item, index, self) => {
            self[index].currentcomm = self[index].currentcomm.length
          })
          this.loading = false
        })
      },
      getBlockNewTxPage() {
        this.loading1 = true
        let data = {
          'page': 1,
          'chainId': '',
          'hash': '',
          'pagesize': 10,
        }
        getBlockNewTxPage(data).then(response => {
          this.tr_data = response.data.transactionsList.dataList
          this.loading1 = false
        })
      },
      go_search_height() {
        if (this.search_height == '') {
          if (this.$store.getters.language == 'en') {
            this.$message.error('The query block height cannot be empty!');
          } else {
            this.$message.error('查询区块高度不能为空！');
          }

        } else {
          let data = {
            "height": this.search_height,
            "chainId": '',
            "page": 1,
            "pagesize": 10,
            "hash": '',
          }
          getBlockDataByPage(data).then(response => {
            if (response.data.dataList.length == 0) {
              if (this.$store.getters.language == 'en') {
                this.$message.error('The current block height query result is empty, please check and enter again!');
              } else {
                this.$message.error('当前区块高度查询结果为空，请检查后再次输入！');
              }

            } else {
              this.$store.dispatch('app/setSearchHeight', data).then(() => {
                this.$router.push({path: '/search_blockheight'})
              })
            }
          })
        }

      },
      go_search_tr() {
        if (this.search_transaction == '') {
          if (this.$store.getters.language == 'en') {
            this.$message.error('Query transaction details transaction hash/account address cannot be empty!');
          } else {
            this.$message.error('查询交易详情账户详情不能为空！');
          }

        } else {

          if (this.search_transaction.length == 35) {
            let adress16=this.to_16_decimal(this.search_transaction)
            let data = {"chainId": '', "address":adress16}
            this.$store.dispatch('app/setAddressDetails', data).then(() => {
              this.$router.push({path: '/address_details'})
            })
          } else {
            let data = {
              'page': 1,
              'chainId': '',
              'hash': this.search_transaction,
              'pagesize': 5,
            }
            getBlockNewTxPage(data).then(response => {
              if (response.data.transactionsList.dataList.length == 0) {
                if (this.$store.getters.language == 'en') {
                  this.$message.error('The current transaction details transaction hash/account address query result is empty, please check and enter again!');
                } else {
                  this.$message.error('当前交易详情账户详情查询结果为空，请检查后再次输入！');
                }
              } else {
                if (response.data.transactionsList.dataList[0].txType == 3) {
                  this.$store.dispatch('app/setSearchTr1', data).then(() => {
                    this.$router.push({path: '/intrachain_transfer'})
                  })
                }
                else if (response.data.transactionsList.dataList[0].txType == 2) {
                  this.$store.dispatch('app/setSearchTr3', data).then(() => {
                    this.$router.push({path: '/contract_transaction'})
                  })
                }
                else if (response.data.transactionsList.dataList[0].txType == 1) {
                  this.$store.dispatch('app/setSearchTr4', data).then(() => {
                    this.$router.push({path: '/contract_release'})
                  })
                }
                else if (response.data.transactionsList.dataList[0].txType == 4) {
                  this.$store.dispatch('app/setSearchTr2', data).then(() => {
                    this.$router.push({path: '/transfer_withdrawal'})
                  })
                }
                else if (response.data.transactionsList.dataList[0].txType == 5) {
                  this.$store.dispatch('app/setSearchTr5', data).then(() => {
                    this.$router.push({path: '/transfer_deposit'})
                  })
                }
                else if (response.data.transactionsList.dataList[0].txType == 6) {
                  this.$store.dispatch('app/setSearchTr6', data).then(() => {
                    this.$router.push({path: '/transfer_cancellation'})
                  })
                }
              }
            })
          }

        }
      },
      handinput() {
        if (/[^\d]/.test(this.search_height)) {
          this.search_height = this.search_height.replace(/[^\d]/g, '');
        }
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
      to_main_chain_interface() {
        this.$router.push({path: '/main_chain'})
      },
      click_main_height(e) {
        let data = {
          "height": e.toString(),
          "chainId": '0',
          "page": 1,
          "pagesize": 10,
          "hash": '',
        }
        this.$store.dispatch('app/setCrosschainBlock', data).then(() => {
          this.$router.push({path: '/mainchain_blockdetails'})
        })
      },
      click_slice_height(e, q, w) {
        if (e == 0) {
          let data = {
            "height": w.toString(),
            "chainId": q.toString(),
            "pagesize": 10,
            "hash": '',
          }
          this.$store.dispatch('app/setCrosschainBlock', data).then(() => {
            this.$router.push({path: '/mainchain_blockdetails'})
          })
        } else {
          let data = {
            "height": w.toString(),
            "chainId": q.toString(),
            "pagesize": 10,
            "hash": '',
          }
          this.$store.dispatch('app/setCrosschainBlock_1', data).then(() => {
            this.$router.push({path: '/slicechain_blockdetails'})
          })

        }

      },
      to_main_chaincommittee(e, q) {
        if (e == 0) {
          let data = {"chainId": '0', "epoch": ''}
          this.$store.dispatch('app/setMainChaincommittee', data).then(() => {
            this.$router.push({path: '/mainchain_committee'})
          })
        } else {
          let data = {"chainId": q.toString(), "epoch": ''}
          this.$store.dispatch('app/setMainChaincommittee', data).then(() => {
            this.$router.push({path: '/mainchain_committee'})
          })
        }

      },
      to_Unfragmented_chaincommittee(e) {
        let data = {"chainId": e.toString(), "epoch": ''}
        this.$store.dispatch('app/setUnmainChaincommittee', data).then(() => {
          this.$router.push({path: '/fragmentchain_committee'})
        })
      },
      to_subchain_interface(e) {
        let data = {"chainId": e.toString()}
        this.$store.dispatch('app/setFragmentedDetails', data).then(() => {
          this.$router.push({path: '/split_subchain'})
        })
      },
      to_unfragmented_interface(e) {
        let data = {"chainId": e.toString()}
        this.$store.dispatch('app/setUnfragmentedDetails', data).then(() => {
          this.$router.push({path: '/unfragmented_subchain'})
        })
      },
      to_address_interface(peo, id, address, type) {
        if (peo == 0) {
          let data = {"chainId": id.toString(), "address": address}
          this.$store.dispatch('app/setAddressDetails', data).then(() => {
            this.$router.push({path: '/address_details'})
          })
        } else {
          if (type == 1) {

          } else if (type == 2) {
            let data = {"chainId": id.toString(), "address": address}
            this.$store.dispatch('app/setContractDetails', data).then(() => {
              this.$router.push({path: '/contract_details'})
            })
          } else if (type == 3) {
            let data = {"chainId": id.toString(), "address": address}
            this.$store.dispatch('app/setAddressDetails', data).then(() => {
              this.$router.push({path: '/address_details'})
            })
          } else if (type == 4 || type == 5 || type == 6) {
            let data = {"chainId": id.toString(), "address": address}
            this.$store.dispatch('app/setCrossChainContract', data).then(() => {
              this.$router.push({path: '/crosschain_contract'})
            })
          }
        }

      },
      to_transaction_information() {
        let data = {
          "chainId": "",
          "page": 1,
          "hash": "",
          "pagesize": 10
        }
        this.$store.dispatch('app/setMainChaintotr', data).then(() => {
          this.$router.push({path: '/trading_information'})
        })
      },
      see_transaction_information(id, type, hash) {
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
      /*定时刷新数据,10s一次*/
      // timed_refresh() {
      //   let _this = this
      //   this.set_sta = setInterval(function () {
      //     // _this.getMainPageInfo()
      //     // _this.getMainChainStat()
      //     // _this.getChainStatByType()
      //     // // _this.getBlockNewTxPage()
      //     // _this.getTickers()
      //   }, 10000)
      // },
      chain_related_quantity() {
        getMainPageChainInfo().then(response => {
          this.chain_info = response.data
        })
      },
      chain_market_related() {
        getMainPageTxByDay().then(response => {
          this.chain_market_info[0] = []
          this.chain_market_info[1] = []

          response.data.forEach((value, index, arr) => {
            this.chain_market_info[0].push(value.day)
            this.chain_market_info[1].push(value.txCount)
          })
          // this.drawing_1()
        })
      },
      /*绘图*/
      // drawing() {
      //   let myChart = echarts.init(document.getElementById('echats_1'));
      //   let option = {
      //     series: [
      //       {
      //         min: 0,
      //         max: 10000,
      //         type: 'gauge',
      //         data: [{value: this.marke.tps,}],
      //         axisLine: {
      //           show: true,
      //           lineStyle: {
      //             color: [
      //               [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      //                 {
      //                   offset: 0.1,
      //                   color: "#BE55FF"
      //                 },
      //                 {
      //                   offset: 0.2,
      //                   color: "#964EFF"
      //                 },
      //                 {
      //                   offset: 0.5,
      //                   color: "#613BFF"
      //                 }
      //               ])
      //               ]
      //             ]
      //
      //           }
      //         },
      //         detail: {
      //           offsetCenter: [0, '60%'],
      //           textStyle: {
      //             fontWeight: 'bolder',
      //             fontSize: 15
      //           }
      //         },
      //       },
      //
      //     ]
      //   };
      //   myChart.setOption(option);
      // },
      // drawing_1() {
      //   let myChart2 = echarts.init(document.getElementById('echats_2'));
      //   let option2 = {
      //     xAxis: {
      //       type: 'category',
      //       boundaryGap: false,
      //       data: this.chain_market_info[0]
      //     },
      //     yAxis: {
      //       type: 'value',
      //
      //     },
      //     series: [
      //       {
      //         type: 'line',
      //         smooth: true,
      //         symbol: 'none',
      //         sampling: 'average',
      //         itemStyle: {
      //           color: '#AB62F5'
      //         },
      //         areaStyle: {
      //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //             offset: 0,
      //             color: '#B4A3E6'
      //           }, {
      //             offset: 1,
      //             color: '#EAD5F3'
      //           }])
      //         },
      //         data: this.chain_market_info[1]
      //       }
      //     ]
      //   };
      //   myChart2.setOption(option2);
      // }
    }
    ,
    created() {
      if (this.$store.getters.language == 'zh') {
        this.is_zh = true
      } else {
        this.is_zh = false
      }
      this.chain_list = this.getChainInfoStruct()
      // this.getMainPageInfo()
      this.getMainChainStat()
      this.getChainStatByType()
      // this.getBlockNewTxPage()
      // this.timed_refresh()
      this.chain_related_quantity()
      // this.chain_market_related()
      // this.getTickers()

    },
    mounted() {
      window.onresize = () => {
        let myChart = echarts.init(document.getElementById('echats_1'));
        let myChart1 = echarts.init(document.getElementById('echats_2'));
        myChart.resize();
        myChart1.resize();
      };
    }
    ,
    computed: {
      lang() {
        if (this.$store.getters.language == 'zh') {
          this.NewTickers_2 = this.NewTickers_1
        } else {

          this.NewTickers_2 = (Number(this.NewTickers_1) / 10).toFixed(3)
        }
        return this.NewTickers_2;
      },
      lang_1() {
        return this.$store.getters.language;
      }
    }
    ,
    watch: {
      lang_1(a, b) {
        if (a == 'zh') {
          this.is_zh = true
        } else {
          this.is_zh = false
        }
      },
      lang(a, b) {

      }
    },
    beforeDestroy() {
      let _this = this
      clearInterval(_this.set_sta)
    }
  }
</script>
<style>
  .hc_con .hc_search2_1 .hc_search2_1_input input {
    /*text-indent: 30px;*/
    border: none;
    text-indent: 0;
    padding-left: 0;
    height: 6rem;
    font-size: 3.5rem;
    border-bottom: 1px solid #dcdfe6;

  }
  .message_logout {
    font-size:2rem;
  }
  .message_logout .el-message__content {
    font-size:2rem;
  }
</style>
<style scoped>

  #echats_1 {
    margin: 0 auto;
    position: relative;

  }
  .a{

  }
  #echats_2 {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    /*left: -10%;*/
    top: -8%;
  }

  .block_related {
    width: 100%;
    padding-bottom: 60px;
    display: flex;
    margin-top: 2.5rem;
    justify-content: space-between;
  }

  .chain_part_item_img {
    background: url("../../assets/images/circle_1.png") no-repeat;
    background-position: center center;
    background-size: 70%;
    height: 75%;
    margin: 0 auto;
  }

  .chain_part_item_img_1 {
    background: url("../../assets/images/circle_2.png") no-repeat;
    background-position: center center;
    background-size: 70%;
    height: 75%;
    margin: 0 auto;
  }

  .chain_part_item_img_2 {
    background: url("../../assets/images/circle_3.png") no-repeat;
    background-position: center center;
    background-size: 70%;
    height: 75%;
    margin: 0 auto;
  }

  .chain_part_item_img_3 {
    background: url("../../assets/images/circle_4.png") no-repeat;
    background-position: center center;
    background-size: 70%;
    height: 75%;
    margin: 0 auto;
  }

  .chain_part_item_img_4 {
    background: url("../../assets/images/circle_5.png") no-repeat;
    background-position: center center;
    background-size: 70%;
    height: 75%;
    margin: 0 auto;
  }

  .chain_part_item_img_6 {
    background: url("../../assets/images/circle_bg.png") no-repeat;
    background-position: center center;
    position: relative;
    top: -4%;
    background-size: 59%;
    height: 75%;
    margin: 0 auto;
  }

  .chain_part_item_text {
    font-size: 3.5rem;
    text-align: center;
    line-height: 5
  }

  .chain_part_item_text_1 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    line-height: 7;
    color: #5D14CE;
  }

  .chain_part_item_title {
    font-size: 2.5rem;
    text-align: center;
    height: 4rem;
  }

  .chain_part {
    width: 100%;
    /*padding-bottom: 2rem;*/
    display: flex;
    justify-content: space-between;
  }

  .chain_part_padding {
    padding: 8%;
    /*height: 100%;*/
  }

  .block_related_item_padding {
    padding: 2rem 5%;
    height: 100%;
    width: 90%;
  }

  .chain_part_item {
    margin-top: 2.5rem;
    width: 31%;
    /*height: 17rem;*/
    background-color: #ffffff;
    /*border-radius: 5px;*/
  }

  .block_related_item_1 {
    width: 33.3%;
    /*height: 300px;*/
    background-color: #ffffff;
    /*border-radius: 5px;*/
  }

  .block_related_item_2 {
    width: 65.555%;
    height: 320px;
    background-color: #ffffff;
    /*border-radius: 5px;*/
  }

  .block_related_item_3 {
    width: 31%;
    height: 320px;
    background-color: #ffffff;
  }

  .hc_overview_he {
    display: inline-block;
    height: 22px;
    margin-top: 1.5rem;
    font-size: 1.8rem;
  }

  .color_choose {
    color: #800080;
    cursor: pointer;
  }

  .hc_overview {
    /*border: 1px solid #DCDFE6;*/
    width: 100%;
    display: flex;
    /*justify-content: space-between;*/
    background-color: #ffffff;
  }

  .hc_overview div {
    width: 33.33%;
    height: 80px;
    text-align: center;
    padding: 30px 0;
  }

  .hc_overview_1 div {
    width: 33.3%;
    text-align: center;
    padding: 2rem 0;

  }

  .hc_overview_1 {
    margin-bottom: 30px;
  }

  .hc_overview div:nth-child(2) {
    border-left: 1px solid #DCDFE6;
    border-right: 1px solid #DCDFE6;
  }

  .hc_tishi {
    height: 15px;
    font-size: 12px;
    margin: 20px 0 30px 0;
  }

  .hc_search2_1_input_icon {
    position: absolute;
    margin-left: 15px;
    margin-top: 12px;
    z-index: 1;
  }

  .hc_search2_1_input {
    display: flex;

    width: 70%;
  }

  .hc_search2_1 {
    width: 100%;
    display: flex;
    margin-top: 50px;
    padding-bottom: 5rem;
    justify-content: space-between;
  }

  .hc_search1_1_top_title {
    line-height: 2.5;
    font-size: 3rem;
    margin-top: 2rem;

  }

  .hc_search1_1_top {
    display: flex;
    justify-content: space-between;
  }

  .hc_con {
    width: 100%;
    margin-bottom: 80px;
  }

  .con_title {
    height: 25px;
    font-size: 3.5rem;
    color: #9F9F9F;
    padding-bottom: 4rem;
    margin-bottom: 4rem;
    margin-top: 5rem;
  }

  .hc_search {
    background-color: #FFFFFF;
    padding: 2rem 2rem 2rem 6rem;
    display: flex;
    margin-bottom: 3rem;
  }

  .hc_search1_1 {
    width: 40%;
  }

  .hc_search1_2 {
    width: 100%;
  }

  .hc_search_submit {
    width: 100px;
    text-align: center;
    position: relative;
    top: 0rem;
    border: none;
    margin-right: 5%;
    font-size: 3.5rem;
    height: 3.5rem;
    padding: 0.5rem;
  }
  .go_pc{
    text-align: center;
    font-size: 3.5rem;
    color: #7E7E7E;
    margin-top: 12rem;
  }
</style>
