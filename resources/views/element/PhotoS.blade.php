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

@section('totalBoard')<!--class-->
<div class="ShowPart AutoCenter">
    <img src="img/aboardhr.png" />
    <aboard-get-content :getapinames = "apiNames"> </aboard-get-content>
</div>

@stop