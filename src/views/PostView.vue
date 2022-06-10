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
    <div v-for="post in posts" :key="post.name">
      <hr />
      <p>名前：{{ post.name }}</p>
      <p>コメント：{{ post.comment }}</p>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "@/firebase.js"
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    async submitPosts() {
      // axios
      //   .post(
      //     "https://firestore.googleapis.com/v1/projects/team8-project-8754d/databases/(default)/documents/posts",
      //     {
      //       fields: {
      //         name: {
      //           stringValue: this.name,
      //         },
      //         comment: {
      //           stringValue: this.comment,
      //         },
      //       },
      //     }
      //   )
      // .then(() => {
      //   this.name = ""
      //   this.comment = ""
      //   this.getPosts()
      // })
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: this.name,
          comment: this.comment,
        })
        console.log("Document written with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
      this.posts.push({
        name: this.name,
        comment: this.comment,
      })
    },
    async getPosts() {
      //   axios
      //     .get(
      //       "https://firestore.googleapis.com/v1/projects/team8-project-8754d/databases/(default)/documents/posts"
      //     )
      //     .then((res) => {
      //       this.posts = res.data.documents
      //     })
      const querySnapshot = await getDocs(collection(db, "users"))
      querySnapshot.forEach((doc) => {
        this.posts.push({
          id: doc.id,
          ...doc.data(),
        })
        console.log(`${doc.id} => ${doc.data()}`)
      })
    },
  },
}
</script>
