import * as d3 from 'd3';

export  class DrowInfo{
    constructor(id,d3Scale,data,max = 100,title = '無標題'){
        this.id=id;
        this.d3Scale = d3Scale;
        this.data = data;
        this.max = max ;
        this.title = title;
    }
}

//儀表板 溫度 相對濕度 甲烷 一氧化碳 累積雨量
export function DoardChar(drowInfo){
    //svg 搜尋
    let svg = d3.select('#' + drowInfo.id).attr('height','100%').attr('width','100%');
    let height = svg.node().getBoundingClientRect().height;  //高
    let width = svg.node().getBoundingClientRect().width;    //寬



};

//水位圖（開關）改圖即可
export function WaterLevelChar(drowInfo){
    let imgUrl;

    drowInfo.data != 0 ? imgUrl =  './img/WaterLevOn.svg' : imgUrl = './img/WaterLevOff.svg';

    return imgUrl;
};

//燈泡更換 （開關）改圖即可
export function LightChange(drowInfo){
    let imgUrl;

    drowInfo.data >= 150 ? imgUrl =  './img/LightOn.svg' : imgUrl = './img/LightOff.svg';

    return imgUrl;
};
//風向 指針 變換方向
export function WindpointerChar(drowInfo){};

//折線圖 抓取20筆
export function LineTw(drowInfo) {

};