<template>
    <div class="seed-wrapper">
       <div class="seed">
           <div class="seed-name">
           <p> seed name </p>
       </div>
       </div>
       
    </div>

</template>

<script>
export default {
   name: 'GardenSeed'
}
</script>

<style scoped>
    .seed-wrapper {
        width: 60px;
        height:60px;
        transform: rotate(-180deg);

        border-radius: 100%;
        background: #fff8f8;
        box-shadow: 1px -4px 2px -3px #616161;
        margin: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        
        cursor: pointer;
    }
    .seed {
        width: 20px;
        height: 20px;

        transform: rotate(-220deg);
        background: #582806;

        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    .seed-name {
        transform: rotate(40deg);
        position: relative;
        top: 10px;
        left: -40px;

        color: white;
        font-size: 16px; 
    }
</style>