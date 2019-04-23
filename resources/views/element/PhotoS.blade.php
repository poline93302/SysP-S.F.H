@section('AniPho')
<div class="PhotoShow">
    <!-- total-12s -->
    <div>
        <img
                src="img/ChangePage1.jpg"
                alt="Image"
                width="800px"
                height="600px"
        />
    </div>
    <!-- 0s -->
    <div>
        <img
                src="img/ChangePage2.jpg"
                alt="Image"
                width="800px"
                height="600px"
        />
    </div>
    <!-- 5s -->
    <div>
        <img
                src="img/ChangePage3.jpg"
                alt="Image"
                width="800px"
                height="600px"
        />
    </div>
    <!-- 10s -->
</div>
@stop

@section('totalBoard')
    <div class="ShowPart AutoCenter">
        <div class="homePage">
            <img src="img/aboardhr.png" />
            <div class="aboardInternat">
                <div class="aboard">溫度</div>
                <!-- https://codepen.io/anon/pen/GeQKEg -->
                <div class="aboard">相對<br />溼度</div>
                <!-- http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6-->
                <div class="aboard">水量</div>
                <!--  -->
                <div class="aboard">水<br />PH值</div>
                <!--  -->
                <div class="aboard">甲烷<br />濃度</div>
                <!-- https://observablehq.com/@d3/sunburst  -->
                <div class="aboard">一氧<br />化碳</div>
                <!-- https://observablehq.com/@d3/sunburst  -->
                <div class="aboard">燈泡<br />狀態</div>
                <!-- https://www.flaticon.com/search?word=light -->
                <div class="aboard">累積<br />雨量</div>
                <!-- http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6 -->
                <div class="aboard">風向</div>
                <!-- https://www.flaticon.com/free-icon/compass_1064733#term=compass&page=1&position=41 -->
            </div>
        </div>
    </div>
@stop