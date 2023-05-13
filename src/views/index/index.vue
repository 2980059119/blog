<template>
  <div class="main">
    <common>
      <div v-for="(post , index) in posts" :key="index"
           :class="index===posts.length - 1?'last-posts':''">
        <preview :info="post.info" :content="post.content"></preview>
        <el-button @click="jump()" :icon="Search">阅读原文
          <el-icon>
            <DArrowRight/>
          </el-icon>
        </el-button>
        <el-divider class="post-divider" border-style="dashed"/>
      </div>
      <el-pagination background pager-count="3" :hide-on-single-page="single_page_hide"
                     layout="prev, pager, next" :total="100"/>
    </common>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import preview from "@/views/mavonEditor/preview/index.vue";
import common from "@/views/common/index.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  // eslint-disable-next-line vue/no-unused-components
  components: {preview, common},
  data() {
    return {
      posts: [
        {
          info: {
            title: '文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2',
            isTop: true,
            createDate: '2021-07-19',
            infoType: ['爬虫', '抓包'],
            textNumber: '11k',
          },
          content: "文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空文章内容为空"
        },
        {
          info: {
            title: '文章标题2',
            isTop: true,
            createDate: '2021-07-19',
            infoType: ['爬虫', '抓包'],
            textNumber: '11k',
          },
          content: "文章内容为空"
        },
        {
          info: {
            title: '文章标题2',
            isTop: true,
            createDate: '2021-07-19',
            infoType: ['爬虫', '抓包'],
            textNumber: '11k',
          },
          content: "文章内容为空"
        }
      ],
      single_page_hide: true,
    }
  },
  methods: {
    jump() {
      this.$router.push('/posts')
    }

  },
  //两个生命周期中监听窗口大小变化
  //参数1：监听的事件
  //参数2：一个回调函数，用于赋值
  created() {
  },
  beforeUnmount() {
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
