<template>
    <div class="animal-pen">
        <piggy></piggy>
    </div>
</template>

<script>
import Piggy from '../garden_animals/Piggy.vue'
export default {
    name: 'AnimalPen',
    components: {
        Piggy

    }
}
</script>


<style scoped>
.animal-pen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>