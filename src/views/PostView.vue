<template>
  <div>
    <h2>災害情報掲示板</h2>
    <div class="post_form">
      <textarea v-model="text" placeholder="何か書いてみよう"></textarea>
    </div>
    <div>
      <button v-on:click="postTweet">投稿</button>
    </div>
    <div class="timeline"></div>
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
      this.text = ""
    },
  },
}
</script>

<style scoped></style>
