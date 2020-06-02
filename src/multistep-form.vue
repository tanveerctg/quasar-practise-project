<template>
     <div class="addProduct__wrapper">
     
        <q-form @submit.prevent="checkForm"> 
            <div v-for="input in inputList[currentState].fields" :key="input.name">
            <transition
              appear
              enter-active-class="animated fadeIn "
              leave-active-class="animated fadeOut"
            >
              <q-input v-if="input.type=='email'" filled :label="input.label" label-color="text-white" :rules="input.rules" v-model="formValues[input.name]" :hint="input.hint" standout="bg-grey-1 text-grey-7" square/>
              <q-input v-if="input.type=='input'" filled v-model="formValues[input.name]" :label="input.label" label-color="text-white" :rules="input.rules"  :hint="input.hint" standout="bg-grey-1 text-grey-7" square/>
              <q-select v-if="input.type=='select'" filled v-model="formValues[input.name]" :options="input.options" :label="input.label" :hint="input.hint ? input.hint : null" :rules="input.rules ? input.rules : null"/>  
              <q-checkbox v-if="input.type=='checkbox'" left-label v-model="formValues[input.name]" :label="input.label" style="margin-top:-15px;margin-bottom:15px;"/>
            </transition>
            </div>
            <button v-if="currentState < inputList.length-1" @click="currentState++" :disabled="checkNext" class="next">Next</button>
            <button v-if="currentState == inputList.length-1 || currentState > 0" @click="currentState--" class="back">Back</button>
            <input v-if="currentState == inputList.length-1" type="submit" value="Submit" class="addProductBtn" :disabled="isDisabled"/>
        </q-form>
     </div>
</template>

<script>
import Vue from 'vue';

export default {
  props:['inputList','activeState'],
  name: 'multistep-form',
  data:function(){
      return{
          currentState:this.activeState,
          formValues:{}
      }
  },
  methods:{
    checkForm:function(e){      
        // this.$q.notify({
        //   color: 'green-4',
        //   textColor: 'white',
        //   icon: 'cloud_done',
        //   message: 'Submitted'
        // })
        // send data to the database
        if(this.currentState !==0){
          // const {border}=this.$refs;
          // border.style.width="100%";
          console.log(this.formValues)
        }
 
      e.preventDefault();
    },
    checkValues:function(event,val,pattern){
      if(pattern.test(String(event.target.value).toLowerCase())){

        this.formValues[val]=event.target.value;
      }else{
        this.formValues[val]=null;
      }
      
    }
  },
  computed: {
    
    isDisabled() {
      const mapVal=this.inputList[this.currentState].fields.filter(input=> input.required==true ).map(val=>val.name);
      let res;
      for (const element of mapVal) {
        if(this.formValues[element]) {
          res=false;
        }else{
          res=true;
          break;
        }
      }
      return res;
    },
    checkNext(){
      const mapVal=this.inputList[this.currentState].fields.filter(input=> input.required==true );
      //collect name and pattern and check 
     
      let res;
      for (const element of mapVal) {
        const {name,pattern,required}=element;
        if(!required) return;

        if(this.formValues[name]){
          if(pattern.test(String(this.formValues[name]).toLowerCase())){
            res=false;
          }else{
            res=true;
            break;
          }
        }else{
          res=true;
        }
      }
      return res;
    }
  }
}
</script>

<style>
  .q-select__dropdown-icon{
    color:black !important;
  }
  .q-item__section--main .q-item__label{
    color:black !important;
  }
  .addProduct__wrapper{
    background:white;
    padding:30px 10px;
    max-width:400px;
    width:100%;
    position:relative;
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
    margin: 15px auto 0 auto;
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
  }
  .back{
    font-size:14px;
    border:none;
    outline:none;
    cursor:pointer;
    background:none;
    text-decoration: underline;
    font-weight: 500;
  }
</style>