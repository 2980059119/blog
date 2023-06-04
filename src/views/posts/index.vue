<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <editorPreview :posts="posts" :posts-content="posts.content" id="editor-preview"></editorPreview>
        <!-- container参数指定监听的容器 -->
      </template>
      <template v-slot:aside>
        <div style="text-align: start">
          <div>
            <div v-for="item in aData" :key="item.id" @click="url(item.id)">{{ item.label }}</div>
          </div>
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
      aData: [],  // 瞄点数据
      alias:''
    }
  },
  methods: {
    //获取锚点id
    listA() {
      this.$nextTick(() => {
        let aData = document.querySelectorAll("#editor-preview a");
        const link = [];
        console.log(aData)
        aData.forEach((item) => {
          if (item.id && item.id.includes("_")) {
            if (link.length) {
              // console.log(item.id)
              for (let i = 0; i < link.length; i++) {
                if (link[i].id === item.id) {
                  return
                }
              }
            }
            link.push({
              id: item.id,
              label: item.nextSibling.nodeValue
            })
          }
        })
        console.log(link)
        this.aData = link;
      })
    },
    //点击锚点
    url(url) {
      document.getElementById(url).scrollIntoView()
    },
    unique(str) {
      let arr = str.split('');
      let newArr = [...new Set(arr)];
      return newArr.join('');
    },
    selectOne(data) {
      posts.selectOne(data).then((result) => {
        this.posts = result
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

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}

</style>
