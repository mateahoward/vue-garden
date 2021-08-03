<template>
   <div class="interactive-garden">
        <div class="sidebar-wrapper">
            <sidebar
                @shouldShowGardenVegRoom  = 'toggleVegRoom'
                @shouldShowTreeOrchard    = 'toggleTreeOrchard'
                @shouldShowAnimalFarm     = 'toggleAnimalFarm'
            ></sidebar>
        </div>
        <div class="garden-rooms"> 
            <loading            v-if="shouldShowLoading">               </loading>
            <garden-veg-room    v-if="shouldShowGardenVegRoom">         </garden-veg-room>
            <garden-animal-pen  v-if="shouldShowAnimalFarm">            </garden-animal-pen>
            <garden-orchard     v-if="shouldShowTreeOrchard">           </garden-orchard>
        </div>
   </div>
    
</template>

<script>
import Loading from './Loading.vue'
import Sidebar from './Sidebar.vue'
import GardenAnimalPen  from '../garden_rooms/GardenAnimalPen.vue'
import GardenOrchard    from '../garden_rooms/GardenOrchard.vue'
import GardenVegRoom    from '../garden_rooms/GardenVegRoom.vue'

    export default {
        name: 'InteractiveGarden',
        components: {
            Loading,
            Sidebar,
            GardenAnimalPen,
            GardenVegRoom,
            GardenOrchard,
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

            // SHOWS VEG ROOM
            toggleVegRoom() {
                this.shouldShowLoading      = false;
                this.shouldShowTreeOrchard  = false;
                this.shouldShowAnimalFarm   = false;

                this.shouldShowGardenVegRoom = !this.shouldShowGardenVegRoom;
            },

             // SHOWS TREE ORCHARD
            toggleTreeOrchard() {
                this.shouldShowLoading       = false;
                this.shouldShowGardenVegRoom = false;
                this.shouldShowAnimalFarm    = false;

                this.shouldShowTreeOrchard = !this.shouldShowTreeOrchard;
            },

            // SHOWS ANIMAL FARM
            toggleAnimalFarm(){
                this.shouldShowLoading       = false;
                this.shouldShowGardenVegRoom = false;
                this.shouldShowTreeOrchard   = false;
                
                this.shouldShowAnimalFarm = !this.shouldShowAnimalFarm;
            },
        },


    }
</script>


<style scoped>

    .interactive-garden {
        display: flex;
        width: 100%;
    }

    .garden-rooms {
        height: 100vh;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

     .sidebar-wrapper {
        width: 300px;
     }

    @media (max-width: 980px) {

        .interactive-garden {
            flex-direction: column;
        }
        .sidebar-wrapper {
            width: 100%;
        }

        .garden-rooms {
            width: 100%;
        }
    }

</style>