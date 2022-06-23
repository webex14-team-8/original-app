<template>
  <div class="area">
    <div class="toko">
      <div class="title-container">
        <h1>掲示板</h1>
      </div>
      名前
      <div>
        <input type="text" v-model="name" />
      </div>
      コメント
      <div>
        <textarea v-model="comment"></textarea>
      </div>
      <br />
      <button v-on:click="submitPosts">投稿する</button>
      <br />
      <br />
    </div>
    <h2>投稿一覧</h2>
    <div v-for="(post, n) in posts" :key="post.name">
      <div class="box">
        <hr />
        <p>名前：{{ post.name }}</p>
        <p>コメント：{{ post.comment }}</p>
        <button v-on:click="like(n)">
          {{ post.fav }}：{{ post.favCount }}
        </button>
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

<style scoped>
h1 {
  padding: 0px;
  font-size: 35px;
  padding: 1rem 2rem;
  color: #fff;
  background: rgb(111, 180, 189);
  -webkit-box-shadow: 5px 5px 0 #33868a;
  box-shadow: 5px 5px 0 #4d4b80;
}
html {
  background-color: #bccee9;
}
.area {
  -webkit-animation: fadeIn 1.5s ease 0s 1 normal;
  animation: fadeIn 1.5s ease 0s 1 normal;
  height: auto;
  max-width: 1360px;
  /* background-color: #bccee9; */
}
.box {
  height: auto;
  position: relative;
  z-index: 100;
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

@media screen and (max-width: 700px) {
  .circles {
    height: 100em;
  }

  hr {
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 400px) {
  body {
    position: fixed;
  }
}

/* ↓□が出てくるやつ */
.area {
  background: #bccee9;
  background: -webkit-linear-gradient(to left, #0410e8, #4e54c8);
  width: 100%;
  height: 100%;
  position: relative;
}

.toko {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 100;
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
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore"
import { db } from "@/firebase.js"
export default {
  data() {
    return {
      name: "",
      comment: "",
      fav: "",
      posts: [],
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    like(n) {
      const key = localStorage.getItem(this.posts[n].id)
      if (key) {
        localStorage.removeItem(this.posts[n].id)
        this.posts[n].fav = "♡"
        this.posts[n].favCount -= 1
      } else {
        localStorage.setItem(this.posts[n].id, this.posts[n].id)
        this.posts[n].fav = "💗"
        this.posts[n].favCount += 1
      }
      setDoc(doc(db, "posts", this.posts[n].id), {
        name: this.posts[n].name,
        comment: this.posts[n].comment,
        favCount: this.posts[n].favCount,
      })
    },

    async submitPosts() {
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          name: this.name,
          comment: this.comment,
          fav: this.fav,
          favCount: 0,
        })
        this.posts.push({
          name: this.name,
          comment: this.comment,
          fav: "♡",
          favCount: 0,
          id: docRef.id,
        })
        console.log("Document written with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    },
    async getPosts() {
      const querySnapshot = await getDocs(collection(db, "posts"))
      querySnapshot.forEach((doc) => {
        const key = localStorage.getItem(doc.id)
        if (key) {
          this.posts.push({
            id: doc.id,
            ...doc.data(),
            fav: "💗",
          })
        } else {
          this.posts.push({
            id: doc.id,
            ...doc.data(),
            fav: "♡",
          })
        }
      })
    },
  },
}
</script>
