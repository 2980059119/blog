<template>
  <div class="post-block">
    <postHeader :info="Info"/>
    <div class="post-body">
      <mavon-editor :toolbarsFlag="false" defaultOpen="preview" :subfield="false" :ishljs="true" :boxShadow="false"
                    :autofocus="false" boxShadowStyle="none" :transition="false"
                    placeholder="文本为空"
                    :shortCut="false"
                    previewBackground="#ffffff00" :editable="false" v-model="Content"/>
    </div>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import postHeader from '@/views/components/PostHeader.vue'

export default {
  name: "editorPreview",
  components: {mavonEditor, postHeader},
  props: {
    Info: {
      required: true,
      type: Object,
      default() {
        return {
          info: {
            title: '文章为空',
            isTop: false,
            createDate: '1970-01-01',
            textNumber: '0',
            categories: []
          }
        }
      },
      validator(value) {
        return ['title', 'isTop', 'createDate', 'categories', 'textNumber'].includes(value)
      }
    },
    content: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      Info: this.info,
      Content: this.content
    }
  },
}
</script>

<style lang="less" scoped>
.post-block {

  .post-body {
    p {
      line-height: 28px;
      text-indent: 2em;
      color: #7a7a7a;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

  }
}


h1 {
  font-size: 1.75em;
}

.v-note-wrapper {
  min-height: 100% !important;
  border: none;
}


</style>
<style lang="less">
.v-show-content {
  padding: 0 !important;

  p {
    text-indent: 2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 30px;
  }
}
</style>
