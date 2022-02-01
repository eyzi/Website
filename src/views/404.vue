<template>
  <div class="body">
    <div>
      <div id="message">Page Not Found</div>
      <div id="cta"><a href="/">&lt; Back to home</a></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFound",
  created: () => {
    document.title = "Eyzi | 404";
  },
});
</script>

<style scoped lang="scss">
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
}

#message {
  font-size: 1.5em;
  padding: 0.5em;
}
</style>
