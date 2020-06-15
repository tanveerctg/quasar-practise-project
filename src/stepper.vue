<template>
      <div class="steps">
          <div v-for="(step,index) in inputList" :key="index" :class="{addFlexFull:index<inputList.length-1}">
              <div class="step__wrapper">
                <span class="container">
                  <span class="digit" :class="{completedSteps:index <= completed}" >{{index+1}}</span>
                  <div :class="{rightLine:index<inputList.length-1}"></div>
                </span>
                <span class="step__name" :style="{ 'margin-left': index===inputList.length-1 ? '-20px' : '-7px','color': index <= currentState? '#824E81' : '#838383' }">{{step.step_name}}</span>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
        props:['inputList','currentState','completed'],
        name: 'stepper'
    }
</script>

<style scoped>
     .rightLine{
    height:5px;
    background:#C4C4C4;
    flex:1;
  }
   .step{
    display:flex;
    position: relative;
    align-items: center;
  }
  .steps{
    display:flex;
    padding:15px 20px;
  }
  .addFlexFull{
    flex:1;
  }
    .step__wrapper{
    display:flex;
    flex-direction: column;
    width:100%;
    padding-right:10px;
  }
    .container{
    display: flex;
    align-items: center;

  }
    .digit{
    display:flex;
    justify-content: center;
    align-items: center;
    width:20px;
    height:20px;
    padding:1px 5px;
    border:1px solid #838383;
    border-radius:50%;
    color:#838383;
  }
  .rightLine{
    height:1px;
    flex:1;
    margin-left:10px;
  }
  .step__name{
    align-self: flex-start;
    margin-top:5px;
    color:#838383;
  }
  .completedSteps{
    background:#824E81;
    color:white;
    font-weight:500;
    border:1px solid #824E81;
  }
</style>