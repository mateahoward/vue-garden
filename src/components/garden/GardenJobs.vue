<template>
    <div class="farm-job" v-for="(job, index) in jobs" :key="index">
        <span>
            <i v-if='job.isCompleted'>🥇</i>
        </span>
        <p> {{ job.description }}</p>
    </div>
    
</template>

<script>

    // PINIA
    import { mapState } from 'pinia'

    // PINIA - farm jobs store
    import { useJobsStore } from '@/stores/farmJobsStore.js'


    export default {
        name: 'GardenJobs',
        
        computed: {   
            // pinia -- seed growth store
            ...mapState(useJobsStore, ['jobs']),
        },        
    }
</script>


<style scoped>

    .farm-job {
        display: flex;
        align-items: center;
    }

    .farm-job span {
        height: 30px;
        width: 30px;
        background: white;
        border-radius: 100%;
        margin-right: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 2px solid #35495e;
    }

    .farm-job span i {
        font-style: normal;
    }
    .farm-job p {
        font-size: 14px;
        color: white;
        font-family:  'Arial Narrow Bold', sans-serif
    }
</style>