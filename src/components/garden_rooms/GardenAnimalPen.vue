<template>
    <div class="animal-pen">
        <div class="animal-pen-content">
            <!-- cleanup trash after finishing a meal -->
            <div class="piggy-trash-wrapper">
                
            </div>

            <!-- piggy as our main animal -->
            <div class="piggy-wrapper">
                <piggy></piggy>
            </div>

            <!-- in place of animal feeder -->
            <div class="piggy-food-wrapper">
                <garden-plot :seed="false"></garden-plot>
            </div>
        </div>
    </div>
</template>

<script>
import Piggy from '../garden_animals/Piggy.vue'
import GardenPlot from '../garden__plots/GardenPlot.vue'

// PINIA
import { mapStores, mapActions } from 'pinia'

 // PINIA - farm jobs store
import { useJobsStore } from '@/stores/farmJobsStore.js'

export default {
    name: 'AnimalPen',
    components: {
        Piggy,
        GardenPlot,
    },
    created() {
       this.jobsStore.markJobAsComplete('Say hello to Piggy');
    },
    methods: {
         // pinia - jobs store -- methods
        ...mapActions(useJobsStore, ['markJobAsComplete']),
    },
    computed: {
        // pinia -- seed growth store
        ...mapStores(useJobsStore),
    }
}
</script>


<style scoped>

    .animal-pen {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;


        background: url('../../assets/images/garden__background.jpg');
        background-size: cover;
    }

    .animal-pen-content {
        position: relative;
        top:200px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>