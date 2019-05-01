/* Father  */
let Faterdata = {
    data:{ 
        ShowVisParts:[/* "inside  outside  farm "  ture 1 false 0 */
        {id : 1,url : 'PointTag_1',title : '智能灑水系統', En_title : 'SmartWateing'  , type : 3, visbile : false},
        {id : 2,url : 'PointTag_2',title : '智能燈泡系統', En_title : 'SmartLighting' , type : 3, visbile : false},
        {id : 3,url : 'PointTag_3',title : '空品監測系統', En_title : 'AirQuality'    , type : 3, visbile : false}, 
        {id : 4,url : 'PointTag_4',title : '微氣候系統'  , En_title : 'Microclimate'  , type : 2, visbile : false} 
    ]},
    methods:{
        VisChage(BtnVaule){
            //點的顯示部分 確認visble為何做出顯示
            this.ShowVisParts.forEach((ShowVisPart, k)=>{
                BtnVaule == ShowVisPart.type? this.ShowVisParts[k].visbile = true:  this.ShowVisParts[k].visbile = false;
            })
        }
}};
let ShowOn = new Vue({
    el:"#ShowOn",
    mixins: [Faterdata]
}); 


