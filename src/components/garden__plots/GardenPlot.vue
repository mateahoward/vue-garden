<template>
   <div class="garden-plot-wrapper">
        <div class="drop-zone-wrapper noselect" v-if="notPlanted">
            <div class='drop-zone'>  + </div>
        </div>

        <div class="drop-zone-wrapper--planted noselect" v-if="isPlanted">
            <div class="drop-zone--sparkles">
               <img src="../../assets/images/growing-plant.gif" alt="brown coloured dirt for planters">
            </div>

            <div class='drop-zone__plant-dirt'></div>
        </div>

        <div class="harvest-ready noselect" v-if="isReadyForHarvest">

            <img v-if="seed.name === 'Radish'"   src="../../assets/images/radish.gif"   :alt="seed.name" @click="harvestVegetable(seed)" :class="{'animate-harvest' : seed.harvested}">
            <img v-if="seed.name === 'Corn'"     src="../../assets/images/corn.gif"     :alt="seed.name" @click="harvestVegetable(seed)" :class="{'animate-harvest' : seed.harvested}">
            <img v-if="seed.name === 'Carrot'"   src="../../assets/images/carrot.gif"   :alt="seed.name" @click="harvestVegetable(seed)" :class="{'animate-harvest' : seed.harvested}">
            <img v-if="seed.name === 'Pumpkin'"  src="../../assets/images/pumpkin.gif"  :alt="seed.name" @click="harvestVegetable(seed)" :class="{'animate-harvest' : seed.harvested}">
        
            <div class='drop-zone__plant-dirt'></div>
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
                <p class="plant-name noselect" v-if="isPlanted || isReadyForHarvest"> 
                    {{ seed.name }} 
                </p>
                <!-- SEED NAME -- NOT CHOSEN -->
                <p class="plant-name noselect" v-else> 
                    empty
                </p>

            </div>   
        </div>
   </div>
</template>

<script>
// PINIA
import { mapActions,mapStores, mapState } from 'pinia'

// PINIA - seed growth store
import { useSeedStore } from '@/stores/seedGrowthStore.js'

 // PINIA - farm jobs store
import { useJobsStore } from '@/stores/farmJobsStore.js'

export default {
    name: 'GardenPlot',
    data(){
        return {
        }
    },
    props: ['seed'],
    created() {

    },
    methods: {
        harvestVegetable(seed){
            this.markAsHarvested(seed);
            this.updateJobsStore();
            
        },
        markAsHarvested(seed){
            this.seedGrowthStore.markSeedAsHarvested(seed);  
        },
        updateJobsStore() {
            this.jobsStore.markJobAsComplete('Harvest all produce');
        },
         // pinia - seed growth store -- methods
         ...mapActions(useSeedStore, ['increment']),
          // pinia - jobs store -- methods
        ...mapActions(useJobsStore, ['markJobAsComplete']),
    },
    computed: {
        notPlanted() {
            return (this.seed.defaultGrowthLevel === 1)
        },
        isPlanted() {
            return (this.seed.defaultGrowthLevel === 2)
        },
        isReadyForHarvest() {
            return (this.seed.defaultGrowthLevel === 3)
        },
        // pinia -- seed growth store
        ...mapStores(useSeedStore),
         ...mapState(useSeedStore, ['seeds']),

           // pinia -- seed growth store
        ...mapStores(useJobsStore),
    }
}
</script>

<style scoped>

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
    
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 90px;
    }

    .drop-zone--sparkles {
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 15px;
    }

    .drop-zone--sparkles img {
        width: 80px;
        height: 80px;
    }
    
    .drop-zone__plant-dirt {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        background: transparent;
        height: 100px;
        width: 180px;

        border-radius: 100%;
        border-top: 5px dashed #42200A;
        background: #5F3813;
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

    .harvest-ready  {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .harvest-ready .drop-zone__plant-dirt {
        position: relative;
        top: 80px;
        left: 30px;
    }

    .harvest-ready img {
        height: 150px;
        width: 150px;

        position: relative;
        top: 130px;
        left: 40px;
        z-index: 5;

        cursor: pointer;
    }

    .harvest-ready img.animate-harvest {
        animation-name: moveUp;
        animation-duration: 4s;
        animation-timing-function: ease-out;
    }

    @keyframes moveUp {
        0% {
            top: 130px;
            height: 150px;
            width: 150px;
        }
        25% {
            top: -20px;
            height: 50px;
            width: 50px;
        }
        50% {
            top: -30px;
            height: 20px;
            width: 20px;
        }
        100% {
            top: -30px;
            height: 0px;
            width: 0px;
        }
    }
</style>