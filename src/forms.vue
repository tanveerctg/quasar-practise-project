<template>
    <q-form @submit="checkForm" class="form">
            <transition>
              <h6 class="label_text">{{inputList[currentState].step_label}}</h6>
            </transition>
            <div v-for="input in inputList[currentState].field_list" :key="input.name">
              <transition>
                <q-input v-if="input.type=='email'" filled v-model="formValues[input.name]" :label="input.label" label-color="text-white" :rules="input.rules" :hint="input.hint" standout="bg-grey-1 text-grey-7" square/>
                <q-input v-if="input.type=='input'" filled v-model="formValues[input.name]" :label="input.label" label-color="text-white" :rules="input.rules"  :hint="input.hint" standout="bg-grey-1 text-grey-7" square/>
                <q-select v-if="input.type=='select'" filled v-model="formValues[input.name]" :label="input.label" :options="input.options"  :hint="input.hint ? input.hint : null" :rules="input.rules ? input.rules : null"/>
                <q-checkbox v-if="input.type=='checkbox'" left-label v-model="formValues[input.name]" :label="input.label" style="margin-top:-15px;margin-bottom:15px;"/>
              </transition>
            </div>
            <button v-if="currentState < inputList.length-1" @click="nextStep(currentState)" :disabled="checkNext" class="next">Next</button>
            <button v-if="currentState == inputList.length-1 || currentState > 0" @click="updateBack" class="back">Back</button>
            <input v-if="currentState == inputList.length-1" type="submit" value="Submit" class="addProductBtn" :disabled="isDisabled"/>
    </q-form>
</template>

<script>
    import transition from './transition.vue';
    export default {
        props:['inputList','currentState','completed'],
        name: 'forms',
        data:function(){
            return{
             formValues:{}
            }
        },
        components:{
           transition
        },
        methods:{
            checkForm:function(e){
                // send data to the database

                if(this.currentState === this.inputList.length-1){
                  console.log(this.formValues);
                  this.$q.notify({
                  message: 'Account Created Sucessfully.',
                  color: '#333333'
                })
                }

            e.preventDefault();
            },
            checkValues:function(event,val,pattern){
            if(pattern.test(String(event.target.value).toLowerCase())){

                this.formValues[val]=event.target.value;
            }else{
                this.formValues[val]=null;
            }

            },
            nextStep:function(index){

             let updateCompletedVal=this.completed;
             let updateCurrentVal=this.currentState;

              if(index == updateCompletedVal){
                if(updateCompletedVal < this.inputList.length-1){
                  updateCompletedVal++;
                  this.$emit('updateComplete',updateCompletedVal)
                }
              }

             updateCurrentVal++;
             this.$emit('updateCurrentState',updateCurrentVal)

            },
            updateBack:function(){
                let updateCurrentVal=this.currentState;
                updateCurrentVal--;
                this.$emit('updateCurrentState',updateCurrentVal)
            }
        },
        computed: {

            isDisabled() {
            const mapVal=this.inputList.map(step=>step.field_list.filter(input=> input.required==true)).flat();

            let res;

            for (const element of mapVal) {
                  const {name,pattern,required}=element;

                    // if required false then dont need to check further steps for that inputfield
                    if(!required) return;

                    // if an inputfield is required and the name of that field is empty but exists in the formValues Object ( data obj ) in that case res will always be true
                    if(!this.formValues[name]){ res=true; break;};

                    // checking the inputfield's value based on the regex
                    if(pattern.test(String(this.formValues[name]).toLowerCase())){
                        res=false;
                    }else{
                        res=true;
                        break;
                    }
              }
                  return res;
              }

            ,
            checkNext(){
            const mapVal=this.inputList[this.currentState].field_list.filter(input=> input.required==true );

            let res;
            for (const element of mapVal) {
              const {name,pattern,required}=element;

                // if required false then dont need to check further steps for that inputfield
                if(!required) return;

                // if an inputfield is required and the name of that field is empty but exists in the formValues Object ( data obj ) in that case res will always be true
                if(!this.formValues[name]){ res=true; break;};

                // checking the inputfield's value based on the regex
                if(pattern.test(String(this.formValues[name]).toLowerCase())){
                    res=false;
                }else{
                    res=true;
                    break;
                }
            }

            return res;
            }
        }
    }
</script>

<style scoped>
     .form{
    padding: 35px 20px 35px 20px;;
  }
  .border{
    position:absolute;
    bottom:0;
    left:0;
    height:2px;
    background: blue;
  }
  .addProduct__wrapper label{
    margin-bottom:15px;
  }
  h5{
    margin:0;
  }
  .addProductBtn{
    padding: 5px 10px;
    background: none;
    border: 2px solid #6B296A;
    color: #6B296A;
    font-weight: 500;
    border-radius: 20px;
    transition: all .1s ease-in;
    cursor: pointer;
    outline: none;
    display: block;
    margin: 25px 0 0 0;
    width: 150px;
  }
  .next{
    background:#035aa6;
    color:white;
    font-size:14px;
    border:none;
    outline:none;
    margin-right:5px;
    cursor:pointer;
    margin-top:5px;
  }
  .back{
    font-size:14px;
    border:none;
    outline:none;
    cursor:pointer;
    background:none;
    text-decoration: underline;
    font-weight: 500;
    margin-top:5px;
    color:#666666;
  }

  .label_text{
    margin:0 0 15px 0;
  }

</style>