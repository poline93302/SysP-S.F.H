import * as d3 from 'd3'

export  class DrowInfo{
    constructor(id,d3Scale,data,max = 100,title = '無標題'.unit=null){
        this.id=id;
        this.d3Scale = d3Scale;
        this.data = data;
        this.max = max ;
        this.title = title;
    }
}