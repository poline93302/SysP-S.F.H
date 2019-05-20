<template>
            <div v-show="showVisPart.visbile">
<!--                @{{showVisPart}}-->
                <div class="contain" :id="showVisPart.url">
                    <div class="ShowPart flex">
                        <div class="InfoSystemBottom">
                            <!-- 儀錶板(視覺化部分) -->
<!--                            <v-for = " in ">-->
<!--                                <div class = "aboard" :id= @{{}} > @{{}}</div>-->
<!--                            </v-for>-->
                            <div class="aboard">水量</div>
                            <div class="aboard">水<br />PH值</div>
                            <div class="aboard">土壤<br />濕度</div>
                        </div>
                        <div class="InfoSystem">
                            <!-- 系統名稱標題 -->
                            <div class="InfoTitle">
                                <span>{{ showVisPart.title }}</span>
                                <div class="InfoBitle">{{ showVisPart.En_title }}</div>
                            </div>
                        </div>
                        <div class="TouchBtn">
                            <!-- 滑扭動畫 -->
                            <img src="img/left-shape.png" class="iconHover" />
                            <div class="OpenTouch">
                                <!-- 系統解說部分 -->
                                <div class="SystemInfo">
<!--                                    <div>{{Context}}</div>-->
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="holler">
                    <img src="img/hr.png" />
                </div>
            </div>
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "ShowContext",
        props: {
            showVisPart:{
                type:Object,    //傳入物件
                required: true,  //必填字串
                default:function(){
                   return {
                        id: null,
                        url: "PointTag_100",
                        title: "無",
                        En_title: "No Find Data",
                        type: 3,
                        visbile: true
                   }
                }
            },
        },
        // data:[
        //     {title: this.showVisPart.title,api :"",Context : ""},   //water => getApi , name , context
        // ]
    }
</script>
