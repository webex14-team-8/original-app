<template>
  <div>
    <div>
      <h1>Google Map</h1>
      <div ref="map" style="height: 500px; width: 100%"></div>
    </div>
    <h2>
      発生確率
      <div id="container"></div>
    </h2>
  </div>
</template>

<script>
const choices = [
  {
    value: "T30_I45_PS",
    text: "今後30年間で震度5弱以上となる確率",
  },
  {
    value: "T30_I50_PS",
    text: "今後30年間で震度5強以上となる確率",
  },
  {
    value: "T30_I55_PS",
    text: "今後30年間で震度6弱以上となる確率",
  },
  {
    value: "T30_I60_PS",
    text: "今後30年間で震度6強以上となる確率",
  },
]
export default {
  data() {
    return {
      myLatLng: { lat: 35.689614, lng: 139.691585 },
    }
  },
  mounted() {
    let timer = setInterval(() => {
      if (window.google) {
        clearInterval(timer)
        const map = new window.google.maps.Map(this.$refs.map, {
          center: this.myLatLng,
          zoom: 8,
        })
        new window.google.maps.event.addListener(map, "idle", function () {
          var pos = map.getCenter()
          var lat = pos.lat()
          var lng = pos.lng()
          document.getElementById("mapPos").innerHTML =
            "地図中心の" + "緯度：" + lat + "、経度：" + lng
        })
        map.addListener("click", function (e) {
          var marker = new window.google.maps.Marker({
            position: e.latLng,
            map: map,
            title: e.latLng.toString(),
            animation: window.google.maps.Animation.DROP,
          })
          marker.addListener("click", function () {
            this.setMap(null)
          })
          document.getElementById("mapPos2").innerHTML = "ピンの座標" + e.latLng

          const container = document.getElementById("container")
          container.textContent = ""

          for (let i = 0; i < choices.length; i++) {
            // 入力された緯度経度をURLに代入
            var lat = e.latLng.lat()
            var lng = e.latLng.lng()

            const url = `https://www.j-shis.bosai.go.jp/map/api/pshm/Y2010/AVR/TTL_MTTL/meshinfo.geojson?position=${lng},${lat}&epsg=4301&attr=${choices[i].value}`
            console.log(`${url}`)
            fetch(`${url}`)
              .then((res) => {
                return res.json()
              })
              .then((data) => {
                console.log(choices[i].value)

                // card を作成
                const card = document.createElement("div")
                card.className = "card"

                // title（地震の名前）を作成
                const title = document.createElement("div")
                title.className = "title"
                title.textContent = choices[i].text
                console.log(`${title.textContent}`)

                // todo（確率) を作成
                const todo = document.createElement("div")
                todo.className = "todo"
                todo.textContent = data.features[0].properties[choices[i].value]
                console.log(`${todo.textContent}`)

                // title（地震の名前）を card の中に追加する
                card.append(title)
                // todo（確率) を card の中に追加する
                card.append(todo)

                // card を container の中に追加する
                container.append(card)
              })
          }
        })
      }
    }, 500)
  },
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
