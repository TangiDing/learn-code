<template>
  <TipTap />
</template>

<script>
import TipTap from './components/TipTap.vue'

export default {
  name: 'App',
  components: {
    TipTap
  }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';
  src: url('./assets/iconfont.ttf?t=1682586173607') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  height: 100%;
  margin: 0;
  background-color: #2c3e50;
}
</style>
