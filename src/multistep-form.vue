<template>
     <div class="addProduct__wrapper">

        <tabs v-on:tabHandler="tabHandler" :inputList="inputList" :currentState="currentState"/>
        <stepper :inputList="inputList" :currentState="currentState" :completed="completed"/>
        <forms :inputList="inputList" :currentState="currentState" :completed="completed" v-on:updateComplete="updateComplete" v-on:updateCurrentState="updateCurrentState"/>

     </div>
</template>

<script>
import Vue from 'vue';
import tabs from './tabs.vue';
import stepper from './stepper.vue';
import forms from './forms.vue';

export default {
  props:['inputList','activeState'],
  name: 'multistep-form',
  data:function(){
      return{
          currentState:this.activeState,
          completed:0
      }
  },
  methods:{
    tabHandler:function(index){
      this.currentState=index;
     },
    updateComplete:function(c){
      this.completed=c;
    },
    updateCurrentState:function(e){
      this.currentState=e;
    }
  },
  components:{
    tabs,
    stepper,
    forms
  }
}
</script>

<style scoped>
  .q-select__dropdown-icon{
    color:black !important;
  }
  .q-item__section--main .q-item__label{
    color:black !important;
  }
    .addProduct__wrapper{
    background:white;
    max-width:450px;
    width:100%;
    position:relative;
  }
</style>