<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <div v-loading="loading">
          <div v-for="(post,index) in posts.records" :key="index"
               :class="index===posts.records.length - 1?'last-posts':''">
            <editorPreview :posts="post" :posts-content="post.excerpt" :navigation="false"></editorPreview>
            <el-button @click="alias(post.alias)">阅读原文
              <el-icon>
                <DArrowRight/>
              </el-icon>
            </el-button>
            <el-divider class="post-divider" border-style="dashed"/>
          </div>
          <el-pagination v-show="show" background pager-count="3" :hide-on-single-page="single_page_hide"
                         layout="prev, pager, next,jumper" :page-count="parseInt(posts.pages)"
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :page-size="parseInt(posts.size)" :total="parseInt(posts.total)"/>
          <span v-show="!show">获取文章失败</span>
        </div>
      </template>
    </common>
  </div>
</template>
<script>
import posts from "@/api/posts";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  data() {
    return {
      posts: [
        {
          // 记录
          records: [
            {
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
            }
          ],
          // 总条目数
          total: 0,
          // 每页显示条目个数
          size: 0,
          // 当前页
          current: 0,
          orders: [],
          // 总页数
          pages: 0,
        }
      ],
      single_page_hide: true,
      loading: true,
      //当前页数展示数据条数
      limit: 3,
      show : true
    }
  },
  created() {
    // 获取 文章列表
    this.selectAll({size: 3})
  },
  methods: {
    // 跳转到 具体文章
    alias(alias) {
      this.$router.push({name: 'posts', params: {alias: alias}})
    },
    // 查询全部文章
    selectAll(page) {
      this.loading = true
      posts.selectAll(page).then((result) => {
        this.posts = result
      }).catch((err) => {
        console.log(err)
        this.show = false
        // this.$message.error(err);
      });
      this.loading = false
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 分页
    handleCurrentChange(val) {
      this.selectAll({size: this.limit, current: val})
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

</style>
<style scoped>
.el-pagination {
  margin: 40px auto 0;
  display: inline-flex;
}

.el-button:hover {
  background: #555;
  border-color: #555;
  color: #fff;
}

</style>
