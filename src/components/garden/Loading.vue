<template>
    <div class="loading">

    </div>
</template>

<script>
    // PINIA
    import { mapState } from 'pinia'
    // PINIA - seed growth store
    import { useFarmDetailsStore } from '@/stores/farmDetailsStore.js'
    // PINIA - farm information store
    import { useSeedStore } from '@/stores/seedGrowthStore.js'



    export default {
        name: 'Loading',
        data() {
            return {

            }
        },

        computed: {
            // pinia -- seed growth store
            ...mapState(useSeedStore, ['seeds']),

             // pinia -- farm information store
            ...mapState(useFarmDetailsStore, ['farm']),
        }
    }
</script>

<style scoped>
    .loading {
        height: 100vh;
        width: 100%;
        background: white;

        display: flex;
        justify-content: center;
    }
</style>