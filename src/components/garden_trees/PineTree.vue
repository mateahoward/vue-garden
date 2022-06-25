<template>
    <div class="pine-tree">
        <div class="tree-top">
            <div class="tree-level--small"></div>
            <div class="tree-level--medium"></div>
            <div class="tree-level--large"></div>
        </div>
        <div class="pine-tree-trump">
            <div class="tree-trump-line"></div>
            <div class="tree-trump-line long"></div>
            <div class="tree-trump-line"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PineTree'
}
</script>

<style scoped>

.pine-tree {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

    .pine-tree-trump {
        height: 105px;
        width: 75px;
        background: #4c1d03;

        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        display: flex;
        justify-content: space-around;
    }

    .tree-trump-line {
        position: relative;
        top: 30px;
        height: 30px;
        width: 8px;
        border-top-left-radius: 100%;
        border-bottom-left-radius: 100%;
        background: #311301;
    }

    .tree-trump-line.long {
        height: 50px;
        position: relative;
        top: 30px;
    }

    .tree-top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .tree-level--small {
        width: 0; 
        height: 0; 

        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 100px solid #339607;

        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
        

        position: relative;
        top: 160px;
        z-index: 2;
    }
    .tree-level--medium {
        width: 0; 
        height: 0; 

        border-left: 150px solid transparent;
        border-right: 150px solid transparent; 
        border-bottom: 150px solid #339607;

        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;

        position: relative;
        top: 100px;
        z-index: 1;
    }
    .tree-level--large {
        width: 0; 
        height: 0; 

        border-left: 200px solid transparent;
        border-right: 200px solid transparent;
        border-bottom: 200px solid #339607;

        border-bottom-left-radius: 120px;
        border-bottom-right-radius: 120px;

        position: relative;
        top: 10px;
    }
</style>