<template>
    <div>
        <!--        123-->
    </div>
</template>

<script>
    export default {
        name: "ShowHistory",
        props:{
            items:{
                type:Array,
                required:false,
                default: function(){
                    return ['A','B','C'] ;
                }
            },
            clickItem:{
                type:String,
                required: false,
                default:function () {
                    return this.items[0] ;
                },
            }
        },
        methods:{
            //this.$http.get ::Ajax
        },
    }
</script>

<style scoped>

</style>