<template>
    <div class="sidebar">
        <img src="../../assets/images/vue-logo.png" @click="refreshPage"/>

        <!-- WELCOME -->   
        <section class="welcome" v-if="shouldShowWelcome">
            <h1> Welcome 👋</h1>

            <p> To get started please name your new farm</p>

            <input v-model="farmName">
            <button @click="toggleStepTwo"> save and continue </button>
        </section>

        <!-- WELL DONE -->
        <section class="well-done" v-if="farmHasBeenNamed && shouldShowWellDone">
            <h1> Good Job 👏 </h1>
            <p> Awesome! Your new farm will be called:</p>
            <span> '{{farmName}}'!</span>
            <p>Let's look at our tools and jobs to be done!</p>

            <button @click="toggleGardenTools"> Use Farm Tools</button>
        </section>

        <!-- SHOW GARDEN ROOMS -->
        <section class="garden-rooms" v-if="canUseFarmTools">
            <ul>
                <li @click="toggleGardenSeeds"> Veg Garden </li>
                <li @click="toggleTreeOrchard">  Tree Orchard </li>
                <li @click="toggleAnimalFarm">  Animal Farm </li>
            </ul>
        </section>

        <section class="garden-seeds" v-if="showGardenSeeds">
            <garden-seed></garden-seed>
            <garden-seed></garden-seed>
            <garden-seed></garden-seed>
            <garden-seed></garden-seed>
            <garden-seed></garden-seed>
            <garden-seed></garden-seed>
        </section>
    </div>
</template>


<script>
import GardenSeed from '../garden_seeds/GardenSeed.vue'
    export default {
  
        name: 'Sidebar',

        data(){
            return {
                farmName: '',
                showGardenSeeds: false,
                showTreeOrchard: false,
                showAnimalFarm: false,            
                canUseFarmTools: false,
                shouldShowWelcome: true,
                shouldShowWellDone: false,
                
                farm: [
                    {
                        name: this.farmName,
                    }
                ]
            }
        },
        emits: ['shouldShowGardenSeeds'],
        components: { 
            GardenSeed,
        },
        methods: {
            toggleStepTwo(){
                if(this.farmHasBeenNamed){
                  this.shouldShowWelcome = !this.shouldShowWelcome;
                  this.shouldShowWellDone = !this.shouldShowWellDone;
                }
            },
            toggleGardenTools() {
               this.shouldShowWellDone = !this.shouldShowWellDone;
               this.canUseFarmTools  = !this.canUseFarmTools;
            },

            refreshPage() {
              location.reload();
            },

            // SHOW DIFFERENT ROOMS
            toggleGardenSeeds() {
                this.$emit('shouldShowGardenVegRoom');
                this.showGardenSeeds = true;
                this.showTreeOrchard = false; 
                this.showAnimalFarm = false;
            },
            toggleTreeOrchard() {
                this.$emit('shouldShowTreeOrchard');
                this.showTreeOrchard =  true;
                this.showGardenSeeds = false; 
                this.showAnimalFarm = false;
            },
            toggleAnimalFarm() {
                this.$emit('shouldShowAnimalFarm');
                this.showAnimalFarm = true;
                this.showTreeOrchard = false; 
                this.showGardenSeeds = false;
            },
            
        },
        computed: {
            farmHasBeenNamed(){
                return(this.farmName !== '')
            },
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

        width: 160px;
        height: 35px;
        
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
    }

    .garden-seeds {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 30px;
    }

</style>