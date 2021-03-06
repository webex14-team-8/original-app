<template>
  <div class="area">
    <div class="title-container">
      <h1>地震の発生確率を見てみよう</h1>
    </div>
    <div class="sentenceContainer">
      <p>
        このページではグーグルマップ上で指定した点の将来の地震発生確率を表示します。<br />
        あなたの地域の地震発生確率を見てみましょう。<br />
        まずはピンを立ててください。今後30年でその地域で大きな地震が起こる確率が分かります。<br />
      </p>
    </div>
    <div class="main">
      <div class="map-container">
        <GoogleMap
          :api-key="apiKey"
          :center="myLatLng"
          :zoom="6"
          v-on:click="createMarker"
          id="map"
        >
          <Marker :options="{ position: myLatLng }" />
        </GoogleMap>
      </div>
      <h2>
        <div class="posibility">
          <div v-for="choice in this.choices" v-bind:key="choice.text">
            <br />
            <p class="posibilityText">
              {{ choice.text }}: {{ choice.probability }}%<br />
            </p>
          </div>
        </div>
      </h2>
    </div>
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
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
          text: "震度5弱以上",
          probability: "",
        },
        {
          value: "T30_I50_PS",
          text: "震度5強以上",
          probability: "",
        },
        {
          value: "T30_I55_PS",
          text: "震度6弱以上",
          probability: "",
        },
        {
          value: "T30_I60_PS",
          text: "震度6強以上",
          probability: "",
        },
      ],
      // computed: {
      //   totalPrice: function () {
      //     this.probability = this.probability.toFixed(1) * 100
      //     return this.probability
      //   },
      // },
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
              data.features[0].properties[this.choices[i].value] - 0
            this.choices[i].probability = (
              this.choices[i].probability * 100
            ).toFixed(1)
          })
      }
    },
  },
  components: { GoogleMap, Marker },
}
</script>

<style scoped>
@media screen and (min-width: 701px) {
  h1 {
    font-size: 35px;
    padding: 1rem 2rem;
    margin: 0px;
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
    position: relative;
    z-index: 100;
  }
  #map {
    padding-left: 30px;
    /* margin-bottom: 41px; */
    margin: 1em auto;
    width: 100%;
    height: 500px;
  }
  .map-container {
    width: 50%;
  }
  .posibility {
    height: 50%;
    width: 100%;
  }

  .posibilityText {
    font-size: 22px;
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

  .area {
    background: #bccee9;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    overflow: hidden;
    z-index: 1;
    padding: 0px;
    /* background-color: #bccee9; */
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(103, 131, 196, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
}
/* ↑□ */

@media screen and (max-width: 700px) {
  h1 {
    font-size: 35px;
    padding: 1rem 2rem;
    margin: 0px;
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
    position: relative;
    z-index: 100;
    padding: 0% 0% 1% 0%;
  }
  #map {
    margin-bottom: 41px;
    width: 100%;
    height: 500px;
  }
  .sentenceContainer {
    padding: 0% 5%;
  }
  .posibility {
    height: 50%;
    width: 100%;
  }
  h2 {
    font-size: 20px;
    width: 90%; /*幅の調節*/
    color: #666666; /*文字色*/
    background-color: #f7f7f7; /*背景色*/
    border: 2px solid #ccc; /*線の太さ・色*/
    border-radius: 8px; /*角の丸み*/
    /* display: flex;
    justify-content: space-between; */
    margin: 5%;
  }

  /* Optional: Makes the sample page fill the window. */
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .area {
    background: #bccee9;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    overflow: hidden;
    z-index: 1;
    padding: 0px;
    /* background-color: #bccee9; */
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(103, 131, 196, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
}
</style>
