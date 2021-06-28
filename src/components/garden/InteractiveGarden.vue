<template>
    <div class="sidebar-wrapper">
       <sidebar
            @shouldShowGardenVegRoom='toggleVegRoom'
            @shouldShowTreeOrchard='toggleTreeOrchard'
            @shouldShowAnimalFarm='toggleAnimalFarm'
       ></sidebar>
    </div>
    <div class="garden"> 
        <loading v-if="shouldShowLoading"></loading>
        <garden-veg-room v-if="shouldShowGardenVegRoom"></garden-veg-room>
    </div>
    
</template>

<script>
import GardenVegRoom from '../garden_rooms/GardenVegRoom.vue'

import Loading from './Loading.vue'
import Sidebar from './Sidebar.vue'

    export default {
        name: 'InteractiveGarden',
        props: ['farm'],
        components: {
            Loading,
            GardenVegRoom,
            Sidebar,
        },
        data() {
            return {
                shouldShowLoading: true,
                shouldShowGardenVegRoom: false,
                shouldShowTreeOrchard: false,
                shouldShowAnimalFarm: false,
            }
        },
        methods: {
            toggleVegRoom() {
                this.shouldShowLoading = false;
                this.shouldShowTreeOrchard = false;
                this.shouldShowAnimalFarm = false;

                this.shouldShowGardenVegRoom = !this.shouldShowGardenVegRoom;
            },

            toggleTreeOrchard() {
                this.shouldShowLoading = false;
                this.shouldShowGardenVegRoom = false;
                this.shouldShowAnimalFarm = false;

                this.shouldShowTreeOrchard = !this.shouldShowTreeOrchard;
            },

            toggleAnimalFarm(){
                this.shouldShowLoading  = false;
                this.shouldShowGardenVegRoom = false;
                this.shouldShowTreeOrchard = false;
                
                this.shouldShowAnimalFarm = !this.shouldShowAnimalFarm;
            }
        }

    }
</script>


<style scoped>

    .garden {
        height: 100vh;
        width: 90%

    }

    .sidebar-wrapper {
        width: 300px; 
    }



</style>