<template>
  <div className="mavonEditor">
    <mavon-editor :toolbarsFlag="false" defaultOpen="preview" :subfield="false" :ishljs="true" :boxShadow="false"
                  :autofocus="false" boxShadowStyle="none" :transition="false"
                  placeholder="文本为空"
                  :shortCut="false"
                  previewBackground="#ffffff00" :editable="false" v-model="handbook"/>
  </div>
</template>
<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  components: {mavonEditor},
  data() {
    return {
      handbook: "#### how to use mavonEditor in nuxt.js"
    };
  }
};
</script>

<style scoped>
.mavonEditor {
  /*width: 100%;*/
  /*height: 100%;*/
}
</style>
