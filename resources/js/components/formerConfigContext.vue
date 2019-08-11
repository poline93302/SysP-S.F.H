<template>
    <div class="contain">
        <div class="ShowPart" style="min-height: 150px">
            <div v-for="(Config_Info,index) in Config_Infos">
                <div class="font-size-16" :class='Config_Info.switch? "switch_open" : "switch_close"' >
                    <input type="hidden" name="_token" :value="csrf" />
                    <input type="hidden" name="issue_id" :value=Config_Info.id />
                    <div class="top-body flex" style="justify-content:space-between;">
                        <div class="div-left">
                            <span style="font-size: 18px;"><b>感測器名稱 :</b> </span>
                            <select style="font-size:16px" v-model="Config_Info.sensorname" v-if="Config_Info.sensorname != null" name='sensor'>
                                <option style="font-size:12px" :value="Config_Info.sensorname">{{ change_former_name(Config_Info.sensorname) }}</option>
                            </select>

                            <select style="font-size:16px" v-model="Config_Info.sensorname" v-else="Config_Info.sensorname == null" name='sensor'>
                                <option style="font-size:12px" v-for=" (Sensor_Info) in Sensor_Infos" :value=" Sensor_Info.sensor_op" > {{ Sensor_Info.name }} </option>
                            </select>
                        </div>
                        <div class="div-right flex" style="flex-direction: row">
                            <img src="img/config_trash.png" alt="trash" width="25px" height="25px"  @click="delete_config(Config_Info.id)"/> &nbsp;&nbsp;
                            <img src="img/config_edit.png"  alt="pen"   width="25px" height="25px"  @click="edit_config(index)"/>&nbsp;&nbsp;
                            <label>
                                <input type="checkbox" class="check_box" v-model="Config_Info.switch" name="switch_config" id="switch_control">
                                <span class="switch_box">
                                        <span class="switch_btn"></span>
                                    </span>
                            </label>
                        </div>
                    </div>
                    <hr>
                    <div class="sub-body">
                        <div class="line-block flex" style="flex-direction: row;">
                            <span>設定數值 ： </span>
                            <input id ='change_placeholder' name="value_config" :placeholder = place_name(Config_Info.sensorname,index) v-model="Config_Info.value" number :disabled = '!Controll_Edit[index]'/> &nbsp;&nbsp;&nbsp;
                            <span>開始使用之日期 ： </span>
                            <input type="date"  name="startT_config" v-model="Config_Info.start_time" :disabled = '!Controll_Edit[index]'/>&nbsp;&nbsp;&nbsp;
                            <span>停止使用之日期 ： </span>
                            <input type="date"  name="endT_config" v-model="Config_Info.end_time" @change="time_confirm(index)" :disabled = '!Controll_Edit[index]'/>&nbsp;&nbsp;&nbsp;
                        </div>
                        <br>
                        <!--                   <div class="">此處看是否修嘎</div>-->
                        <div v-show="Controll_Edit[index]">
                            <button class="btn-info" type="submit" @click="EC_statue[index] ? update_sunbmit(index) : check_submit(index)"> {{ EC_statue[index] ? '更新':'新增'}} </button>
                            <button class="btn-info" type='button' @click="EC_statue[index] ? edit_config(index)    : reset_config(index)"> {{ EC_statue[index] ? '取消':'清空'}} </button>
                        </div>
                    </div>
                </div>
            </div>
            <img @click="add_former_config()" src="/img/add_button_former_config.png" hight="40px" width="40px" class="img_way"/>
        </div>
    </div>
</template>

