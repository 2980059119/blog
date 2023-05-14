<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <div>
          <h1>about</h1>
          <div>
            <p>精神小伙语录</p>
          </div>
        </div>
      </template>
    </common>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About"
}
</script>

<style scoped>
p {
  text-align: start;
}
</style>
