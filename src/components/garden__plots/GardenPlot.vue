<template>

   <div class="garden-plot-wrapper">
        <div class="drop-zone-wrapper" v-if="!plantedSeed">
            <div class='drop-zone'>  + </div>
        </div>

        <div class="drop-zone-wrapper" v-else>
            <div class='drop-zone--planted'></div>
        </div>

        <div class="garden-plot">
            <div class="vertical-planks">
                <div class="vertical-planky"></div>
                <div class="vertical-planky"></div>
            </div>

            <div class="horizontal-planks">
                <div class="horizontal-planky"></div>
                <div class="horizontal-planky"></div>
                <div class="horizontal-planky"></div>

                <!-- SEED NAME --> 
                <p class="plant-name" v-if="plantedSeed"> 
                    {{ plantedSeed.name }} 
                </p>
                <!-- SEED NAME -- NOT CHOSEN -->
                <p class="plant-name" v-else> 
                    empty
                </p>

            </div>   
        </div>
   </div>
</template>

<script>
export default {
    name: 'GardenPlot',
    props: ['plantedSeed', 'upackagedSeeds'],

    components: {
    },

    data() {
        return {
           
        }
    }
}
</script>

<style scoped>

    .garden-plot {
        position: relative;
        display: flex;
        margin: 20px;
        height: 200px;
    }

    .vertical-planks {
        display: flex;
        justify-content: space-between;
        width: 200px;
    }

    .horizontal-planks {
        position: absolute;
        top: 8px;
        z-index: 1;
        left: -5px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .horizontal-planky {
        height: 25px;
        width: 210px;
        background:#a9633d;
        margin-bottom: 2px;
        box-shadow: 0 4px 2px -2px #5f3721;
    }

    .vertical-planky {
        height: 90px;
        width: 20px;
        background:#a9633d; 
        box-shadow: 0 4px 2px -2px #5f3721;

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .plant-name {
        color: #582806;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;

        position: absolute;
        top: 10px;
    }

    .drop-zone-wrapper--planted {
        display: flex;
    }
    
    .drop-zone--planted {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        background: transparent;
        height: 100px;
        width: 180px;

        margin: 30px;
        border-radius: 100%;
        border-top: 2px dashed black;
        background: brown;

        position: absolute;
        top: 105px;
    }

    .drop-zone-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .drop-zone {
        height: 90px;
        width: 90px;
        border-radius: 3px;
        border: 5px dotted rgb(77, 74, 74);
        margin: 15px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: rgb(77, 74, 74);
        font-size: 45px;

        background: white;
    }

</style>