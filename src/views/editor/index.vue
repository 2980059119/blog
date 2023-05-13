<template>
  <div id="editor">
    <mavon-editor v-model="value" style="height: 100%"></mavon-editor>
  </div>
</template>
<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  components: {
    mavonEditor
  },
  data() {
    return {
      value: "",
    }
  }
}
</script>
<style>
#editor {
  margin: auto;
  width: 80%;
  height: 580px;
}
</style>
