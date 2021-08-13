<template>
    <div class="garden-trees">
        <div class="work-in-progress">
            <p> Garden Orchard feature is currently being worked on.</p>
            <p> Please return to Veg Garden or visit Animal Farm for now.</p>
        </div>
    </div>
</template>

<script>
// PINIA
import { mapStores, mapActions } from 'pinia'

 // PINIA - farm jobs store
import { useJobsStore } from '@/stores/farmJobsStore.js'

export default {
    name: "GardenOrchard",
    created() {
      this.jobsStore.markJobAsComplete('Visit tree orchid');
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
.garden-trees {
    background: #a5d436;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-content: center;
}

.work-in-progress {
    background: white;
    position: relative;
    top: 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    text-align: center;


    height: 200px;
    width: 300px;

    padding: 10px;
    border-radius: 8px;
}
</style>
