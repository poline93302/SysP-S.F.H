<template>
    <div v-show="showVisPart.visbile">
        <!--                @{{showVisPart}}-->
        <div class="contain" :id="showVisPart.url">
            <div class="ShowPart flex">
                <div class="InfoSystemBottom">
                    <!-- 儀錶板(視覺化部分) -->
                    <div v-for="(item,index) in showVisPart.bord" class="aboard-Info" v-show="item != ''">
<!--                        {{item}}-->
                        <!--                                        onclick="location.href='#';"+".png"-->
                        <img :src= getItemName(item) width="120px" height="120px" >
                    </div>
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
                        <div class="SystemInfo" :id="showVisPart.En_title+'Info'">
                            {{ openSelfFile(showVisPart.En_title)}}
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
                        bord : [],
                        type: 3,
                        visbile: true
                    }
                }
            },
        },
        methods: {
            openSelfFile(path) {
                //路徑定義
                let realpath = 'http://localhost:8000/selftxt/' + path + 'Self.txt';

                //利用fetch得到 txt 內文（嘗試 利用txt 書寫html） !!:key:!! fetch return Promise
                fetch(realpath,{
                    method : 'GET' ,
                    headers: new Headers({
                        'Content-Type': 'text/html'
                    })
                })
                    .then(function(res){
                        //create Promise 抓出 text
                        let promiseObjText = Promise.resolve(res.text()) ;

                        promiseObjText.then(v => {
                            //抓取place document
                            let InfoPlacer = document.getElementById(path+'Info');
                            InfoPlacer.innerHTML = v ;
                        });
                    })
                    .catch(function(err){
                        console.log('Error By' + err);
                    });
            },

            getItemName(item) {
                if(item !== ' ')
                    return '/img/'+item + '.png';
            }
        },
        // data:[
        //     {title: this.showVisPart.title,api :"",Context : ""},   //water => getApi , name , context
        // ]B
    }
</script>
