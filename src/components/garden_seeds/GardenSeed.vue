<template>
    <div class="garden-seed">
        <div class="seed-outside">
            <div class="seed"></div>
        </div>
        <div class="seed-name">
            <p> {{ seed.name }} </p>
        </div>  
    </div>
</template>

<script>



export default {
    name: 'GardenSeed',
    props: ['seed'],
}
</script>

<style scoped>

    .garden-seed {
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .seed-outside {
        width: 80px;
        height:80px;

        border-radius: 100%;
        background: #fff8f8;
        box-shadow: 1px -4px 2px -3px #616161;
        border: 2px dotted #582806;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .seed-outside:focus, 
    .seed-outside:hover {
        border: 2px solid #582806;
        background: #e9e7e7;
    }
    .seed {
        width: 20px;
        height: 20px;

        transform: rotate(-40deg);
        background: #582806;

        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        cursor: pointer;
    }

    .seed-name {
        color: black;
        font-size: 12px; 
    }
</style>