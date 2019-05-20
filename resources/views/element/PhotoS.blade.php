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
        <div id="aboardInternat">
            <div v-for = "apiName in apiNames" class="aboard">
                <div v-if = "apiName.img!= null ">
                    <img :src="apiName.img" :alt="apiName.name" :title="apiName.name" width="160px" height="160px"/>
                </div>
                <div v-else>
                    <svg :id="apiName.boardName" width="160px" height="160px" :value = "apiName.val"></svg>
                </div>
            </div>
        </div>
    </div>
@stop