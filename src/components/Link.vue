<template>
  <span class="link-box">
    <a class="link" :href="url" :title="label">
      <img class="link-image" :src="image" />
    </a>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    label: String,
    url: String,
    image: String,
  },
});
</script>

<style scoped lang="scss">
.link-box {
  display: "inline-block";
  padding: 5px;
}

.link-image {
  width: 40px;
}
</style>
