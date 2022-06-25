<template>
    <div class="fruit-tree">
        <div class="apples">
            <div class="apple" v-for="(apple,index) in apples" :key="index" >
                <Apple  v-if="!apple.collected" @click="harvestApple(apple.id)" :class="{'animate-apple' : apple.harvested }"></Apple>
            </div>
        </div>
        <div class="tree-top">
            <div class="tree-level--large-left"></div>
            <div class="tree-level--large"></div>
            <div class="tree-level--large-right"></div>
        </div>
        <div class="fruit-tree-trump">
            <div class="tree-trump-line"></div>
            <div class="tree-trump-line long"></div>
            <div class="tree-trump-line"></div>
        </div>
    </div>
</template>

<script>
    // PINIA
    import { mapState, mapActions } from 'pinia'
    import { useProduceStore } from '@/stores/produceStore.js'
    import Apple from '../garden_produce/Apple.vue'
export default {
    name: 'FruitTree',
    components: {
        Apple
    },
    methods: {
        harvestApple(apple) {
            this.produceStore.harvestApple(apple);
        },

         ...mapActions(useProduceStore, ['harvestApple']),
    },
    computed: {
        ...mapState(useProduceStore, ['apples']),
    },
}

</script>

<style scoped>

.apples {
    position: relative;
    top: 180px;
    right: 40px;
    z-index: 5;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: baseline;
    width: 120px;
}

.fruit-tree {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

    .fruit-tree-trump {
        height: 185px;
        width: 60px;
        background: #4c1d03;

        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        display: flex;
        justify-content: space-around;
    }

    .tree-trump-line {
        position: relative;
        top: 40px;
        height: 40px;
        width: 4px;
        border-top-left-radius: 100%;
        border-bottom-left-radius: 100%;
        background: #311301;
    }

    .tree-trump-line.long {
        height: 60px;
        position: relative;
        top: 60px;
    }

    .tree-top {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 50px;
    }

    .tree-level--large-left {
        height: 180px;
        width: 180px;
        background: #339607;
        border-radius: 100%;
        border-bottom-right-radius: 0;
        border-left: 3px #3f901c solid;
        border-left-style: groove;
        z-index: 2;
        position: relative;
        left: 100px;
    }
    .tree-level--large-right {
        height: 180px;
        width: 180px;
        background: #339607;
        border-radius: 100%;
        border-bottom-left-radius: 0;
        border-right: 3px #3f901c solid;
        border-right-style: groove;
        z-index: 2;
        position: relative;
        right: 100px;
    }
    .tree-level--large {
        height: 220px;
        width: 190px;
        background: #339607;
        border-radius: 100%;
        border-top: 3px #3f901c solid;
        border-top-style: groove;

        position: relative;
        bottom: 35px;
    }

    .animate-apple {
        animation-name: moveDown;
        animation-duration: 4s;
        animation-timing-function: ease-in-out;
    }

    @keyframes moveDown {
        0% {
            position: relative;
            top: 0;
        }
        25% {
            position: relative;
            top: 300px;
        }
        50% {
            position: relative;
            top: 500px;
        }
        100% {
            display: none;
        }
    }


</style>