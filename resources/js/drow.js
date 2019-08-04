import * as d3 from 'd3';
import * as _ from 'lodash';

export  class DrowInfo{
    constructor(id,d3Scale,data,max = 100,title = '無標題',unit = " "){
        this.id=id;
        this.d3Scale = d3Scale;
        this.data = data;
        this.max = max ;
        this.title = title;
        this.unit = unit;
    }
}


//儀表板 溫度 相對濕度 甲烷 一氧化碳 累積雨量
export function DoardChar(drowInfo){
    // console.log("Doard");
    let size = 160 ;                                            //寬與長
    let max = drowInfo.max;
    let min = 0 ;
    let cx          = size / 2 ;                                //設定圓心x
    let cy          = size / 2 ;                                //設定圓心y
    let range       = max - min ;                      //最大值-最小值
    let salfrang    = range / 3 ;
    let Watchfrang    = range / 3 *2;
    let radius      = size * 0.97 / 2 ;                         //半徑
    let greenColor  = "#00cc00";
    let yellowColor = "#FF9900";
    let redColor    = "#DC3912";
    let Rr = 60 ;
    let duration    = 500;                                      //動畫時間
    let data       = drowInfo.data;                             //當下數值

    //svg 搜尋
    let svg = d3.select('#' + drowInfo.d3Scale).attr('height',size +'px').attr('width',size +'px');

    //-60度 開始 計算 算出此val 數值佔多少份 一份 ＝3度 (dara/rang)*300 後 轉徑度 即可得x,y
    let pointerStart  = [{x : cx,y : cy},{x :cx-(Rr * Math.cos((-60+((data/range)*300)) / 180 * Math.PI)),y:cy-(Rr * Math.sin((-60+((+data/range)*300)) / 180 * Math.PI))}];

    var pointerLine = d3.line()                                                         //曲線生長
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        });

    // svg? console.log('#'+drowInfo.d3Scale + "DoardSuccess"):""; //確認此圖是否抓取到
    // pointerCon? console.log(pointerCon + "pointerConSuccess"):""; //確認此圖是否抓取到

    svg.selectAll('*').remove();                                //清除舊圖

    svg.append("circle")                                        //設定外圓
        .attr("cx",cx)
        .attr("cy",cy)
        .attr("r",radius)
        .style("fill","#E2F7C5")                                //填色
        .style("stroke","#ffff")                              //邊界顏色
        .style("stroke-width","0.5px");                         //邊界粗度

    svg.append("circle")                                        //設定內圓
        .attr("cx",cx)
        .attr("cy",cy)
        .attr("r",0.8 * radius)
        .style("fill","#fff")                                   //填色
        .style("stroke","#9DDF41")                              //邊界顏色
        .style("stroke-width","2px");                           //邊界粗度

    svg.append("path")
        .style("fill",greenColor)
        .attr("d",
            d3.arc()
                .startAngle(-60 * Math.PI / 180)          //弧長 綠色
                .endAngle  (40 *Math.PI/180)                //綠色 結束
                .innerRadius(0.65 * radius)                        //內徑
                .outerRadius(0.85 * radius))                       //外徑
        .attr("transform",function () {
            return "translate(" + cx + "," + cy + ") rotate(270)"
        });

    svg.append("path")
        .style("fill",yellowColor)
        .attr("d",
            d3.arc()
                .startAngle(40 * Math.PI/ 180)          //弧長 黃色
                .endAngle(140 * Math.PI/ 180)                 //黃色 結束
                .innerRadius(0.65 * radius)                        //內徑
                .outerRadius(0.85 * radius))                       //外徑
        .attr("transform",function () {
            return "translate(" + cx + "," + cy + ") rotate(270)"
        });

    svg.append("path")
        .style("fill",redColor)
        .attr("d",
            d3.arc()
                .startAngle(140* Math.PI/ 180)                      //弧長 紅色
                .endAngle(240 * Math.PI/ 180)                       //紅色 結束
                .innerRadius(0.65 * radius)                        //內徑
                .outerRadius(0.85 * radius))                       //外徑
        .attr("transform",function () {
            return "translate(" + cx + "," + cy + ") rotate(270)"
        });
    svg.append('path')
        .style('fill','#fff')
        .attr("d",
            d3.arc()
                .startAngle(240 * Math.PI /180)
                .endAngle(300 * Math.PI/180)
                .innerRadius(0.75*radius)
                .outerRadius(radius))
        .attr("transform",function(){
            return "translate(" + cx + "," + cy + ") rotate(270)"
        })
        .style("stroke","#fff")                              //邊界顏色
        .style("stroke-width","0.5px");                         //邊界粗度

    svg.append('text')                                  //單位
        .attr('x',cx)
        .attr('y',45)
        .attr('dy',size*2/3)
        .attr('text-anchor',"middle")
        .text(data +" "+ drowInfo.unit)
        .style('font-size',18 + "px")
        .style('fill',"#123123")
        .style('strok-width',"1px");

    svg.append('circle')                                //圓弧中心
        .attr('cx',cx)
        .attr('cy',cy)
        .attr('r',4)
        .style('fill','#fff')
        .style("stroke","#9DDF41")                              //邊界顏色
        .style("stroke-width","1px");                           //邊界粗度

    //標記大小中段值
    svg.append('text')
        .attr('x',cx - 25)
        .attr('y',size - 40)
        .style('font-size',10+'px')
        .text(min);
    svg.append('text')
        .attr('x',cx-35)
        .attr('y',cy-20)
        .style('font-size',10+'px')
        .text(Math.floor(salfrang));
    svg.append('text')
        .attr('x',cx+30)
        .attr('y',cy-20)
        .style('font-size',10+'px')
        .text(Math.floor(Watchfrang));
    svg.append('text')
        .attr('x',cx + 16)
        .attr('y',size - 40)
        .style('font-size',10+'px')
        .style('text-align','right')
        .text(max);

    svg.append('g').attr('class','pointerLaa')                       //指針群組
    let pointerConAni = svg.select(".pointerLaa")               //指針畫布指向

    pointerConAni.append('path')                        //指針設置
        .attr('d',pointerLine(pointerStart))
        .style('fill','#dc3')
        .style("stroke", "#c63310") //轮廓的颜色
        .style('stroke-width','2px')
        .style("fill-opacity", 2);  //填充的透明度
    //
    pointerConAni.transition()
        .duration(duration);

    pointerConAni.append('circle')                                //指針中心
        .attr('cx',cx)
        .attr('cy',cy)
        .attr('r',3)
        .style('fill','#F2FF83')
        .style("stroke","#9DDF41")                              //邊界顏色
        .style("stroke-width","0.5px");                           //邊界粗度

    // pointerConAni?console.log("Success"):console.log("error");

};

