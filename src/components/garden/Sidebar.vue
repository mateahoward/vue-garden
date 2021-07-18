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


        <!--- SIGNATURE -->
        <footer>
           <p> Built with 💛 by </p>
            <a href="https://github.com/mateahoward"> Matea Howard </a>
            
        </footer>
  
    </div>
</template>


<script>
    export default {
  
        name: 'Sidebar',

        data(){
            return {
                farmName: '',
                          
                canUseFarmTools: false,
                shouldShowWelcome: true,
                shouldShowWellDone: false,
                showTreeOrchard: false,
                showAnimalFarm: false,
                
                farm: [
                    {
                        name: this.farmName,
                    }
                ],
               
            }
        },
        emits: [
            'shouldShowGardenSeeds', 
            'shouldShowTreeOrchard',
            'shouldShowAnimalFarm',
        ],
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

</style>