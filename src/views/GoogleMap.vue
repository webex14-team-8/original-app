<template>
  <div>
    <h1>Google Map</h1>
    <div ref="map" style="height: 500px; width: 800px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myLatLng: { lat: 35.689614, lng: 139.691585 },
    };
  },
  mounted() {
    let timer = setInterval(() => {
      if (window.google) {
        clearInterval(timer);
        const map = new window.google.maps.Map(this.$refs.map, {
          center: this.myLatLng,
          zoom: 8,
        });

        new window.google.maps.Marker({
          position: this.myLatLng,
          map,
        });
        new window.google.maps.event.addListener(map, "idle", function(){
          var pos = map.getCenter();
          var lat = pos.lat();
          var lng = pos.lng();
          document.getElementById("mapPos").innerHTML=("緯度："+lat+"、経度："+lng);
        });
      }
    }, 500);
  }
};
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
