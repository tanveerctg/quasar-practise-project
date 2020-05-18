<template>

    <div >
     <!-- <form  @submit="checkForm">
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value" :key="option.value">
        {{ option.text }}
        </option>
        <span>Selected: {{ selected }}</span>
     </select> 
       <q-input filled v-model="name" label="Name"  label-color="text-white" standout="bg-grey-1 text-grey-7" square/>
        <q-input filled v-model="modelNumber" label="Model Number"  label-color="text-white" standout="bg-grey-1 text-grey-7" square/>
        <q-input filled v-model="trackingCode" label="Tracking Code"  label-color="text-white" standout="bg-grey-1 text-grey-7" square/>
        <q-input filled v-model="unitPrice" label="Unit Price"  label-color="text-white" standout="bg-grey-1 text-grey-7" square/>
        <input type="submit" value="Add Product" class="addProductBtn"/>

        
      </form>-->
      <Formbuilder :inputs="inputs"/>
    </div>

</template>

<script>
import Formbuilder from '../Formbuilder.vue';
export default {
  name: 'addproduct',
  data:function(){
    return{
      name: null,
      modelNumber: null,
      trackingCode:null,
      unitPrice: null,
      inputs:[
        {name:'first_name',label:'First Name',type:'input'},
        {name:'last_name',label:'Last Name',type:'input'},
        {name:'full_name',label:'Full Name',type:'input'},
        {name:'selectBox',label:'Select Box',type:'select',options: [
          'A', 'B', 'C', 'D', 'E'
        ]
        },
        {name:'M',label:'Size',type:'checkbox'
        }
        ]
    }
  },
  methods:{
    checkForm:function(e){
      console.log('clicked',this.name);
      e.preventDefault();
    }
  },
  components:{
    Formbuilder
  }
}
</script>

<style scoped>
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