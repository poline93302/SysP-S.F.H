<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>SmartFarm</title>
</head>
    @section('cssLink')
<body>
<<header id="PointTag_0">
    @section('headerContext');
</header>
<!-- 點連結Vue -->
<ul id="TagPointPage" class="TagPart">
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

<!-- 進入點 -->
<div class="contain">
    <div class="ShowPart AutoCenter">

        <div class="homePage">
            <img src="src/img/aboardhr.png" />
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
</div>
<!-- 按鈕Vue -->
<div id="ButtonChiled" class="InserPartSystem flex">
    <button
            v-for="BtnInfo in BtnInfos"
            :value="BtnInfo.id"
            @click="VisChage(BtnInfo.id)"
    ><!-- 繼承問題 -->
        {{ BtnInfo.BtnName }}
    </button>
</div>
<div class="holler">
    <img src="src/img/hr.png" />
</div>

<!-- 顯示Vue -->
<div class="isShow" id="ShowOn">
    <div v-for="ShowVisPart in ShowVisParts">
        <div v-show="ShowVisPart.visbile">
            <div class="contain" :id="ShowVisPart.url">
                <div class="ShowPart flex">
                    <div class="InfoSystemBottom">
                        <!-- 儀錶板(視覺化部分) -->
                        <div class="aboard">水量</div>
                        <div class="aboard">水<br />PH值</div>
                        <div class="aboard">土壤<br />濕度</div>
                    </div>
                    <div class="InfoSystem">
                        <!-- 系統名稱標題 -->
                        <div class="InfoTitle">
                            <span>{{ ShowVisPart.title }}</span>
                            <div class="InfoBitle">{{ ShowVisPart.En_title }}</div>
                        </div>
                    </div>
                    <div class="TouchBtn">
                        <!-- 滑扭動畫 -->
                        <img src="src/img/left-shape.png" class="iconHover" />
                        <div class="OpenTouch">
                            <!-- 系統解說部分 -->
                            <div class="SystemInfo">
                                <h4>{{ ShowVisPart.Context }}</h4>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="holler">
                <img src="src/img/hr.png" />
            </div>
        </div>
    </div>
</div>

<footer>
    @section('footerContext')
</footer>

</body>
    @section('jsConnect');
</html>
