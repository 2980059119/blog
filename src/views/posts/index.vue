<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <div v-loading="loading">
          <editorPreview :posts="posts" :posts-content="posts.content" :navigation="true" id="editor-preview"></editorPreview>
        <!-- container参数指定监听的容器 -->
        </div>
      </template>
    </common>
  </div>
</template>
<script>
import posts from "@/api/posts";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Posts",
  data() {
    return {
      posts: {
        // 标题
        title: '',
        // 发布时间
        date: '',
        // 是否置顶
        top: true,
        // 文章字数
        wordCount: '',
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
      },
      alias:'',
      loading: true
    }
  },
  methods: {
    selectOne(data) {
      posts.selectOne(data).then((result) => {
        result['navigationShow'] = true;
        this.posts = result
        this.loading = false
      }).catch((err) => {
        console.log(err)
      });
    }
  },
  created() {
    this.selectOne(this.$route.params.alias)
  }

}

</script>
<style scoped>
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
