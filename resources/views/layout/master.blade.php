<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>SmartFarm</title>
</head>
@include('layout.linkCss')
@include('element.header')
@include('element.footer')
@include('element.PhotoS')
<body>
<div id="app">
    {{--  上頭  --}}
    <header id="PointTag_0">
        @yield('hearContent')
    </header>

    {{-- 影片輪播--}}
    <div class = "contain">
        <div class="ShowPart">
            {{--影片輪播--}}
            @yield('AniPho')
            {{--<!-- 進入點 -->--}}
            @yield('totalBoard')
        </div>
    </div>
    <!-- 左方point -->
    <tag-point :showvisparts="ShowVisParts"></tag-point>
    {{--<!-- 選則顯示部份 -->--}}
    <btn-context :btncheck="VisChage"></btn-context>
    <div class="holler">
        <img src="img/hr.png" />
    </div>
    {{--<!-- 查詢結果 -->--}}
    <div class="isShow">
        <div v-for="ShowVisPart in ShowVisParts">
            <show-context :show-vis-part = "ShowVisPart"> </show-context>
        </div>
    </div>

    {{--  下腳   --}}
    <footer>
        @yield('footerContent')
    </footer>
</div>
</body>
@include('layout.scrJs')
</html>
