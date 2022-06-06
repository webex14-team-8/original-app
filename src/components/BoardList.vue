<template>
  <div class="board-list">
    <li>{{ name }} {{ data }}<br />{{ message }}</li>
  </div>
</template>
<script>
export default {
  props: ["name", "message", "data"],
}
</script>
