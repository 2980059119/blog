<template>
    <div class="post-block">
      <header class="post-header">
        <h1 class="post-title">
          <a href="" class="post-title-link">{{ posts.title ? posts.title : '文章为空' }}</a>
        </h1>
        <div class="post-meta">
            <span class="post-meta-item" v-show="posts.isTop">
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
                <time :title="`创建时间${posts.createDate ? posts.createDate : '1970-01-01'}`">{{
                    posts.createDate ? posts.createDate : '1970-01-01'
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
                <span>{{ posts.text_number ? posts.text_number : '0' }}</span>
            </span>
          <br>
          <span class="post-meta-item post-meta-type" v-show="posts.posts_type">
                <el-icon>
                    <Folder/>
                </el-icon>
                <span class="post-meta-item-text">分类于</span>
                <span v-for="(type,index) in posts.posts_type" :key="index" class="post-meta-class">
                    <a href="">
                        <span>{{ type }}</span>
                    </a>
                </span>

            </span>
        </div>
      </header>
      <div class="post-body" itemprop="articleBody">
        <p>{{ posts.text_body ? posts.text_body : '文章内容为空' }}</p>
        <el-button :icon="Search">阅读原文
          <el-icon>
            <DArrowRight/>
          </el-icon>
        </el-button>
        <el-divider class="post-divider" border-style="dashed"/>
      </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Article",
  props: {
    posts: {
      required: true,
      type: Object,
      default() {
        return {
          title: '文章为空',
          isTop: false,
          createDate: '1970-01-01',
          posts_type: undefined,
          text_body: '文章内容为空',
          text_number: '0',
        }
      },
      validator(value) {
        // 这个值必须与下列字符串中的其中一个相匹配
        console.log(value)
        return ['title', 'isTop', 'createDate', 'posts_type', 'text_body', 'text_number'].includes(value)
      }
    }
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      posts: this.posts
    }
  }
}
</script>

<style lang="less" scoped>
.post-block {
  .post-header {
    .post-title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      font-weight: 400;
      margin: initial;
      text-align: center;

      .post-title-link {
        border-bottom: none;
        color: #555;
        display: inline-block;
        line-height: 1.2;
        position: relative;
        vertical-align: top;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;

      }

      .post-title-link::before {
        background-color: #000;
        bottom: 0;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        transform: scaleX(0);
        visibility: hidden;
        width: 100%;
        transition-delay: 0s;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
      }

      .post-title-link:hover::before {
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

    .el-button:hover {
      background: #555;
      border-color: #555;
      color: #fff;
    }

    .post-divider {
      width: 7%;
      margin: 30px auto 50px;
    }
  }
}


h1 {
  font-size: 1.75em;
}
</style>
