/* children :use VisChange(); own BtnName id*/
import "./isShow.js";
console.log("impoet");
new Vue({
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