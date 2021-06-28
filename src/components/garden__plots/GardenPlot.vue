<template>

    <div class="garden-plot">

        <div class="vertical-planks">
            <div class="vertical-planky"></div>
            <div class="vertical-planky"></div>
        </div>

        <div class="horizontal-planks">

            <div class="horizontal-planky"></div>

            <div class="horizontal-planky"></div>

            <div class="horizontal-planky"></div>

            <p class="plant-name"> seed name</p>

        </div>
        
    </div>
</template>

<script>
export default {
    name: 'GardenPlot',

    components: {
    },

    data() {
        return {
           
        }
    }
}
</script>

<style scoped>



.garden-plot {
    position: relative;
    display: flex;
    margin: 20px;
    height: 200px;
}

.vertical-planks {
    display: flex;
    justify-content: space-between;
    width: 200px;
}
.horizontal-planks {
    position: absolute;
    top: 8px;
    z-index: 1;
    left: -5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.horizontal-planky {
    height: 25px;
    width: 210px;
    background:#a9633d;
    margin-bottom: 2px;
    box-shadow: 0 4px 2px -2px #5f3721;
}

.vertical-planky {
    height: 90px;
    width: 20px;
    background:#a9633d; 
    box-shadow: 0 4px 2px -2px #5f3721;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.plant-name {
    color: #582806;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;

    position: absolute;
    top: 10px;
}


</style>