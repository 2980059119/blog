<template>
  <header>
    <div class="background_picture">
      <div class="background_img">
        <div class="header_title">
          <h1 class="header_h1 ">
            <a href="" rel="">IKUN 的个人博客</a>
          </h1>
          <h2 class="header_intro header_intro_title">但行好事莫问前程</h2>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="main-inner">
      <div class="content-wrap">
        <section id="posts" class="posts-expand">
          <article v-for="(posts , index) in content" :key="index" :class="[index===content.length?'last-posts':'']">
            <Article :posts="posts"></Article>
          </article>
        </section>
      </div>
    </div>
  </main>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import Article from "@/views/article/index.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  // eslint-disable-next-line vue/no-unused-components
  components: {Article},
  data() {
    return {
      content: [
        {
          title: '文章标题1',
          isTop: true,
          createDate: '2021-07-19',
          posts_type: ['爬虫', '抓包'],
          text_body: '文章内容',
          text_number: '11k',
        },
        {
          title: '文章标题2',
          isTop: true,
          createDate: '2021-07-19',
          posts_type: ['爬虫', '抓包'],
          text_body: '文章内容',
          text_number: '11k',
        },
        {
          title: '文章标题3',
          isTop: true,
          createDate: '2021-07-19',
          posts_type: ['爬虫', '抓包'],
          text_body: '文章内容',
          text_number: '11k',
        }
      ],
      test: 1,
    }
  },
  methods: {
    //定义数据获取方法
    handleResize() {
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
<style lang="less" scoped>
// 配置背景图片
.background_picture {
  //固定外层盒子，不受其他盒子影响
  //放在最底层
  width: 100%;
  height: 50vh;
  position: relative;
  z-index: 1;

  .background_img {
    //这里外层盒子已经固定定位了，其实可以不加定位
    position: absolute;
    background-image: url(@/assets/image/index.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    //保证盒子始终在窗口中心
    background-position: center center;
    //避免窗口周围留白
    width: 100%;
    height: 100%;

    .header_title {
      position: relative;
      align-items: center;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      z-index: 1;

      .header_h1 {
        letter-spacing: -1px;
        font-weight: 700;
        font-size: 50px;
        text-shadow: 0 3px 6px rgba(0, 0, 0, .3);
        -webkit-animation: fade-in-down 1s both;
        animation: fade-in-down 1s both;
        -webkit-animation-delay: .5s;
        animation-delay: .5s;
      }

      .header_h1 a {
        color: #fff;
      }

      .header_intro_title {
        font-size: 20px;
        font-weight: 400;
      }

      .header_intro {
        margin-top: 10px;
        color: rgba(255, 255, 255, .8);
        line-height: 24px;
        text-shadow: 0 3px 6px rgba(0, 0, 0, .3);
        -webkit-animation: fade-in-down .9s both;
        animation: fade-in-down .9s both;
        -webkit-animation-delay: .3s;
        animation-delay: .3s;
      }
    }
  }
}

.main-inner {
  margin: 0 auto;
  width: calc(100% - 20px);

  .content-wrap {
    background: #fff;
    box-sizing: border-box;
    float: right;
    min-height: 700px;
    padding: 40px;
    width: calc(100% - 252px);
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .el-divider--horizontal {
      width: 100%;
      margin: 30px auto;
    }
  }
}

main {
  margin: 40px 0;
}

@media (min-width: 1200px) {
  .main-inner {
    width: 1160px;
  }
}


</style>
<style>

.last-posts .post-divider {
  width: 100% !important;
  --el-border-style: double !important;
  margin: 40px auto 0 !important;
}
</style>
