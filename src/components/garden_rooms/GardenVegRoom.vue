<template>
       <div class="garden-vegetables--room">
           <div class="plot-holder">
                <garden-plot></garden-plot>
                <garden-plot></garden-plot>
                <garden-plot></garden-plot>
                <garden-plot></garden-plot>
                <garden-plot></garden-plot>
           </div>
     </div>
</template>

<script>
import GardenPlot from '../garden__plots/GardenPlot.vue'

export default {
    name:'GardenVegRoom',
    components: {
        GardenPlot
    }
}
</script>

<style scoped>
 .garden-vegetables--room {
    height: 100vh;
    width: 100%;
         
    background: url('../../assets/images/garden__background.jpg');
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
 }

 .plot-holder {
    position: absolute;
    top: 63%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
 }
</style>