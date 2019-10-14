import moment from 'moment'
import CryptoJS from "crypto-js"
import BigNumber from "bignumber.js"

export default {
  install(Vue, opt) {
    Vue.prototype.tableHeaderColor = function ({row, column, rowIndex, columnIndex}) {
      if (rowIndex === 0) {
        return 'background-color:#ffffff ;color: #333;font-weight: 600;font-size: 15px;height:58px;'
      }
    }
    /*时间戳转换=>moment*/
    Vue.prototype.timestampToTime = function (timestamp) {
      let time = ''
      if (timestamp == '' || timestamp == null || timestamp == undefined) {
        time = ''
      } else {
        time = moment(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')
      }
      return time
    }
    Vue.prototype.passwordEncryption = function (e) {
      let cipherText = CryptoJS.HmacSHA1(e, '87krsC!IPF@OBRPEOh#Uat9C').toString(CryptoJS.enc.Hex);
      return cipherText;
      // Decrypt 解密
      // let bytes = CryptoJS.AES.decrypt(cipherText, "87krsC!IPF@OBRPEOh#Uat9C");
      // let originalText = bytes.toString(CryptoJS.enc.Utf8);
      // console.log(originalText);
    }
    /*金额转换*/
    Vue.prototype.scientificCounting = function (e) {
      let num = 0
      if (e == 0 || e == '' || e == null || e == undefined || e == NaN) {
        num = 0
      } else {
        num = new BigNumber(`${e}`).div("1e+18").toString(10);
        // if(num.indexOf('.') !== -1 && num.split('.')[1].length > 6){
        //   num = parseFloat(num).toFixed(6)
        // }
      }
      return num
    }
    /*节点级别转换*/
    Vue.prototype.nodeLevelConversion = function (e) {
      let node = ''
      if (e == '' || e == undefined || e == null) {
        node = '未知节点'
      } else {
        if (e == 0) {
          node = '源节点'
        } else if (e == 1) {
          node = '源节点'
        }
        else if (e == 2) {
          node = '源节点'
        }
        else if (e == 3) {
          node = '源节点'
        }
        else if (e == 4) {
          node = '源节点'
        }
      }

      return node
    }
  }

}
