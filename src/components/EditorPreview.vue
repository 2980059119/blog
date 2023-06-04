<template>
  <div class="post-block">
    <postHeader :posts-info="posts"/>
    <div class="post-body">
      <mavon-editor ref="md"
                    v-model="content"
                    :subfield="false"
                    defaultOpen="preview"
                    :editable="false"
                    :toolbarsFlag="false"
                    previewBackground="#00000000"
                    :boxShadow="false"
                    placeholder="文本为空"
                    :navigation="navigation"
                    class="mavon-editor"
      />
    </div>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import postHeader from '@/components//PostHeader.vue'

export default {
  name: "editorPreview",
  components: {mavonEditor, postHeader},
  props: {
    posts: {
      required: true,
      type: Object,
      default() {
        return {
          posts: {
            // 标题
            title: '文章为空',
            // 是否置顶
            top: false,
            // 发布时间
            date: '1970-01-01',
            // 文章字数
            wordCount: '0',
            // 文章
            content: '',
            // 文章摘要
            excerpt: '',
            // 文章别名
            alias: '',
            // 点赞量
            favorite: '',
            // 标签列表
            tagList: [],
            // 分类列表
            categoriesList: [],
            // 是否显示 目录
            navigationShow: false
          },
        }
      },
    },
    postsContent: {
      required: true,
      type: String,
    },
    navigation: {
      required: true,
      type: Boolean,
      default: false,
    }
  },
  watch: {
    postsContent(newValue) {
      if (newValue) {
        this.content = newValue
      }
    }
  },
  data() {
    return {
      // info: this.posts,
      content: this.postsContent,
      loading: true
    }
  },
}
</script>

<style lang="less" scoped>
.post-block {

  .post-body {
    p {
      line-height: 28px;
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
}

</style>
