import * as axios from 'axios'
import _ from 'lodash'
// import * as Vue from 'vue'
import {DrowInfo,WaterLevelChar,DoardChar,LightChange,WindpointerChar,DoardChardot}from './drow.js'

export let apiNames = [//api 抓取ＡＰＩ部分 boardName 該borad之d3搜尋後產生檔案 name 該borad 之 名稱
    {api: 'getOnTmp', boardName: 'TempAbo'  , name: '溫度'      , val: 0,img:null ,unit:'℃'},
    {api: 'getOnHum', boardName: 'RelHumAbo', name: '相對濕度'  , val: 0,img:null,unit:'%'},
    {api: 'getOnMet', boardName: 'MetAbo'   , name: '甲烷'      , val: 0,img:null,unit:'%'},
    {api: 'getOnCoA', boardName: 'CoAbo'    , name: '一氧化碳'  , val: 0,img:null,unit:'ppm'},
    {api: 'getOnCum', boardName: 'CumWaAbo' , name: '累積雨量'  , val: 0,img:null,unit:'mm'},
    {api: 'getOnWPH', boardName: 'WatPHSt'  , name: '水中酸鹼'  , val: 0,img:null,unit:'PH'},
    {api: 'getOnSHu', boardName: 'WatSoi'   , name: '土壤濕度'  , val: 0,img:null,unit:'%'},
    {api: 'getOnRin', boardName: 'RinPro'   , name: '降雨機率'  , val: 0,img:null,unit:'%'},
    {api: 'getOnWaL', boardName: 'WatLevAbo', name: '水位狀態'  , val: 0,img:null,unit:""},//
    {api: 'getOnWid', boardName: 'WindSpeed', name: '風向'     , val: 0,img:null,unit:""},//
    {api: 'getOnLig', boardName: 'LightAbo' , name: '燈泡狀態'  , val: 0,img:null,unit:""}//
];
let MaxTop = [48,100,9,800,60,15,100,100,0,0,150];
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
                drowInfo[index] = new DrowInfo(i.api,i.boardName,i.val,MaxTop[index],i.name,i.unit);
            });
            DoardChar(drowInfo[0]);     //溫度
            DoardChar(drowInfo[1]);//濕度
            DoardChar(drowInfo[2]);//甲烷
            DoardChar(drowInfo[3]);//一氧化碳
            DoardChar(drowInfo[4]);//累積雨量
            DoardChardot(drowInfo[5]);//水中酸鹼
            DoardChar(drowInfo[6]);//土壤濕度
            DoardChar(drowInfo[7]);//降雨機率
            apiNames[8].img = WaterLevelChar(drowInfo[8]);//水位
            WindpointerChar(drowInfo[9]);//風向
            apiNames[10].img = LightChange(drowInfo[10]);//亮度
        },
    },
    created(){
        this.getApi();
    },
    mounted() {
        setInterval(this.getApi, 60000);
        // console.log("mounted")
    },
    updated(){
        this.postDataToChar();
    }

});
