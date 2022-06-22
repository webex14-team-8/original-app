<template>
  <div class="area" >
    <div class="upper">
      <div class="upper-icon">
        <img src="@/assets/icon1.png" alt="mountain_icon">
      </div>
    </div>
    <hr class="style-three">
    <div class="middle-contents">
      <p>地震大国、日本。<br>あなたの街でも今後大きな地震が起こるかもしれません。</p>
    </div>
    <hr class="style-three">
    <div class="bottom">
      <div class="bottom-left">
        <router-link to="/map" class="link"><p class="link">地震発生確率を予想する</p></router-link>
        <!-- <GoogleMap /> -->
      </div>
      <div class="bottom-right">
        <router-link to="/post" class="link"><p class="link">防災に関する口コミを見る</p></router-link>
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
  </div>


</template>

<style>

body {
  margin: 0px;
  -webkit-animation: fadeIn 1.5s ease 0s 1 normal;
  animation: fadeIn 1.5s ease 0s 1 normal;
  max-width: 1360px;
  background-color: #bccee9;
  /* background: radial-gradient(circle, transparent 20%, #f3fcfa 20%, #f3fcfa 80%, transparent 80%, transparent), */
  /* radial-gradient(circle, transparent 20%, #f3fcfa 20%, #f3fcfa 80%, transparent 80%, transparent) 50px 50px, */
  /* linear-gradient(#1abc9c 4px, transparent 4px) 0 -2px, */
  /* linear-gradient(90deg, #1abc9c 4px, #f3fcfa 4px) -2px 0; */
  /* background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px; */
  /* height: 300px; */
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
  box-shadow: 5px 5px 20px rgb(39, 39, 66)
}

.middle-contents p {
  font-size: 18px;
  text-shadow: 1px 1px 0 rgba(0,0,0,.2);
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
  height: 500px;
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
    background-color: rgb(126, 213, 184);
    width: 400px;
    height: 400px;
    border-radius: 200px;
    margin: 10px;
    line-height: 2300%;
  }

  .bottom-right {
    background-color: rgb(228, 219, 156);
    width: 400px;
    height: 400px;
    border-radius: 200px;
    margin: 10px;
    line-height: 2300%;
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
  .upper {
  
  }
}







/* ↓□が出てくるやつ */
.area{
    background: #bccee9;  
    background: -webkit-linear-gradient(to left, #0410e8, #4e54c8);  
    width: 100%;
    height:100vh;
    position: relative;
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1000px;
    overflow: hidden;
    z-index: 1;
    padding: 0px;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(103, 131, 196, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
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
