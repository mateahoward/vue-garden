<template>
    <div class="sidebar">
        <img src="../../assets/images/vue-logo.png" @click="refreshPage"/>

        <!-- WELCOME -->   
        <section class="welcome" v-if="shouldShowWelcome">
            <h1> Welcome 👋</h1>

            <h1> Getting Started:</h1>

            <p> Please set a name for your new farm </p>

            <input  v-model="farmName">
            <button @click="toggleStepTwo"> save and continue </button>
        </section>

        <!-- WELL DONE -->
        <section class="well-done" v-if="farmHasBeenNamed && shouldShowWellDone">
            <h1> Good Job 👏 </h1>
            <p> Your new farm name has been set to: </p>
            <span> '{{farmName}}'</span>
            <p> Are you ready to look at our tools and jobs to be done? </p>

            <button @click="toggleGardenTools"> Show me the tools </button>
        </section>

        <!-- SHOW GARDEN ROOMS -->
        <section class="garden-rooms" v-if="canUseFarmTools">
            <ul>
                <li @click="toggleGardenSeeds">  Veg Garden     </li>
                <li @click="toggleTreeOrchard">  Tree Orchard   </li>
                <li @click="toggleAnimalFarm">   Animal Farm    </li>
            </ul>
        </section>

        <section class="garden-jobs" v-if="canUseFarmTools">
            <garden-jobs></garden-jobs>
        </section>


        <!--- SIGNATURE -->
        <footer>
           <p> This project is still being worked on and some features may not be available just yet 👀 </p>       
        </footer>
  
    </div>
</template>


<script>
    import { mapStores, mapActions } from 'pinia'
    import { useFarmDetailsStore } from '@/stores/farmDetailsStore.js'
    import GardenJobs from '@/components/garden/GardenJobs.vue'

    export default {
        name: 'Sidebar',
        components: {
            GardenJobs
        },

        data(){
            return {
                farmName: '',
                          
                canUseFarmTools: false,
                shouldShowWelcome: true,
                shouldShowWellDone: false,
                farm: [],
               
            }
        },
        emits: [
            'shouldShowTreeOrchard',
            'shouldShowGardenVegRoom',
            'shouldShowAnimalFarm',
        ],
        mounted() {
            if(this.allSeedsArePlanted){
                this.updateJobsStore();
            }
        },
        methods: {
            ///////////////////////////////////////////
            ////////// HELPERS ///////////////////////
            ///////////////////////////////////////////
            refreshPage() {
              location.reload();
            },

            ///////////////////////////////////////////
            ////////// GETTING STARTED ///////////////
            ///////////////////////////////////////////
            toggleStepTwo(){
                if(this.farmHasBeenNamed){
                  this.shouldShowWelcome = !this.shouldShowWelcome;
                  this.shouldShowWellDone = !this.shouldShowWellDone;
                }

                if(this.farmHasBeenNamed && !this.shouldShowWelcome){
                    this.farmDetailsStore.addFarmName(this.farmName);  
                }

                this.farm = this.farmDetailsStore.farm;
            },

            toggleGardenTools() {
               this.shouldShowWellDone = !this.shouldShowWellDone;
               this.canUseFarmTools  = !this.canUseFarmTools;
            },

            ///////////////////////////////////////////
            ////////// SHOW DIFFERENT ROOMS //////////
            ///////////////////////////////////////////
            toggleGardenSeeds() {
                this.$emit('shouldShowGardenVegRoom');
            },
            toggleTreeOrchard() {
                this.$emit('shouldShowTreeOrchard');
            },
            toggleAnimalFarm() {
                this.$emit('shouldShowAnimalFarm');
            },
           
            // pinia - seed growth store -- methods
            ...mapActions(useFarmDetailsStore, ['addFarmName']),
        },
        computed: {
            farmHasBeenNamed(){
                return(this.farmName !== '')
            },  

             // pinia -- farm details store
            ...mapStores(useFarmDetailsStore),
        }
    }
</script>


<style scoped>

    .sidebar {
        height: 100vh;
        background: #53a72f;

        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
    }

    .sidebar img {
        height: 60px;
        width: 60px;

        margin-top: 30px;
    }

    .sidebar ul {
        list-style: none;
        margin: 0;
        padding: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
    }

    .sidebar li {
        color: white;
        font-size: 18px;
        letter-spacing: 0.3px;
        margin: 5px;
        text-align: center;

        cursor: pointer;

        border: 1px dashed white;
    }

    .welcome, .well-done {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
    }

    .welcome p, 
    .well-done p {
        color: white;
        font-size: 18px;
        margin-bottom: 20px;
        text-align: center;
    }


    .welcome h1, .well-done h1 {
        color: white;
        font-size: 22px;
        text-align: center;
    }

    .welcome input {
        height: 45px;
        width: 190px;
        border-radius: 10px;
        border: none;
    }

    .welcome input:focus {
        outline: none;
    }


    .welcome button,
    .well-done button {
        margin-top: 30px;
        background: #a9633d;
        
        border: none;
        border-radius: 12px;

        width: 190px;
        height: 45px;
        
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;

        letter-spacing: 0.8px;
    }

    .well-done span {
        color: white;
        font-size: 18px;
        margin-bottom: 20px;
        text-align: center;
        text-transform:uppercase;
        font-weight: bold;
    }

    .garden-jobs {
        margin-top: 30px;
    }

    footer {
        position: absolute;
        bottom: 30px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    footer p {
        color: white;
    }
    footer a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    footer a:hover, footer a:focus, footer a:visited {
        color: teal;
    }


      @media (max-width: 980px) {
         .sidebar {
            /* position: absolute; */
            width: 100%;
            height: auto;
         }

         footer {
            position: relative;
            bottom: 0;
            margin-bottom: 20px;
         }

      }

</style>