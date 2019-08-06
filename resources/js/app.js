
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('ShowContext', require('./components/ShowContext.vue').default);
Vue.component('ShowHistory', require('./components/ShowHistory.vue').default);
Vue.component('BtnContext' , require('./components/BtnContext.vue') .default);
Vue.component('TagPoint'   , require('./components/TagPoint.vue')   .default);
Vue.component('AboardGetContent' , require('./components/AboardGetContent.vue')   .default);

// import * as apiNames from 'indexApi.js';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

let apiNames = [//api 抓取ＡＰＩ部分 boardName 該borad之d3搜尋後產生檔案 name 該borad 之 名稱
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

const app = new Vue({
    el: '#app',
    data:{
        'apiNames' : apiNames,
    },
});
