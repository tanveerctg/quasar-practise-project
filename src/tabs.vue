<template>
    <div class="tabs">
        <div v-for="(step,index) in inputList" :key="index" v-bind:class="{ active:index==currentState}" @click="$emit('tabHandler',index)">
            <span>{{step.step_label}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['inputList','currentState'],
        name: 'tabs'
    }
</script>

<style scoped>
  .tabs{
    display: flex;
    width: 100%;
  }
  .tabs > div{
    display:flex;
    flex:1;
    justify-content: center;
    align-items: center;
    padding:10px 0;
    background:#ececec;
    color:#555555;
    cursor:pointer;
  }
  .active{
    background:white !important;
    border-bottom:2px solid #824E81;
    font-weight:500;
    color:#824E81 !important;
  }
</style>