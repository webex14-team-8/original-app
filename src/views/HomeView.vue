<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <GoogleMap />
    <p id="mapPos"></p>
    <p id="mapPos2"></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import GoogleMap from "./GoogleMap.vue"

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    GoogleMap
},
}
</script>
