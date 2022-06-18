<template>
  <div>
    <h1>掲示板</h1>
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
    <h2>投稿一覧</h2>
    <div v-for="(post, n) in posts" :key="post.name">
      <hr />
      <p>名前：{{ post.name }}</p>
      <p>コメント：{{ post.comment }}</p>
      <button v-on:click="like(n)">{{ post.fav }}：{{ post.favCount }}</button>
    </div>
  </div>
</template>

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
