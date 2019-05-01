
@section('BtnName')
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
        <img src="img/hr.png" />
    </div>
@stop

@section('PointName')
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
@stop