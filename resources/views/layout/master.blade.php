<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>SmartFarm</title>
</head>
    @include('layout.linkCss')
    @include('element.header')
    @include('element.footer')
    @include('element.ShowContent')
    @include('element.PhotoS')
    @include('element.Elem')
<body>

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
    <!-- 點連結Vue -->
    @yield('PointName')
    {{--<!-- 按鈕Vue -->--}}
    @yield('BtnName')
    {{--<!-- 顯示Vue -->--}}
    @yield('PageContent')

    <footer>
        @yield('footerContent')
    </footer>
</body>
    @include('layout.scrJs')
</html>
