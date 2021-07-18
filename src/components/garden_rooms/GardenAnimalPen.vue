<template>
    <div class="animal-pen">
        <div class="animal-pen-content">
            <!-- cleanup trash after finishing a meal -->
            <div class="piggy-trash-wrapper">
                
            </div>

            <!-- piggy as our main animal -->
            <div class="piggy-wrapper">
                <piggy></piggy>
            </div>

            <!-- in place of animal feeder -->
            <div class="piggy-food-wrapper">
                <garden-plot></garden-plot>
            </div>
        </div>
    </div>
</template>

<script>
import Piggy from '../garden_animals/Piggy.vue'
import GardenPlot from '../garden__plots/GardenPlot.vue'

export default {
    name: 'AnimalPen',
    components: {
        Piggy,
        GardenPlot,
    }
}
</script>


<style scoped>

    .animal-pen {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;


        background: url('../../assets/images/garden__background.jpg');
        background-size: cover;
    }

    .animal-pen-content {
        position: relative;
        top:200px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>