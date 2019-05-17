
@section('PageContent')

    <div class="isShow" id="ShowOn">
        <div v-for="ShowVisPart in ShowVisParts">
            <ShowContext :show-vis-part = "ShowVisPart">
            </ShowContext>
        </div>
    </div>
@endsection