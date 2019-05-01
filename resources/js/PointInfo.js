/* Clildren:use url,title,en_title visbil ;own id,color*/
import './isShow.js';
let TestVueWorkingOn ="Vue working!";
let ShowCount =0;
new Vue({
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
