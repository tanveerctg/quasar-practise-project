<template>
        <div class="addProduct__wrapper" ref="myForm">
        <q-form @submit="checkForm">
            <div v-for="input in inputs" :key="input.name">
              <q-input v-if="input.type=='input'" filled v-model="formValues[input.name]" :label="input.label" label-color="text-white" :rules="input.rules"  :hint="input.hint" standout="bg-grey-1 text-grey-7" square/>
              <q-select v-if="input.type=='select'" filled v-model="formValues[input.name]" :options="input.options" :label="input.label" :hint="input.hint ? input.hint : null" :rules="input.rules ? input.rules : null"/>  
              <q-checkbox v-if="input.type=='checkbox'" left-label v-model="formValues[input.name]" :label="input.label" style="margin-top:-15px;margin-bottom:15px;"/>
            </div>
            <input type="submit" value="Submit" class="addProductBtn" :disabled="isDisabled"/>
           </q-form>
        </div>
</template>

<script>
import Vue from 'vue';

export default {
  props:['inputs'],
  name: 'Formbuilder',
  data:function(){
      return{
          formValues:{}
      }
  },
  methods:{
    checkForm:function(e){
       
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
        // send data to the database
        console.log(this.formValues)
      e.preventDefault();
    },
    checkSubmission:function(){
      if(!!this.formValues['first_name']){
        return false;
      }else{
         return true;
      }
    }
  },
  computed: {
    isDisabled() {
      const mapVal=this.inputs.filter(input=> input.required==true ).map(val=>val.name);
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
  }
  .addProduct__wrapper label{
    margin-bottom:15px;
  }
  h5{
    margin:0;
  }
  .addProductBtn{
    padding:5px 10px;
    background:none;
    border:2px solid #6B296A;
    color:#6B296A;
    font-weight:500;
    border-radius:20px;
    transition:all .1s ease-in;
    cursor:pointer;
    outline:none;
  }

</style>