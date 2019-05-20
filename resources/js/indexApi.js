import * as axios from 'axios'
import _ from 'lodash'
// import * as Vue from 'vue'
import {DrowInfo,WaterLevelChar,DoardChar,LightChange,WindpointerChar}from './drow.js'

export let apiNames = [//api 抓取ＡＰＩ部分 boardName 該borad之d3搜尋後產生檔案 name 該borad 之 名稱
    {api: 'getOnTmp', boardName: 'TempAbo', name: '溫度', val: 0,img:null},
    {api: 'getOnHum', boardName: 'RelHumAbo', name: '相對濕度', val: 0,img:null},
    {api: 'getOnWaL', boardName: 'WatLevAbo', name: '水位狀態', val: 0,img:null},
    {api: 'getOnMet', boardName: 'MetAbo', name: '甲烷', val: 0,img:null},
    {api: 'getOnCoA', boardName: 'CoAbo', name: '一氧化碳', val: 0,img:null},
    {api: 'getOnLig', boardName: 'LightAbo', name: '燈泡狀態', val: 0,img:null},
    {api: 'getOnCum', boardName: 'CumWaAbo', name: '累積雨量', val: 0,img:null},
    {api: 'getOnWid', boardName: 'WindWayAbo', name: '風向', val: 0,img:null}
];
let MaxTop = [50,20,30,50,10,50,60,60];
let drowInfo  = [];
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
            // console.log(this.apiNames);
            // 丟入 drowInfo 開始畫圖
            console.log("1min")
        },
        postDataToChar(){
            _.forEach(this.apiNames,function (i,index){
                drowInfo[index] = new DrowInfo(i.api,i.boardName,i.val,MaxTop[index],i.name);
            });
            DoardChar(drowInfo[0]);
            DoardChar(drowInfo[1]);
            apiNames[2].img = WaterLevelChar(drowInfo[2]);
            DoardChar(drowInfo[3]);
            DoardChar(drowInfo[4]);
            apiNames[5].img = LightChange(drowInfo[5]);
            DoardChar(drowInfo[6]);
            WindpointerChar(drowInfo[7]);
        },
    },
    //
    // updated(){  //更新圖檔
    //     this.postDataToChar();
    // },
    created(){
        this.getApi();
    },
    mounted() {
        setInterval(this.getApi, 60000);
        setInterval(this.postDataToChar,61000);
        console.log("mounted")
    },
    updated(){
        this.postDataToChar();
    }

});
