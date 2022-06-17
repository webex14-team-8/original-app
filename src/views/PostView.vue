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
      <button v-on:click="like(n)">{{ post.fav }}</button>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs, setDoc, doc, } from "firebase/firestore"
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
      // deleteDoc(doc(db, "posts", this.posts[n].id))
      var key = localStorage.key(n)
      alert(this.posts[n].id);
      alert(key)

      if (key == this.posts[n].id){
        // var getPosts = localStorage.getItem(localStorage.key(n));
        // if (getPosts) {
        //   getPosts = JSON.parse(getPosts);  
        //   if (getPosts.value) {
        //     alert("ok")
        //     localStorage.removeItem(this.posts[n].id)
        //   } else {
        //     alert("no")
        //     localStorage.setItem(this.posts[n].id, this.posts[n].id)
        //   }
        // }
        console.log("yes")
        localStorage.removeItem(this.posts[n].id)
        this.posts[n].fav = "♡"
      } else {
        console.log("no")
        localStorage.setItem(this.posts[n].id, this.posts[n].id);
        this.posts[n].fav = "💗"
      }
      var get = localStorage.getItem(this.posts[n].name);
      if (get) {
        get = JSON.parse(get);
        if (get.value) {
          setDoc(doc(db, "posts", this.posts[n].id), {
            name: this.posts[n].name,
            comment: this.posts[n].comment,
            fav: 0
          })
        } else {
          setDoc(doc(db, "posts", this.posts[n].id), {
            name: this.posts[n].name,
            comment: this.posts[n].comment,
            fav: 1
          })
        }
      }
    },
    // async like() {
      // try {
        // await addDoc(collection(db, "posts"), {
          // fav: this.fav,
        // })
      // } catch (e) {
        // console.error("Error adding document:", e)
      // }
      // if(this.fav === 0) {
        // this.posts.push({
          // fav: 1,
        // })
      // }
      // this.firebase.firestore.FieldValue.increment(1)
    // },
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
        const docRef = await addDoc(collection(db, "posts"), {
          name: this.name,
          comment: this.comment,
          fav: this.fav
          // if (fav === 0) {
            // fav: 1;
          // } else {
            // fav: 0;
          // },
        })
        // firebase.firestore().collection("posts").doc(data).update({
          // starCount: firebase.firestore.FieldValue.increment(1)
        // })
        console.log("Document written with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
      this.posts.push({
        name: this.name,
        comment: this.comment,
        fav: "♡"
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
      const querySnapshot = await getDocs(collection(db, "posts"))
      querySnapshot.forEach((doc) => {
        this.posts.push({
          id: doc.id,
          ...doc.data(),
        })
        console.log(`${doc.id} => ${doc.data()}`)
      })
    },
    // like: function() {
      // localStorage.fav = 1
      // if(this.fav === 1) {
      //   this.fav -= 1
      // } else {
      //   this.fav += 1
      // }
    // },
  },
}
</script>
