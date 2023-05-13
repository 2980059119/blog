<template>
  <div class="main">
    <common>
      <!--<preview :info="post.info" :content="post.content"></preview>-->
    </common>
  </div>
</template>

<script>
import preview from "@/views/tools/mavonEditor/preview/index.vue";
import common from "@/views/tools/common/index.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Categories",
  // eslint-disable-next-line vue/no-unused-components
  components: {preview, common}
}
</script>

<style scoped>

</style>
