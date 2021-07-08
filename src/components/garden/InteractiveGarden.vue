<template>
    <div class="sidebar-wrapper">
        <sidebar
            @shouldShowGardenVegRoom  = 'toggleVegRoom'
            @shouldShowTreeOrchard    = 'toggleTreeOrchard'
            @shouldShowAnimalFarm     = 'toggleAnimalFarm'
        ></sidebar>
    </div>
    <div class="garden"> 
        <loading            v-if="shouldShowLoading">               </loading>
        <garden-veg-room    v-if="shouldShowGardenVegRoom">         </garden-veg-room>
        <garden-animal-pen  v-if="shouldShowAnimalFarm">            </garden-animal-pen>
        <garden-orchid      v-if="shouldShowTreeOrchard">           </garden-orchid>
    </div>
    
</template>

<script>
import Loading from './Loading.vue'
import Sidebar from './Sidebar.vue'

import GardenAnimalPen  from '../garden_rooms/GardenAnimalPen.vue'
import GardenOrchid     from '../garden_rooms/GardenOrchid.vue'
import GardenVegRoom    from '../garden_rooms/GardenVegRoom.vue'

    export default {
        name: 'InteractiveGarden',
        components: {
            Loading,
            Sidebar,
            GardenAnimalPen,
            GardenVegRoom,
            GardenOrchid,
        },
        data() {
            return {
                shouldShowLoading:          true,
                shouldShowGardenVegRoom:    false,
                shouldShowTreeOrchard:      false,
                shouldShowAnimalFarm:       false,
            }
        },
        methods: {

            toggleVegRoom() {
                this.shouldShowLoading      = false;
                this.shouldShowTreeOrchard  = false;
                this.shouldShowAnimalFarm   = false;

                this.shouldShowGardenVegRoom = !this.shouldShowGardenVegRoom;
            },

            toggleTreeOrchard() {
                this.shouldShowLoading       = false;
                this.shouldShowGardenVegRoom = false;
                this.shouldShowAnimalFarm    = false;

                this.shouldShowTreeOrchard = !this.shouldShowTreeOrchard;
            },

            toggleAnimalFarm(){
                this.shouldShowLoading       = false;
                this.shouldShowGardenVegRoom = false;
                this.shouldShowTreeOrchard   = false;
                
                this.shouldShowAnimalFarm = !this.shouldShowAnimalFarm;
            }
        }

    }
</script>


<style scoped>

    .garden {
        height: 100vh;
        width: 90%;
        overflow-y: scroll;
    }

    .sidebar-wrapper {
        width: 300px; 
    }

</style>