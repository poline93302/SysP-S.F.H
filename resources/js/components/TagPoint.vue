<template>
    <ul class="TagPart">
        <li v-for="PointInfo in PointInfos">
            <div v-show="PointInfo.visbile"   >
                <a :href="'#' + PointInfo.url"  @click="PointEvent(PointInfo.id)">
                    <div
                            class="TagPoint"
                            :class='PointInfo.color?"background_color_black":"background_color_white"'
                            :key="PointInfo.id"
                    ></div>
                </a>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TagPoint",
        props:{
            showvisparts:{
                type:Array,
                required:false,
            },
            color:{
                type:Array,
                required: false,
            }
        },
        methods:{
            PointEvent(id) {
                console.log('Point');
                this.$emit('changecolor',id);
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
            },
        },
        computed:{
            PointInfos(){
                return[
                    {id : 0 ,url :'PointTag_0',color : this.color[0],visbile:true},
                    {id : 1 ,url :this.showvisparts[0].url,color : this.color[1],visbile:this.showvisparts[0].visbile},
                    {id : 2 ,url :this.showvisparts[1].url,color : this.color[2],visbile:this.showvisparts[1].visbile},
                    {id : 3 ,url :this.showvisparts[2].url,color : this.color[3],visbile:this.showvisparts[2].visbile},
                    {id : 4 ,url :this.showvisparts[3].url,color : this.color[4],visbile:this.showvisparts[3].visbile},
                ];
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll, true);
        },
    }
</script>

<style scoped>

</style>