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
      <GoogleMap />
    </div> 
  </div>
</template>

<style>
.upper {
  background-image: url(@/assets/earthquake1.jpg);
  background-size: cover;
  background-attachment: fixed;
  height: 1281px;
}
body {
  margin: 0px;
  -webkit-animation: fadeIn 1.5s ease 0s 1 normal;
  animation: fadeIn 1.5s ease 0s 1 normal;
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
import GoogleMap from "./GoogleMap.vue"

export default {
  name: "HomeView",
  components: {
    GoogleMap
},
}
</script>

<!-- マウスストーカー -->
<!-- ロード中の画面 -->
