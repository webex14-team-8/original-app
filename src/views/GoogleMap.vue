<template>
  <div>
    <!-- <div>
      <h1>Google Map</h1>
      <div ref="map" style="height: 500px; width: 100%"></div>
    </div> -->
    <h2>
      発生確率

      <div
        v-for="choice in this.choices"
        v-bind:key="choice.text"
        id="container"
      >
        {{ choice.text }}: {{ choice.probability }}: {{ choice.value }}
      </div>
    </h2>
    <GoogleMap
      api-key="AIzaSyD4APgXbyL76gOgwgmann6oEjl4Q7f9F0g"
      style="width: 100%; height: 500px"
      :center="myLatLng"
      :zoom="15"
      v-on:click="createMarker(e)"
    >
      <Marker :options="{ position: myLatLng }" />
    </GoogleMap>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map"
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
    }
  },
  methods: {
    createMarker(e) {
      console.log(e.Lat)
      var lat = e.lat()
      var lng = e.lng()
      this.myLatLng.lat = lat
      this.myLatLng.lng = lng
    },
  },
  //         var pos = map.getCenter()
  //         var lat = pos.lat()
  //         var lng = pos.lng()
  //         document.getElementById("mapPos").innerHTML =
  //           "地図中心の" + "緯度：" + lat + "、経度：" + lng
  //       })
  // }
  // mounted() {
  //   let timer = setInterval(() => {
  //     if (window.google) {
  //       clearInterval(timer)
  //       const map = new window.google.maps.Map(this.$refs.map, {
  //         center: this.myLatLng,
  //         zoom: 8,
  //       })
  //       new window.google.maps.event.addListener(map, "idle", function () {
  //         var pos = map.getCenter()
  //         var lat = pos.lat()
  //         var lng = pos.lng()
  //         document.getElementById("mapPos").innerHTML =
  //           "地図中心の" + "緯度：" + lat + "、経度：" + lng
  //       })
  //       map.addListener("click", function (e) {
  //         var marker = new window.google.maps.Marker({
  //           position: e.latLng,
  //           map: map,
  //           title: e.latLng.toString(),
  //           animation: window.google.maps.Animation.DROP,
  //         })
  //         marker.addListener("click", function () {
  //           this.setMap(null)
  //         })
  //         document.getElementById("mapPos2").innerHTML = "ピンの座標" + e.latLng

  //         for (let i = 0; i < this.choices.length; i++) {
  //           // 入力された緯度経度をURLに代入
  //           var lat = e.latLng.lat()
  //           var lng = e.latLng.lng()

  //           const url = `https://www.j-shis.bosai.go.jp/map/api/pshm/Y2010/AVR/TTL_MTTL/meshinfo.geojson?position=${lng},${lat}&epsg=4301&attr=${this.choices[i].value}`
  //           console.log(url)
  //           fetch(url)
  //             .then((res) => {
  //               return res.json()
  //             })
  //             .then((data) => {
  //               this.choices[i].probability =
  //                 data.features[0].properties[this.choices[i].value]
  //               console.log(this.choices[i].probability)
  //             })
  //         }
  //       })
  //     }
  //   }, 500)
  // },
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
