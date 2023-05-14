<template>
  <router-view/>

</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      direction: 'left',
      style: '',
      width: 500,
      height: 500,
      size: 250,
      tips: {
        mouseover: [{
          selector: '.vue-live2d',
          texts: ['这样可以修改默认语句']
        }]
      }
    }
  }
}
</script>

<style>
h1 {
  font-weight: 400;
  margin: initial;
  text-align: center;
  font-size: 32px;
}

p {
  text-indent: 2em
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;
  /*overflow: hidden;*/
  z-index: -1111;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
  outline: 0;
  text-decoration: none;
}

.vue-live2d-toggle[data-v-8f0d4038] {
  width: 2.5rem;
}

</style>
