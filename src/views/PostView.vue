<template>
  <div>
    <div>
      <textarea v-model="text" placeholder="何か書いてみよう"></textarea>
    </div>
    <div>
      <button v-on:click="postTweet">投稿</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    }
  },
  methods: {
    postTweet() {
      alert("まだお待ちを")
    },
  },
}
</script>

<style scoped></style>
