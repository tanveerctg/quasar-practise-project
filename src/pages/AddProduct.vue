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
      <formbuilder :inputs="inputs"/>
    </div>

</template>

<script>
import formbuilder from '../form-builder.vue';
export default {
  name: 'addproduct',
  data:function(){
    return{
      name: null,
      modelNumber: null,
      trackingCode:null,
      unitPrice: null,
      inputs:[
        {name:'first_name',label:'First Name',type:'input', rules:[ val => val && val.length >= 8 || 'Firstname should be atleast 8 characters'],hint:"First Name",required:true},
        
        {name:'last_name',label:'Last Name',type:'input',rules:[ val => val && val.length >= 6 || 'Lastname should be atleast 6 characters'],hint:"Last Name",required:true},
        
        {name:'full_name',label:'Full Name',type:'input',rules:[ val => val && val.length >= 10 || 'Fullname should be atleast 10 characters'],hint:"Full Name",required:true},
        
        {name:'age',type:'select',label:'Age',options: [
          '10-20', '21-30', '31-40', '41-50', '51-60'
        ],hint:"",rules:[val => !!val || 'Age is required']
        ,required:true
        },
        
        {name:'hobby',type:'select',label:'Hobby',options: [
          'Gaming', 'Programming', 'Gardening', 'Other'
        ]
        ,required:false
        },
        
        {name:'married',label:'Married',type:'checkbox' ,required:false
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
    formbuilder
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