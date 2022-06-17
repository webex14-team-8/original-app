<template>
  <div class="upper">
    <div class="upper-title">
      <h1>地震情報共有サイト</h1>
    </div>
    <div class="upper-contents">
      <p>地震大国、日本。<br>あなたの街でも今後大きな地震が起こるかもしれません。</p>
    </div>
  </div>

  <div class="bottom">
    <div class="bottom-left">
      <router-link to="/map">地震発生確率を予想する</router-link>
      <!-- <GoogleMap /> -->
    </div>
    <div class="bottom-right">
      <router-link to="/map">地震発生確率を予想する</router-link>
      <!-- <GoogleMap /> -->
    </div> 
  </div>
</template>

<style>
.upper {
  background-image: url(@/assets/earthquake1.jpg);
  background-size: cover;
  background-attachment: fixed;
  height: 1000px;
}
body {
  margin: 0px;
  -webkit-animation: fadeIn 1.5s ease 0s 1 normal;
  animation: fadeIn 1.5s ease 0s 1 normal;
}

.bottom {
  width: 100%;
  padding: 0;
  margin: 0;
}

.bottom-left {
  background-color: rgb(126, 213, 184);
  width: 50%;
  height: 50%;
  border-radius: 150px;
  margin: 10px;
  min-height: 10em;
  display: table-cell;
  vertical-align: middle;
}

.bottom-right {
  background-color: rgb(228, 219, 156);
  width: 300px;
  height: 300px;
  border-radius: 150px;
  margin: 10px;
  min-height: 10em;
  display: table-cell;
  vertical-align: middle;
}


/* ↓ページ読み込み時フェードイン */
@keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

</style>

<script>
// @ is an alias to /src
// import GoogleMap from "./GoogleMap.vue"

export default {
  name: "HomeView",
  components: {
    // GoogleMap
},
}
</script>

<!-- マウスストーカー -->
<!-- ロード中の画面 -->