//水位圖（開關）改圖即可
export function WaterLevelChar(drowInfo){
    let imgUrl;

    drowInfo.data != drowInfo.max ? imgUrl =  './img/WaterLevOn.svg' : imgUrl = './img/WaterLevOff.svg';

    return imgUrl;
};

//燈泡更換 （開關）改圖即可
export function LightChange(drowInfo){
    let imgUrl;

    drowInfo.data >= drowInfo.max ? imgUrl =  './img/LightOn.svg' : imgUrl = './img/LightOff.svg';

    return imgUrl;
};

//風向 指針 變換方向
export function WindpointerChar(drowInfo){
    let data = drowInfo.data+360;
    let pointerData = [{x:80,y:30},{x:55,y:110},{x:80,y:80},{x:105,y:110}];
    let size = 160;
    let cx = size/2;
    let cy = size/2;
    let scaleLag = 8;           // N NW W WS S SE E EN
    let scaleSml = 2;           //每大格分 兩小格
    let radius      = size * 0.97 / 2 ;
    let indexGo = 0;
    let spinWay =['N','EN','E','ES','S','WS','W','WN']; //

    let majorDelta = 360 / scaleLag;        //大刻度之间的角度

    let svg = d3.select('#' + drowInfo.d3Scale).attr('height',size +'px').attr('width',size +'px');
    let textStartMin = 4;
    let textStartMax = 45-textStartMin;
    let line = d3.line()
        .x(function (d) {
            return d.x;
        })
        .y(function (d) {
            return d.y;
        });
    // let pie = d3.layout.pie()
    //     .startAngle(0)
    //     .endAngle()
    svg.append('circle')            //底色黑底
        .attr('cx',cx)
        .attr('cy',cy)
        .attr('r',radius)
        .style('fill','#000');
    svg.append('circle')            //蓋底
        .attr('cx',cx)
        .attr('cy',cy)
        .attr('r',0.75 * radius)
        .style('fill','#fff');
    svg.append('path')              //不動針
        .attr('d',line(pointerData))
        .attr('y',0)
        .style('stroke','#fff')
        .style('stroke-width','1px')
        .style('fill',"#ff0000");
    svg.append('circle')              //針圓心
        .attr('cx',cx)
        .attr('cy',cy)
        .attr('r',0.05 * radius)
        .style('fill','#fff');


    //{     刻度
        for(let major = data; major <= data+315 ;major += majorDelta){
            let minMajor =  majorDelta /scaleSml ;
            let getStartPointLag = getPoint(major,0.85,80,cx,cy);

            for(let minMajorDe = major ; minMajorDe <= major+minMajor ; minMajorDe += minMajor){
                let getStartPoint = getPoint(minMajorDe,0.9,radius,cx,cy);
                let getEndPoint   = getPoint(minMajorDe,0.8,radius,cx,cy);

                if(minMajorDe % 45){
                    svg.append('line')
                        .attr('x1',getStartPoint.Px)
                        .attr('y1',getStartPoint.Py)
                        .attr('x2',getEndPoint.Px)
                        .attr('y2',getEndPoint.Py)
                        .style('stroke',"#fff")
                        .style('stroke-width', "1px");
                }
            }

            svg.append('path')
                .attr('d',
                        d3.arc()                     //架設路徑
                        .startAngle((major-textStartMin)/180*Math.PI)
                        .endAngle((major+textStartMax)/180*Math.PI)
                        .innerRadius(0.80 * radius)
                        .outerRadius(0.75 * radius)
                )
                .attr("transform",function(){
                    return "translate(" + cx + "," + cy + ")"
                })
                .style("fill",'none')
                .attr('id','pathText_'+indexGo);

            svg.append('text')
                .append('textPath')
                .attr('link:href',"#pathText_"+indexGo)
                .style('fill','#fff')
                .style('font-size',"12px")
                .text(spinWay[indexGo]);
            indexGo ++;
        }
    //}
    // console.log(data);
};

