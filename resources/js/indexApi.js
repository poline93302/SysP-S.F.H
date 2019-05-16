import * as axios from 'axios'
import _ from 'lodash'
// import * as Vue from 'vue'
// import DrowInfo from 'drow'

let apiNames = [//api 抓取ＡＰＩ部分 boardName 該borad之d3搜尋後產生檔案 name 該borad 之 名稱
    {api: 'getOnTmp', boardName: 'TempAbo', name: '溫度', val: 0},
    {api: 'getOnHum', boardName: 'RelHumAbo', name: '相對濕度', val: 0},
    {api: 'getOnWaL', boardName: 'WatLevAbo', name: '水位', val: 0},
    {api: 'getOnMet', boardName: 'MetAbo', name: '甲烷', val: 0},
    {api: 'getOnCoA', boardName: 'CoAbo', name: '一氧化碳', val: 0},
    {api: 'getOnLig', boardName: 'LightAbo', name: '燈泡狀態', val: 0},
    {api: 'getOnCum', boardName: 'CumWaAbo', name: '累積雨量', val: 0},
    {api: 'getOnWid', boardName: 'WindWayAbo', name: '風向', val: 0}
];

let indexApi = new Vue({
    el: "#aboardInternat",
    data() {
        return {
            apiNames: apiNames,
        }
    },
    methods: {
        getApi() {
            let promises = [];

            // axios: get, post, put ,delete -> promise
            //  i : iterator
            this.apiNames.forEach(i => {
                //開始抓取api
                promises.push(axios.get('/api/' + i.api));
            });

            // At one times will exec all promise.
            axios.all(promises).then(res=> {
                //將api promises 一一倒出
                apiNames.forEach((i,index)=>{
                    //res[index].data.vaule
                    i.val = _.get(res,index+".data.vaule", 0);
                });
            });
            console.log("1min")

            // res[0].data;
        },
        // },
    },//
    created(){
        this.getApi();
    },
    mounted() {
        setInterval(this.getApi, 60000)
        console.log("mounted")
    }

});
