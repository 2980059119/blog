<template>
  <header class="post-header">
    <h1 class="post-title" itemprop="name headline">
      <router-link to="/" class="post-title-link">{{ PostsInfo.title ? PostsInfo.title : '文章为空' }}</router-link>
    </h1>
    <div class="post-meta">
            <span class="post-meta-item" v-show="PostsInfo.top">
                <span class="post-meta-item-icon">
                    <el-icon>
                        <Promotion style="width: 1em; height: 1em;"/>
                    </el-icon>
                </span>
                <time title="置顶" style="color:#7D26CD;">置顶</time>
                      <el-divider direction="vertical" border-style="dashed"
                                  border-color="#dcdcdc"/>
            </span>

      <span class="post-meta-item">
                <el-icon>
                    <Calendar/>
                </el-icon>
                <span class="post-meta-item-text">发表于</span>
                <time :title="`创建时间${PostsInfo.date ? PostsInfo.date : '1970-01-01'}`">{{
                    PostsInfo.date ? PostsInfo.date : '1970-01-01'
                  }}</time>
            </span>

      <span class="post-meta-item" title="本文字数">
                <el-divider direction="vertical" border-style="dashed"
                            border-color="#dcdcdc"/>
                <span class="post-meta-item-icon">
                    <el-icon>
                        <Document/>
                    </el-icon>
                </span>
                <span class="post-meta-item-text">本文字数：</span>
                <span>{{ formatNumber(PostsInfo.wordCount ? PostsInfo.wordCount : '0') }}</span>
            </span>
      <br>
      <span class="post-meta-item post-meta-type" v-show="PostsInfo.categoriesList">
                <el-icon>
                    <Folder/>
                </el-icon>
                <span class="post-meta-item-text">分类于</span>
                <span v-for="(categories,index) in PostsInfo.categoriesList" :key="index" class="post-meta-class">
                    <a href="">
                        <span>{{ categories }}</span>
                    </a>
                </span>

            </span>
    </div>
  </header>

</template>

<script>
export default {
  name: "PostHeader",
  props: {
    postsInfo: {
      required: true,
      type: Object,
      default() {
        return {
          postsInfo: {
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
          },
        }
      },
    }
  },
  watch: {
    postsInfo(newValue) {
      this.PostsInfo = newValue
    },
  },
  data() {
    return {
      PostsInfo: this.postsInfo,
    }
  },
  methods:{
    formatNumber(num) {
      return (num / 1000).toFixed(1) + "k";
    }
  }
}
</script>

<style lang="less" scoped>
.post-header {
  width: 50%;
  margin: 0 auto;

  .post-title {
    overflow-wrap: break-word;
    word-wrap: break-word;
    font-weight: 800;
    margin: initial;
    text-align: center;
    font-size: 26px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    .post-title-link {
      border-bottom: none;
      color: #555;
      display: contents;
      line-height: 1.5;
      position: relative;


    }

    .post-title-link::after {
      background-color: #000;
      bottom: 0;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      visibility: hidden;
      width: 100%;
      transition-delay: 0s;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
    }

    .post-title-link:hover::after {
      transform: none;
      visibility: inherit;
    }
  }

  .post-meta {
    color: #999;
    margin: 3px 0 20px 0;
    text-align: center;

    time {
      border-bottom: 1px dashed #999;
      cursor: help;
    }

    .post-meta-item {
      font-size: 0.75em;
    }

    .post-meta-type {
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      width: 50%;
      margin: 0 auto;
    }

    .post-meta-class {
      a {
        word-wrap: break-word;
        background-color: transparent;
        border-bottom: 1px solid #999;
        color: #555;
        outline: none;
        text-decoration: none;
        cursor: pointer;

      }

    }

    .post-meta-class:not(:last-child)::after {
      content: ' ,  '
    }
  }
}

</style>
