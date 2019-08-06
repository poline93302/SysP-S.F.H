<template>
    <div id="ButtonChiled" class="InserPartSystem flex">
        <button
                v-for="BtnInfo in BtnInfos"
                :value="BtnInfo.id"
                @click="btncheck(BtnInfo.id)"
        >
            {{ BtnInfo.BtnName }}
        </button>
    </div>
</template>

<script>
    export default {
        name: "BtnContext",
        props:{
            btncheck :{
                type: Function,
            }
        },
        data:function(){
            return{
                BtnInfos :[
                    {id : 3 ,BtnName : '室內微氣候'},
                    {id : 1 ,BtnName : '農場監控'},
                    {id : 2 ,BtnName : '室外微氣候'}
                ]
            }
        },
    }
</script>

<style scoped>

</style>