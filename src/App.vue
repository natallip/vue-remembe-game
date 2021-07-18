<template>
  <AnimationTitle v-if="showAnimation" />
  <h1 class="title">Remember Me</h1>
  <p class="descr">Запомни и открой все зеленые клетки</p>
  <Board />
</template>

<script>
import AnimationTitle from './components/AnimationTitle'
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    AnimationTitle,
    Board,
  },
  data() {
    return {
      showAnimation: true,
      timer: null,
    }
  },
  mounted: function() {
    this.timer = setTimeout(() => {
      this.showAnimation = false
    }, 6000)
  },
  beforeUnmount: function() {
    clearTimeout(this.timer)
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Noto Sans JP', sans-serif;
}
p {
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #1d252c;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
.title {
  letter-spacing: 0.1em;
  text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff;
}
.descr {
  margin-bottom: 10px;
}
</style>
