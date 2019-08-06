<template>
    <div id="aboardInternat">
        <div v-for = "apiName in getapinames" class="aboard">
            <div v-if = "apiName.img!= null ">
                <img :src="apiName.img" :alt="apiName.name" :title="apiName.name" width="160px" height="160px"/>
            </div>
            <div v-else>
                <svg :id="apiName.boardName" :value = "apiName.val"></svg>
                <span class="place-hide"> {{ apiName.val }} </span>
                <p style="line-height: 5px"> {{ apiName.name }}  </p>
            </div>
        </div>
    </div>

</template>

<script>
    import * as axios from 'axios';
    import _ from 'lodash';
    import {DrowInfo,WaterLevelChar,DoardChar,LightChange,WindpointerChar,DoardChardot} from '../drow.js';

    let MaxTop = [48,100,9,800,60,15,100,100,0,0,150];
    let drowInfo  = [];

    export default {
        name: "AboardGetContent",
        props:{
            getapinames:{
                type : Array,
                required:false,
            },
        },
        methods: {
            getApi() {
                let promises = [];

                this.getapinames.forEach(i => {
                    //開始抓取api
                    promises.push(axios.get('/api/' + i.api));
                });

                // At one times will exec all promise.
                axios.all(promises).then(res=> {
                    //將api promises 一一倒出
                    this.getapinames.forEach((i,index)=>{
                        //res[index].data.vaule
                        i.val = _.get(res,index+".data.vaule", 0);
                    });
                });
                // console.log(this.apiNames);
                // 丟入 drowInfo 開始畫圖
                console.log("1min")

            },
            postDataToChar(){
                _.forEach(this.getapinames,function (i,index){
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
                this.getapinames[8].img = WaterLevelChar(drowInfo[8]);//水位
                WindpointerChar(drowInfo[9]);//風向
                this.getapinames[10].img = LightChange(drowInfo[10]);//亮度
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
    }
</script>

<style scoped>

</style>