//酸鹼值 pi
export function DoardChardot(drowInfo) {
    let size = 160 ;                                            //寬與長

    let max = 90;
    let min = -90 ;
    let meg = min ;
    let range = 15 ;

    let data = drowInfo.data;
    let radius      = size / 2 ;
    let svg = d3.select('#' + drowInfo.d3Scale).attr('height',size +'px').attr('width',size +'px');
    let color_bar = 0 ;
    let color_style = [
        '#ff0000',
        '#BB493E',
        '#A16B36',
        '#B9BB3E',
        '#ffff00',
        '#8ABF40',
        '#00ff7d',
        '#47c250',
        '#76c44f',
        '#328E2F',
        '#308991',
        '#339699',
        '#3749a4',
        '#0000ff',
        '#69349d',
    ];
    //角度表
    let bar_dela = [6,18,30,42,54,66,78,90,102,114,126,138,150,162,174];

    let pointerLine = d3.line()                                                         //曲線生長
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        });

    for(meg ; meg !== max ; meg+=12){
        svg.append('path')
            .attr('d',
                d3.arc()
                    .startAngle( (meg/180) * Math.PI)
                    .endAngle(  ((meg + 12 )/180) * Math.PI)
                    .innerRadius(0.5 * radius)
                    .outerRadius(0.85 * radius)
            )
            .attr("transform",function(){
                return "translate(" + 80 + "," + 80 + ")"
            })
            .style('stroke',"#fff")
            .style('stroke-radius','10px')
            .style('stroke-width', "1px")
            .style('z-index',1)
            .style('fill',color_style[color_bar])
            .attr('id','PHText_'+color_bar);
        color_bar ++;
    }
    svg.append('text')
        .attr('x',0)
        .attr('y',80)
        .style('fill','#000')
        .style('font-size',"12px")
        .text(0);
    svg.append('text')
        .attr('x',25)
        .attr('y',37)
        .attr('rotate',-45)
        .style('fill','#000')
        .style('font-size',"12px")
        .text(3);
    svg.append('text')
        .attr('x',78)
        .attr('y',10)
        .attr('rotate',0)
        .style('fill','#000')
        .style('font-size',"12px")
        .text(7);
    svg.append('text')
        .attr('x',120)
        .attr('y',25)
        .attr('rotate',45)
        .style('fill','#000')
        .style('font-size',"12px")
        .text(10);
    svg.append('text')
        .attr('x',148)
        .attr('y',80)
        .style('fill','#000')
        .style('font-size',"12px")
        .text(14);

    svg.append('text')                                  //單位
        .attr('x',80)
        .attr('y',45)
        .attr('dy',size*2/3)
        .attr('text-anchor',"middle")
        .text(drowInfo.unit + " " + data)
        .style('font-size',18 + "px")
        .style('fill',"#123123")
        .style('strok-width',"1px");

    svg.append('circle')                                //圓弧中心
        .attr('cx',80)
        .attr('cy',80)
        .attr('r',4)
        .style('fill','#fff')
        .style("stroke","#9DDF41")                              //邊界顏色
        .style("stroke-width","1px");                           //邊界粗度

    svg.append('g').attr('class','pointerCon')                       //指針群組
    let pointerStart  = [{x : 80,y : 80},{x :80-(70 * Math.cos((bar_dela[data]) / 180 * Math.PI)),y:80-(70 * Math.sin((bar_dela[data]) / 180 * Math.PI))}];

    let pointerConAni = svg.select(".pointerCon")               //指針畫布指向

    pointerConAni.append('path')                        //指針設置
        .attr('d',pointerLine(pointerStart))
        .style('fill','#dc3')
        .style("stroke", "#c63310") //轮廓的颜色
        .style('stroke-width','2px')
        .style('z-index',100)
        .style("fill-opacity", 2);  //填充的透明度

    pointerConAni.append('circle')                                //指針中心
        .attr('cx',80)
        .attr('cy',80)
        .attr('r',3)
        .style('fill','#F2FF83')
        .style("stroke","#9DDF41")                              //邊界顏色
        .style("stroke-width","0.5px")                          //邊界粗度
        .style('z-index',200);
}

//折線圖 抓取20筆
export function LineTw(drowInfo) {

};

//儀表板得到點
function getPoint(delta,bap,rad,cx,cy){             //角度
    let x = cx-(bap * rad * Math.cos(delta / 180 * Math.PI));
    let y = cy-(bap * rad * Math.sin(delta / 180 * Math.PI));

    return {Px:x,Py:y} ;
}