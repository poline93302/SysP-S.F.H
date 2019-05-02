@section('PageContent')
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
                                <span>@{{ ShowVisPart.title }}</span>
                                <div class="InfoBitle">@{{ ShowVisPart.En_title }}</div>
                            </div>
                        </div>
                        <div class="TouchBtn">
                            <!-- 滑扭動畫 -->
                            <img src="img/left-shape.png" class="iconHover" />
                            <div class="OpenTouch">
                                <!-- 系統解說部分 -->
                                <div class="SystemInfo">
                                    <h4>@{{ ShowVisPart.Context }}</h4>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="holler">
                    <img src="img/hr.png" />
                </div>
            </div>
        </div>
</div>
@stop