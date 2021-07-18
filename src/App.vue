<template>
  <div class="vue-interactive-garden">
    <interactive-garden></interactive-garden>
  </div>
</template>

<script>
import InteractiveGarden from './components/garden/InteractiveGarden.vue'


export default {
  name: 'App',
  components: {
    InteractiveGarden,
  }
}
</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vue-interactive-garden {
  display: flex;
}
</style>
