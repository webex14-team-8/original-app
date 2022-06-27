<template>
  <div class="area">
    <div class="upper">
      <div class="upper-icon">
        <img src="@/assets/icon1.png" alt="mountain_icon" />
      </div>
    </div>
    <hr class="style-three" />
    <div class="middle-contents">
      <p>
        地震大国、日本。<br />あなたの街でも今後大きな地震が起こるかもしれません。
      </p>
    </div>
    <hr class="style-three" />
    <div class="bottom">
      <div class="bottom-left">
        <router-link to="/map" class="link"
          ><p class="link">地震発生確率を予想する</p></router-link
        >
        <!-- <GoogleMap /> -->
      </div>
      <div class="bottom-right">
        <router-link to="/post" class="link"
          ><p class="link">防災に関する口コミを見る</p></router-link
        >
        <!-- <GoogleMap /> -->
      </div>
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
    <br />
  </div>
</template>

<style scoped>
html {
  background-color: #bccee9;
}
.area {
  -webkit-animation: fadeIn 1.5s ease 0s 1 normal;
  animation: fadeIn 1.5s ease 0s 1 normal;
  height: auto;
  width: 100%;
  /* background-color: #bccee9; */
}

.upper {
  background-image: url(@/assets/earthquakebig2.jpg);
  background-size: 100%;
  background-attachment: fixed;
  height: 350px;
  max-height: 350px;
  border-bottom-right-radius: 2000px 300px;
  border-bottom-left-radius: 2000px 300px;
  padding-left: 200px;
  padding-right: 200px;
  margin-bottom: 50px;
}

.upper-icon {
  display: flex;
  text-align: center;
  justify-content: center;
}

.upper-icon img {
  width: 270px;
  height: 270px;
  border-radius: 135px;
  margin-top: 5%;
  box-shadow: 5px 5px 20px rgb(39, 39, 66);
}

.middle-contents p {
  font-size: 18px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
}

hr {
  width: 70%;
  height: 10px;
  border: 0;
  box-shadow: 0 10px 10px -10px rgb(113, 108, 108) inset;
}

.link {
  text-decoration: none;
  font-size: 30px;
}
.link:hover {
  text-decoration: underline;
}

.bottom {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  position: relative;
  z-index: 100;
}

.bottom-left {
  background-color: rgb(134, 156, 149);
  width: 500px;
  height: 500px;
  border-radius: 250px;
  margin: 10px;
  line-height: 2700%;
}

.bottom-right {
  background-color: rgb(215, 210, 173);
  width: 500px;
  height: 500px;
  border-radius: 250px;
  margin: 10px;
  line-height: 2700%;
}

/* ↓ページ読み込み時フェードイン */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* ↓メディアクエリ */
@media screen and (max-width: 950px) {
  .bottom-left {
    width: 350px;
    height: 350px;
    border-radius: 175px;
    margin: 10px;
    line-height: 2000%;
  }

  .bottom-right {
    width: 350px;
    height: 350px;
    border-radius: 175px;
    margin: 10px;
    line-height: 2000%;
  }

  .link {
    font-size: 20px;
  }

  .upper {
    background-image: url(@/assets/earthquakebig3.jpg);
  }
}

@media screen and (max-width: 800px) {
  .upper-icon img {
    width: 230px;
    height: 230px;
    margin-top: 50px;
  }
}

@media screen and (max-width: 700px) {
  .circles {
    height: 100em;
  }
  .bottom {
    flex-direction: column;
    /* justify-content: center; */
    /* text-align: center; */
    position: absolute;
    margin: auto;
    background-color: #bccee9;
    height: 620px;
  }
  .bottom-left {
    width: 250px;
    height: 250px;
    margin-top: 100px;
    margin-left: 27%;
    line-height: 1500%;
  }
  .bottom-left p {
    font-size: 17px;
  }
  .bottom-right {
    width: 250px;
    height: 250px;
    margin-left: 27%;
    line-height: 1500%;
  }
  .bottom-right p {
    font-size: 17px;
  }

  hr {
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 400px) {
  body {
    position: fixed;
  }
  .bottom-left {
    margin-left: 18%;
    margin-top: 30px;
  }
  .bottom-right {
    margin-left: 18%;
  }
}

/* ↓□が出てくるやつ */
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
/* ↑□ */
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
