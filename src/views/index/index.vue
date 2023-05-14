<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <div v-for="(post , index) in posts" :key="index"
             :class="index===posts.length - 1?'last-posts':''">
          <editorPreview :posts-info="post.info" :posts-content="post.content"></editorPreview>
          <el-button @click="jump()" :icon="Search">阅读原文
            <el-icon>
              <DArrowRight/>
            </el-icon>
          </el-button>
          <el-divider class="post-divider" border-style="dashed"/>
        </div>
        <el-pagination background pager-count="3" :hide-on-single-page="single_page_hide"
                       layout="prev, pager, next" :total="100"/>
      </template>
    </common>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  data() {
    return {
      posts: [
        {
          info: {
            title: '文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2',
            isTop: true,
            createDate: '2021-07-19',
            categories: ['爬虫', '抓包'],
            textNumber: '11k',
          },
          content: "文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空"
        },
        {
          info: {
            title: '文章标题2',
            isTop: true,
            createDate: '2021-47-19',
            categories: ['爬虫f', '抓包s'],
            textNumber: '1dk',
          },
          content: "文章内内容为空容为空"
        },
        {
          info: {
            title: '文章标题2',
            isTop: true,
            createDate: '2021-17-19',
            categories: ['爬d虫', '抓d包'],
            textNumber: '1k',
          },
          content: "文章内内容为空容为空"
        }
      ],
      single_page_hide: true,
    }
  },
  methods: {
    jump() {
      this.$router.push('/posts')
    }

  }
}
</script>
<style>
.last-posts .post-divider {
  width: 100% !important;
  --el-border-style: double !important;
  margin: 40px auto 0 !important;
}

.post-divider {
  width: 7%;
  margin: 30px auto;
}

</style>
<style scoped>
.el-pagination {
  margin: 40px auto 0;
  display: inline-flex;
}

.post-divider {
  width: 7%;
  margin: 30px auto;
}

.el-button:hover {
  background: #555;
  border-color: #555;
  color: #fff;
}

</style>
