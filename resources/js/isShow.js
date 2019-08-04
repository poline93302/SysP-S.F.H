/* Father  */
import showcontext from './components/ShowContext'

var Faterdata = {
    data:{
        ShowVisParts:[/* "inside  outside  farm "  ture 1 false 0 */
            {id : 1,url : 'PointTag_1',title : '智能灑水系統', En_title : 'SmartWateing'  , bord : ['waterlevelInfo','waterphInfo','soilmonInfo'], type : 3, visbile : false},
            {id : 2,url : 'PointTag_2',title : '智能燈泡系統', En_title : 'SmartLighting' , bord : ['lightInfo']   , type : 3, visbile : false},
            {id : 3,url : 'PointTag_3',title : '空品監測系統', En_title : 'AirQuality'    , bord : ['airCOInfo','airPH4Info'] , type : 3, visbile : false},
            {id : 4,url : 'PointTag_4',title : '微氣候系統'  , En_title : 'Microclimate'  , bord : ['123'] , type : 2, visbile : false}
        ]},
    methods:{
        VisChage(BtnVaule){
            //點的顯示部分 確認visble為何做出顯示
            this.ShowVisParts.forEach((ShowVisPart, k)=>{
                BtnVaule == ShowVisPart.type? this.ShowVisParts[k].visbile = true:  this.ShowVisParts[k].visbile = false;
            })
        }
    }};

let ShowCount =0;

//下方顯示部份
let ShowOn = new Vue({
    el:"#ShowOn",
    components:{showcontext},
    mixins: [Faterdata]
});

let BtnInfo = new Vue({
    el:'#ButtonChiled',
    data:{
        BtnInfos :[
            {id : 3 ,BtnName : '室內微氣候'},
            {id : 1 ,BtnName : '農場監控'},
            {id : 2 ,BtnName : '室外微氣候'}
        ]
    },
    mixins: [Faterdata]
});

let Point = new Vue({
    el:'#TagPointPage',
    data:{
        windowY : 0
    },
    computed:{
        PointInfos() {
            return [
                {id : 0 ,url :'PointTag_0',color : true,visbile:true},
                {id : 1 ,url :this.ShowVisParts[0].url,color : false,visbile:this.ShowVisParts[0].visbile},
                {id : 2 ,url :this.ShowVisParts[1].url,color : false,visbile:this.ShowVisParts[1].visbile},
                {id : 3 ,url :this.ShowVisParts[2].url,color : false,visbile:this.ShowVisParts[2].visbile},
                {id : 4 ,url :this.ShowVisParts[3].url,color : false,visbile:this.ShowVisParts[3].visbile}
            ];
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll, true);
    },
    methods:{
        PointEvent(id) {
            this.PointInfos.forEach((PointInfo) => {
                PointInfo.color = false;
            });
            this.$set(this.PointInfos[id], 'color', true);
        },
        handleScroll(){
            // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // let scroll_O  = document.body.clientHeight/6 /* scrollTop  / wind  * 100% =   window.innerHeight*0.5*/
            //
            // if(scrollTop>4.5*scroll_O)
            //     this.PointEvent(4);
            // else if(scrollTop>3.5*scroll_O)
            //     this.PointEvent(3);
            // else if(scrollTop>2.5*scroll_O)
            //     this.PointEvent(2);
            // else if(scrollTop>1.5*scroll_O)
            //     this.PointEvent(1);
            // else if(scrollTop>0*scroll_O)
            //     this.PointEvent(0);
        }
    },
    mixins:[Faterdata]

});


