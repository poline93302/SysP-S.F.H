<template>
    <div>
        <!-- 左方point -->
        <tag-point :showvisparts="ShowVisParts" :color="color" @changecolor="ChangeColor"></tag-point>

        <div id="ButtonChiled" class="InserPartSystem flex">
            <button
                    v-for="BtnInfo in BtnInfos"
                    :value="BtnInfo.id"
                    @click="VisChage(BtnInfo.id)"
            >
                {{ BtnInfo.BtnName }}
            </button>
        </div>
        <div class="holler">
            <img src="img/hr.png" />
        </div>
        <!-- 查詢結果 -->
        <div class="isShow">
            <div v-for="ShowVisPart in ShowVisParts">
                <show-context :show-vis-part = "ShowVisPart"> </show-context>
            </div>
        </div>
    </div>
</template>

<script>
    let case1 = false,case2 = false,case3 = false,case4 = false;
    export default {
        name: "BtnContext",
        data:function(){
            return{
                BtnInfos :[
                    {id : 3 ,BtnName : '室內微氣候'},
                    {id : 1 ,BtnName : '農場監控'},
                    {id : 2 ,BtnName : '室外微氣候'}
                ],
                ShowVisParts:[/* "inside  outside  farm "  ture 1 false 0 */
                        {id : 1,url : 'PointTag_1',title : '智能灑水系統', En_title : 'SmartWateing'  , bord : ['waterlevelInfo','waterphInfo','soilmonInfo'], type : 3, visbile : false},
                        {id : 2,url : 'PointTag_2',title : '智能燈泡系統', En_title : 'SmartLighting' , bord : ['lightInfo']   , type : 3, visbile : false},
                        {id : 3,url : 'PointTag_3',title : '空品監測系統', En_title : 'AirQuality'    , bord : ['airCOInfo','airPH4Info'] , type : 3, visbile : false},
                        {id : 4,url : 'PointTag_4',title : '微氣候系統'  , En_title : 'Microclimate'  , bord : ['micTmpInfo','micHemInfo','micRainSatInfo','micRainPersInfo','micWindSpeInfo','micWindeWayInfo'] , type : 2, visbile : false}
                ],
                color:[
                    true,
                    case1,
                    case2,
                    case3,
                    case4
                ],
            }
        },
        methods:{
            VisChage(BtnValue){
                //點的顯示部分 確認visble為何做出顯示
                this.ShowVisParts.forEach((ShowVisPart, k)=>{
                    BtnValue == ShowVisPart.type? this.ShowVisParts[k].visbile = true:  this.ShowVisParts[k].visbile = false;
                })
            },
            ChangeColor(id){
                for (let i = 0; i <5 ; i++) {
                    this.$set(this.color,i, false);
                }
                this.$set(this.color,id, true);
           }
        }
    }
</script>

<style scoped>

</style>