<template>
    <div >
       <MultistepForm :inputList="inputList" :activeState="activeState" @nextField="nextField"/>
    </div>
</template>

<script>
import MultistepForm from '../multistep-form.vue';

const emailPattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  name: 'allproduct',
  data:function(){
  return{
    activeState:0,
    inputList:[
      {step_name: 'step1',  step_label: 'Basic Info', field_list: [
        {name:'first_name',label:'First Name',type:'input',pattern:/[\s\S]{3,}/, rules:[ val => val && val.length >= 3 || 'Firstname should be atleast 3 characters'],hint:"First Name",required:true},
        {name:'last_name',label:'Last Name',type:'input',pattern:/[\s\S]{3,}/,rules:[ val => val && val.length >= 3 || 'Lastname should be atleast 3 characters'],hint:"Last Name",required:true},
        {name:'age',label:'Age',pattern:/^0*([0-9]|[1-8][0-9]|9[0-9]|100)$/ ,type:'input',rules:[ val => val && val <= 100 || 'Please enter a valid age'],hint:"Your age",required:true}
      ]
      },
      {
        step_name: 'step 2',  step_label: 'Email',field_list:[
          {name:'email',label:'Email',type:'email',pattern:emailPattern,rules:[ val => val && emailPattern.test(String(val).toLowerCase()) || 'Please enter correct email' ],hint:"Email",required:true}
        ]
      },
      {
        step_name: 'Final Step!',  step_label: 'Password',field_list:[
          {name:'password',label:'Password',type:'input',pattern:/[\s\S]{6,}/,rules:[ val => val && val.length >= 6 || 'Password should be atleast 6 character'],hint:"Password",required:true}
        ]
      }
      ]
    }
  },
  methods:{
    nextField:(a)=>{
      console.log(a)
    },
    previousField:(a)=>{
      console.log(a)
    }
  },
  components:{
    MultistepForm
  }
}
</script>

<style scoped>

  .wrapper{
    padding:20px 0 0 20px;
  }

  h5{
    margin:0;
  }
</style>