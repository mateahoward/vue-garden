<template>
    <div class="garden-trees">
        <div class="pine-tree-row">
            <pine-tree></pine-tree>
        </div>

        <div class="fruit-tree-row">
            <fruit-tree></fruit-tree>
        </div>
    </div>
</template>

<script>
// PINIA
import { mapStores, mapActions } from 'pinia'

 // PINIA - farm jobs store
import { useJobsStore } from '@/stores/farmJobsStore.js'
import PineTree from '../garden_trees/PineTree.vue'
import FruitTree from '../garden_trees/FruitTree.vue'

export default {
    name: "GardenOrchard",
    components: {
        PineTree,
        FruitTree,

    },
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

.pine-tree-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; 
    width: 100%;
}
.fruit-tree-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
}
</style>
