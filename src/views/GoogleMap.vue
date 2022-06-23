<template>
  <div>
    <div class="title-container">
      <h1>地震の発生確率を見てみよう</h1>
    </div>
    <p>
      このページではグーグルマップ上で指定した点の将来の地震発生確率を表示します。<br />
      あなたの地域の地震発生確率を見てみましょう。
    </p>
    <div class="main">
      <GoogleMap
        :api-key="apiKey"
        style="width: 50%; height: 500px"
        :center="myLatLng"
        :zoom="15"
        v-on:click="createMarker"
        id="map"
      >
        <Marker :options="{ position: myLatLng }" />
      </GoogleMap>
      <h2>
        <div v-for="choice in this.choices" v-bind:key="choice.text">
          {{ choice.text }}: {{ choice.probability }}
        </div>
      </h2>
    </div>
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
h1 {
  font-size: 35px;
  padding: 1rem 2rem;
  color: #fff;
  background: rgb(111, 180, 189);
  -webkit-box-shadow: 5px 5px 0 #33868a;
  box-shadow: 5px 5px 0 #4d4b80;
}

/* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
.main {
  height: 50%;
  width: 100%;
  display: flex;
}
#map {
  padding-left: 30px;
}
h2 {
  font-size: 20px;
  margin: 2em auto;
  padding: 30px;
  width: 30%; /*幅の調節*/
  color: #666666; /*文字色*/
  background-color: #f7f7f7; /*背景色*/
  border: 2px solid #ccc; /*線の太さ・色*/
  border-radius: 8px; /*角の丸み*/
}

/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
