<template>
    <main class="garden-vegetables--room">

        <!-- garden instructions --> 
        <section class="garden-vegetables-instruction" v-if="shouldShowInstructions">
            <p> Plant your seeds by dragging them towards planters below</p>
            <button @click="toggleInstructions">Okey dokey</button>
        </section>

        <div class="garden-vegetables-instruction--hidden" 
            v-if="!shouldShowInstructions"
            @click="toggleInstructions"
        >         
            <div class="information-icon">
                <p> i </p>
            </div>
        </div>

        <div class="garden-vegetables__content">
            <!-- garden seeds --> 
            <section class='garden-seeds'>
                <garden-seed 
                    v-for='(item,name) in notPlantedSeeds' 
                    :key='name'
                    :seed="item"  
                    @draggable='true'
                    @dragstart='startDrag($event, item)'
                >
                </garden-seed>
            </section>

           <!-- GARDEN PLOTS --> 
            <section class="garden-plots-displayed">
                <div class="garden-plot-container">
                    <div class="garden-plot__row">
                        <garden-plot
                            v-for="(seed,index) in seeds"
                            :key="index"
                            :seed='seed'
                            @drop='onDrop($event, 2)' 
                            @dragover.prevent
                            @dragenter.prevent 
                            @touchend='onDrop($event, 2)'            
                        >
                        </garden-plot> 
                    </div>
                </div>
           </section>
        </div>
     </main>
</template>

<script>
import GardenPlot from '../garden__plots/GardenPlot.vue'
import GardenSeed from '../garden_seeds/GardenSeed.vue'

// PINIA
import { mapStores, mapActions } from 'pinia'

// PINIA - seed growth store
import { useSeedStore } from '@/stores/seedGrowthStore.js'

export default {
    name:'GardenVegRoom',
    
    components: {
        GardenPlot,
        GardenSeed
    },
    data() {
        return {
            shouldShowInstructions: true,
            seeds: [], 
        }
    },
    mounted() {
        // get plant seeds from pinia
        this.seeds = this.seedGrowthStore.seeds;
    },

    methods: {
       
        toggleInstructions() {
            this.shouldShowInstructions = !this.shouldShowInstructions;
        },

        startDrag: (event, seed) => {
            event.dataTransfer.setData('seedID', seed.id);
        },

        onDrop (event, list) {
            let seedID = event.dataTransfer.getData('seedID');
            let seed = this.seeds.find(seed => seed.id == seedID);
            seed.list = list;
            
            this.incrementDefaultGrowthLevel(seed);
        },

        incrementDefaultGrowthLevel(seed){
            this.seedGrowthStore.incrementDefaultGrowthLevel(seed);

            this.prepareForHarvest(seed);
        },

        prepareForHarvest(seed){
            if(seed.defaultGrowthLevel === 2) {
                setTimeout(() => {
                    this.seedGrowthStore.incrementDefaultGrowthLevel(seed);  
                }, 10000); 
            }
        },
        isReadyForHarvest(seed) {
            return (seed.defaultGrowthLevel === 3)
        },

         // pinia - seed growth store -- methods
         ...mapActions(useSeedStore, ['increment']),
    },
    computed: {

        notPlantedSeeds() {
            return this.seeds.filter(seed => seed.list === 1)
        },

        plantedSeeds() {
            return this.seeds.filter(seed => seed.list === 2)
        },

         // pinia -- seed growth store
        ...mapStores(useSeedStore),
    }
}
</script>

<style scoped>

    .garden-vegetables--room {
        height: 100vh;
        width: 100%;
            
        background: url('../../assets/images/veg-room-background.jpg');
        background-size: cover;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        overflow: hidden;
 
    }

    .garden-vegetables-instruction {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #bf9f8d;
        border-radius: 4px;
        height: 110px;
        width: 60%;
    }
    .garden-vegetables-instruction p {
        color: white;
    }

    .garden-vegetables-instruction--hidden {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-self: flex-end;

        background: white;
        height: 20px;
        width: 20px;

        border-radius: 100%;
        border: 1px solid #bf9f8d;

        font-weight: bold;

        position: absolute;
        right: 40px;
        top: 40px;
    }
    .garden-vegetables-instruction--hidden p {
        color: #bf9f8d;
    }

    .garden-vegetables-instruction--hidden:hover {
        background: #bf9f8d;
        color: white;
    }
    .garden-vegetables-instruction--hidden:hover p {
        color: white;
    }

    .garden-vegetables__content {
        display: flex;
        flex-direction: column;
        min-height: 500px;
    }

     .garden-seeds {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        height: 200px;
    }

    .garden-plots-displayed {
        display: flex;
        align-items: flex-end;
        justify-content: center; 
        position: relative;
        top: 120px;
    }

    .garden-plot-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    .garden-plot__row {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    @media (max-width: 980px) {
        .garden-rooms {
            width: 100vw;
        }
    }
</style>