<template>
    <div class="piggy">

        <div class="ears">
            <div class="ear-left">  </div>
            <div class="ear-right">  </div>
        </div>

        <div class="head">

            <div class="eyes">
                <div class="eye-left"><div class="dot"> </div></div>
                <div class="eye-right"><div class="dot"> </div></div>
            </div>

            <div class="nose">
                <div class="nostril-left"></div>
                <div class="nostril-right"></div>
            </div>

        </div>

        <div class="body"></div>

        <div class="feet">
            <div class='foot-left'></div>
            <div class='foot-right'></div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Piggy',

}
</script>

<style scoped>
 .piggy {
    display: flex;
    flex-direction: column;
 }

 .ears {
    display: flex;
    position: relative;
 }
 
  .ear-left{
        transform: rotate(-20deg);
        background: #582806;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        background: #ffabab;
        width: 40px;
        height: 40px;

        box-shadow: -4px -1px 2px -2px #5f3721;
        position: absolute;
  }
 .ear-right {
        transform: rotate(-20deg);
        background: #582806;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        background: #ffabab;
        width: 40px;
        height: 40px;

        box-shadow: -1px -3px 2px -2px #5f3721;

        position: absolute;
 }

 .ear-left {
    top: -10px;
    left: 0;

 }
.ear-right {
    top: -10px;
    left: 90px;
 }

 .head {
    background: #ffabab;
    width: 130px;
    height: 130px;
    border-radius: 100%;
    display: flex;
    align-content: center;
    position: relative;
    z-index: 1;
    box-shadow: -2px 5px 2px -2px #5f3721;
 }

 .eyes {
    display: flex;
    position: absolute;
    top: 20px;
    left: 15px;
 }

 .eye-left, 
 .eye-right {
    background: white;
    border: 3px solid #402424;
    height: 30px;
    width: 25px;
    border-radius: 100%;
    margin: 10px;
 }

 .dot {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: #402424;
    position: relative;
    top: 10px;
    left: 2.3px;
 }

 .nose {
    background: #ffabab;
    height: 25px;
    width: 35px;
    border: 3px solid #402424;
    border-radius: 70%;
    position: absolute;
    top: 70px;
    left: 45px;
    display: flex;
 }

 .nostril-left, 
 .nostril-right {
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background: #402424;
    position: relative;
    top: 3px;
    margin: 5px;
 }

 .body {
    width: 180px;
    height: 180px;
    background: #ffabab;
    border-radius: 100%;
    position: relative;
    top: -80px;
    left: -20px;
    box-shadow: 3px 0px 2px -2px #5f3721;
 }

 .feet {
     display: flex;
     position: relative;
     top: -120px;
     z-index: 1;
 }

 .foot-left,
 .foot-right {
    height: 30px;
    width: 50px;
    background: #402424;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    margin: 8px;
    border: 1px solid black;
 }
</style>
