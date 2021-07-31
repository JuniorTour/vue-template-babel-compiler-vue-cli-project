<template>
  <div id="app">
    <h2 v-if="optional?.chaining">
      Optional Chaining enabled: {{optional?.chaining}}
    </h2>
    <h2>{{null ?? 'Nullish Coalescing enabled'}}</h2>
    <h2>{{BigInt(9007199254740991)}}</h2>
    <img alt="Vue logo" src="./assets/logo.png">
    <FunctionalComponent msg="FunctionalComponent valid" />
    <HelloWorld v-slot:default="slotProps"
                msg="Welcome to Your Vue.js App">
      {{ slotProps.dataMsg }}
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FunctionalComponent from './components/FunctionalComponent.functional.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FunctionalComponent,
  },
  data() {
    return {
      optional: {
        chaining: true,
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
