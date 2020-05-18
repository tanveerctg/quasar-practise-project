<template>
        <div class="addProduct__wrapper">
          <form @submit="checkForm">
            <div v-for="input in inputs" :key="input.name">
              <q-input v-if="input.type=='input'" filled v-model="formValues[input.name]" :label="input.label" label-color="text-white" standout="bg-grey-1 text-grey-7" square/>
              <q-select v-if="input.type=='select'" filled v-model="formValues[input.name]" :options="input.options" label="Filled" style="color:black;"/>  
              <q-checkbox v-if="input.type=='checkbox'" left-label v-model="formValues[input.name]" :label="input.label" />
            </div>
            <input type="submit" value="Add Product" class="addProductBtn"/>
    
          </form>
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
      console.log('clicked',this.formValues);
      e.preventDefault();
    }
  },
  created:function(){   
    console.log('inputs',this.inputs)
  }
}
</script>

<style scoped>
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
  .addProductBtn:hover{
    background:#6B296A;
    color:#ffffff;
  }
</style>