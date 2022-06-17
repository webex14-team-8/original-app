<template>
  <div>
    <h2>
      発生確率
      <div
        v-for="choice in this.choices"
        v-bind:key="choice.text"
        id="container"
      >
        {{ choice.text }}: {{ choice.probability }}
      </div>
    </h2>
    <GoogleMap
      :api-key="apiKey"
      style="width: 100%; height: 500px"
      :center="myLatLng"
      :zoom="15"
      v-on:click="createMarker"
    >
      <Marker :options="{ position: myLatLng }" />
    </GoogleMap>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map"
console.log(process.env.VUE_APP_GOOGLE_API)
export default {
  data() {
    return {
      myLatLng: { lat: 35.689614, lng: 139.691585 },
      choices: [
        {
          value: "T30_I45_PS",
          text: "今後30年間で震度5弱以上となる確率",
          probability: "",
        },
        {
          value: "T30_I50_PS",
          text: "今後30年間で震度5強以上となる確率",
          probability: "",
        },
        {
          value: "T30_I55_PS",
          text: "今後30年間で震度6弱以上となる確率",
          probability: "",
        },
        {
          value: "T30_I60_PS",
          text: "今後30年間で震度6強以上となる確率",
          probability: "",
        },
      ],
      apiKey: process.env.VUE_APP_GOOGLE_API,
    }
  },
  methods: {
    createMarker(e) {
      var lat = e.latLng.lat()
      var lng = e.latLng.lng()
      this.myLatLng = { lat, lng }
      for (let i = 0; i < this.choices.length; i++) {
        // 入力された緯度経度をURLに代入
        const url = `https://www.j-shis.bosai.go.jp/map/api/pshm/Y2010/AVR/TTL_MTTL/meshinfo.geojson?position=${lng},${lat}&epsg=4301&attr=${this.choices[i].value}`
        // 確率を出す
        fetch(url)
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            this.choices[i].probability =
              data.features[0].properties[this.choices[i].value]
          })
      }
    },
  },
  components: { GoogleMap, Marker },
}
</script>

<style scoped>
/* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
#map {
  height: 100%;
}
/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
