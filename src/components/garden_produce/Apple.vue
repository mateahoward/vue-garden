<template>
    <div class="apple-wrapper">
        <div class="stem"></div>
        <div class="apple">
            <div class="apple-left"></div>
            <div class="apple-right"></div>
            <div class="apple-shine"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Apple'
}
</script>

<style scoped>

.apple-wrapper {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
}
.apple {
    display: flex;
    cursor: pointer;
    
}

.stem {
    background: #175638;
    width: 5px;
    height: 10px;
    z-index: 1;
}

.apple-shine {
    background: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    width: 5px;
	height: 10px;
    z-index: 1;
    transform: rotate(-45deg);
    position: relative;
    right: 18px;
    top: 2px;
}

.apple-left {
	width: 25px;
	height: 35px;
	background: #f54b40;
	border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    position: relative;
    left: 5px;

	z-index: 1;
}
.apple-right {
	width: 25px;
	height: 35px;
	background: #f54b40;
	border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-left-radius: 50%;

	z-index: 1;
    position: relative;
    right: 5px;
}



</style>