<script>
    import * as axios from 'axios';
    let config_sensor_name = ['土壤濕度'];
    let delete_url = '/former_config/delete';
    let create_url = '/former_config/create';
    let edit_url   = '/former_config/edit';
    let show_url   = '/former_config/show';
    export default {
        name: "formerConfigContext",
        methods:{
            //將時間進行控制
            time_confirm(index){
                if(this.Config_Infos[index].end_time <= this.Config_Infos[index].start_time){
                    alert('輸入結束日期錯誤，請重新選擇');
                    this.Config_Infos[index].end_time = null;
                }
            },
            //透過加入的是否為123來判斷是否空值 在以建議設值範圍進行return
            place_name(name,index){
                name == '123' ? this.Config_Infos[index].sensorname = null : this.Config_Infos[index].sensorname = name;
                for (let i = 0; i < this.Sensor_Infos.length; i++) {
                    if(name == this.Sensor_Infos[i],name){
                        return "建議設值範圍" + this.Sensor_Infos[i+1].min + "~" + this.Sensor_Infos[i+1].max ;
                    }
                }
            },
            //抓取當下所設定的個數
            config_api(){
                let self = this;

                axios.get(show_url).then(res=> {
                    self.Config_Infos = res.data;
                })
                    .finally(c=>{
                        //將個別開關加入
                        for (let i = 0; i < self.Config_Infos.length; i++) {
                            self.Controll_Edit[i]=false;
                            self.EC_statue[i]=true;
                            self.Number_storage[i] = ({'value':0,'start_date':'1997-08-10','end_date':'1997-08-10'});
                        }
                    });
                console.log("former_config");
            },
            //製作開關以控制該項目是否給予編輯
            edit_config(id){
                //判斷是否’取消‘ ’取消數值必須替換‘
                if(this.Controll_Edit[id]){
                    if(this.Config_Infos[id].value !=  this.Number_storage[id].value){
                        this.Config_Infos[id].value =  this.Number_storage[id].value;
                    }
                    if(this.Config_Infos[id].start_time !=  this.Number_storage[id].start_date){
                        this.Config_Infos[id].start_time =  this.Number_storage[id].start_date;
                    }
                    if(this.Config_Infos[id].end_time !=  this.Number_storage[id].end_date){
                        this.Config_Infos[id].end_time =  this.Number_storage[id].end_date;
                    }
                    this.$set(this.Controll_Edit,id,false);
                }
                else{
                    this.Number_storage[id].value = this.Config_Infos[id].value;
                    this.Number_storage[id].start_date = this.Config_Infos[id].start_time;
                    this.Number_storage[id].end_date = this.Config_Infos[id].end_time;
                    this.$set(this.Controll_Edit,id,true);
                }
            },
            //清空數值
            reset_config(id){
                this.$set(this.Config_Infos[id],'value','');
                this.$set(this.Config_Infos[id],'start_time','');
                this.$set(this.Config_Infos[id],'end_time','');
                this.$set(this.Config_Infos[id],'switch',true);
            },
            //對英文名字進行更改為中文
            change_former_name(en_name){
                let name = en_name.split("_");

                //此處name[0] = 前三數; 以下需要再新增 記得config_sensor_name同時新增
                switch (name[0]) {
                    case 'WTL':{
                        return config_sensor_name[0];
                        break;
                    }
                    default : {
                        return null;
                        break;
                    }
                }
            },
            //新增設定項目以動態方法插入
            add_former_config(){
                this.Config_Infos.push(
                    {
                        "id":this.Config_Infos[this.Config_Infos.length-1].id  + 1 ,
                        "formname":"jojogg",
                        "sensorname":null,
                        "mode":"0",
                        "value":'',
                        "start_time":"",
                        "end_time":"",
                        "switch":true,
                    }
                );
                this.Controll_Edit.push(true);
                this.EC_statue.push(false);
            },

            //確認是否選擇感測器 並透過axios新增
            check_submit(index){
                let self = this;
                if(this.Config_Infos[index].sensorname == null) {
                    alert('感測器未選擇');
                }else{
                    axios.post(create_url,{
                        'issue_id'      : this.Config_Infos[index].id,
                        'sensor'        : this.Config_Infos[index].sensorname,
                        'value_config'  : this.Config_Infos[index].value,
                        'startT_config' : this.Config_Infos[index].start_time,
                        'endT_config'   : this.Config_Infos[index].end_time,
                        'switch_config' : this.Config_Infos[index].switch,
                    }).then(e=>{
                        console.log('create')
                    }).finally(c=>{
                        self.config_api()
                    });
                    this.$set(this.Controll_Edit,index,false)
                }
            },
            //更新資料
            update_sunbmit(index){
                axios.post(edit_url,{
                    'issue_id'      : this.Config_Infos[index].id,
                    'value_config'  : this.Config_Infos[index].value,
                    'startT_config' : this.Config_Infos[index].start_time,
                    'endT_config'   : this.Config_Infos[index].end_time,
                    'switch_config' : this.Config_Infos[index].switch,
                }).then(e=>{
                    console.log('update');
                }).finally(e=>{
                    this.config_api();
                });
                this.$set(this.Controll_Edit,index,false)
            },
            //刪除該項設定
            delete_config(id){
                let self = this;
                // this.config_api();
                alert('確定刪除?');
                //call delete function
                axios.post(delete_url,{
                    'issue_id' : id,
                })
                    .then(res=>{
                            console.log(res.data);
                        }
                    )
                    .finally(function () {
                            self.config_api();
                        }
                    );
            },
        },
        data(){
            return {
                //為選取時為新增感測器的值
                Sensor_Infos:[
                    {  name : null , sensor_op : null , max : 'A' , min : 'B' },
                    {  name : '土壤濕度' , sensor_op : 'WTL' , max : 80 , min : 40 }
                ],
                //為控制是否給予編輯
                Controll_Edit : [],
                //為當下設定數值的存放位置
                Config_Infos:[],
                //保留前一態
                Number_storage:[],
                //選擇編輯與新增
                EC_statue:[],
                csrf: document.head.querySelector('meta[name="csrf-token"]').content,
            };
        },
        created() {
            this.config_api() ;
        },

    }
</script>

<style scoped>
    .switch_open{
        background: linear-gradient(#ccff63, #228061);
        min-height: 100px;
        width: auto;
        border-radius: 15px;
        margin: 10px;
        padding: 20px;
        color : white;
    }
    .switch_close{
        background-color: gray;
        opacity: 1;
        min-height: 100px;
        width: auto;
        border-radius: 15px;
        margin: 10px;
        padding: 20px;
    }

    .top-body{
        height: 30px;
        width: 100%;
    }
    .sub-body{
        height: auto;
        margin: 15px 5px 0px 5px;
    }
    .font-size-16{
        font-size:16px;
    }

    .btn-info{
        background-color:cadetblue;
        color: white;
        padding: 5px 15px 5px 15px ;
        border-radius:5px;
    }

    .line-block{
        margin: 10px auto;
    }
    .line-block>span::after{
        width: 100px;
    }
    .img_way{
        position: absolute;
        right:5%;
    }

    .switch_box{
        display:inline-block;
        width: 40px;
        height: 20px;
        border-radius:100px;
        background-color: #ccc;
    }
    .switch_box .switch_btn{
        display:inline-block;
        width: 20px;
        height: 20px;
        border-radius:50%;
        background-color: #aaa;
    }
    .check_box{
        position:absolute;
        opacity:0;
    }
    .check_box:checked + .switch_box .switch_btn {
        margin-left: 20px;
        background-color: #2ca02c;
    }
    .check_box:checked + .switch_box{
        background-color: #5cd08d;
    }
</style>