<template>
        <div class="addProduct__wrapper" ref="myForm">
        <q-form @submit="checkForm">
            <div v-for="input in inputs" :key="input.name">
              <q-input v-if="input.type=='input'" filled v-model="formValues[input.name]" :label="input.label" label-color="text-white" :rules="[ val => val && val.length > 0 || input.rules]"  :hint="input.hint" standout="bg-grey-1 text-grey-7" square/>
              <q-select v-if="input.type=='select'" filled v-model="formValues[input.name]" :options="input.options" :label="input.label" :hint="input.hint" :rules="[ val => val && val.length > 0 || input.rules]"/>  
              <q-checkbox v-if="input.type=='checkbox'" left-label v-model="formValues[input.name]" :label="input.label" style="margin-top:-15px;margin-bottom:15px;"/>
            </div>
            <input type="submit" value="Add Product" class="addProductBtn" :disabled="isDisabled"/>
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
      // evaluate whatever you need to determine disabled here...
      if(!this.formValues['first_name'] || !this.formValues['last_name'] || !this.formValues['full_name'] || !this.formValues['age']){
        return true;
      }else{
        return false;
      }
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