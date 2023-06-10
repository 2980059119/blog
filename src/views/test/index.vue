<template>
  <div :style="cssVars">
    <p class="text">测试文本</p>
    <div class="background_img"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"test",
  data() {
    return {
      color: "red",
      background: "url(@/assets/images/index.jpg)"
    };
  },
  computed: {
    cssVars() {
      return {
        "--color": this.color,
        "--background": this.background
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  color: var(--color);
}
.background_img {
  background-image:var(--background) ;
}
</style>
