<template>
  <div class="common-layout">
    <el-container>
      <el-header>
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
      </el-header>
      <el-container style="margin: 20px auto 40px;width: 70%;">
        <el-aside width="240px">
          <div class="header-inner">
            <div class="site-brand-wrapper">
              <div class="site-meta">
                <div class="custom-logo-site-title">
                  <span class="site-logo">
                    <a href="" rel="start">
                      <el-image class="site-logo-img" alt="D 的个人博客"
                                src="https://b3logfile.com/avatar/1353745196354_1611386411315.jpeg?imageView2/1/w/128/h/128/interlace/0/q/100">
                          <template #placeholder>
                              <div class="image-slot"></div>
                            </template>
                        <template #error>
                          <div class="image-slot">
                          </div>
                        </template>
                      </el-image>
                    </a>
                  </span>
                  <span class="site-title">IKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUN</span>
                </div>
                <p class="site-subtitle">IKUN
                  的个人博客IKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUNIKUN</p>
              </div>

              <div class="site-state motion-element">
                <div class="site-state-item site-state-posts">
                  <a href="/archives/">
                    <span class="site-state-item-count">29</span>
                    <span class="site-state-item-name">日志</span>
                  </a>
                </div>
                <div class="site-state-item site-state-categories">
                  <a href="/categories/">
                    <span class="site-state-item-count">16</span>
                    <span class="site-state-item-name">分类</span>
                  </a>
                </div>
                <div class="site-state-item site-state-tags">
                  <a href="/tags/">
                    <span class="site-state-item-count">71</span>
                    <span class="site-state-item-name">标签</span>
                  </a>
                </div>
              </div>
            </div>
            <nav class="site-nav">
              <ul id="menu" class="menu">
                <li class="menu-item menu-item-home">
                  <a href="/" rel="section">
                    <el-icon>
                      <HomeFilled/>
                    </el-icon>
                    首页
                  </a>
                </li>
                <li class="menu-item menu-item-tags">
                  <a href="/tags/" rel="section">
                    <el-icon>
                      <PriceTag/>
                    </el-icon>
                    标签
                    <span class="badge">71</span>
                  </a>
                </li>
                <li class="menu-item menu-item-categories">
                  <a href="/categories/" rel="section">
                    <el-icon>
                      <Menu/>
                    </el-icon>
                    分类
                    <span class="badge">16</span>
                  </a>
                </li>
                <li class="menu-item menu-item-archives">
                  <a href="/archives/" rel="section">
                    <el-icon>
                      <Box/>
                    </el-icon>
                    归档
                    <span class="badge">29</span>
                  </a>
                </li>
                <li class="menu-item menu-item-about">
                  <a href="/about/" rel="section">
                    <el-icon>
                      <User/>
                    </el-icon>
                    关于
                  </a>
                </li>
                <li class="menu-item menu-item-search">
                  <a href="javascript:;" class="popup-trigger">
                    <el-icon>
                      <Search/>
                    </el-icon>
                    搜索
                  </a>
                </li>
              </ul>
              <div class="site-search">
                <el-input v-model="input4" class="w-50 m-2" placeholder="搜索">
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <search/>
                    </el-icon>
                  </template>
                </el-input>
              </div>
            </nav>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <div class="main-inner">
              <div class="content-wrap">
                <section id="posts" class="posts-expand">
                  <article v-for="(posts , index) in content" :key="index"
                           :class="[index===content.length?'last-posts':'']">
                    <Article :posts="posts"></Article>
                  </article>
                  <el-pagination background pager-count="3" :hide-on-single-page="single_page_hide"
                                 layout="prev, pager, next" :total="100"/>
                </section>
              </div>
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
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
      single_page_hide: true,
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

.common-layout {
  .el-header {
    --el-header-padding: 0;
    --el-header-height: 100%;
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
        background-image: url(@/assets/images/index.jpg);
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
  }

  .el-aside {
    margin-top: 20px;
    margin-top: 10px;
    padding: 10px;

    .header-inner {
      background: #fff;
      border-radius: 15px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      .site-brand-wrapper {
        background: #000 url(@/assets/images/side-bg.jpg) top/contain no-repeat;
        width: 100%;
        height: 235px;
        padding-top: 40px;
        border-radius: 15px;

        .site-meta {
          .custom-logo-site-title {

            .site-logo {
              .site-logo-img {
                width: 86px;
                height: 86px;
                border: 4px solid hsla(0, 0%, 100%, .5);
                border-radius: 100%;
                box-shadow: inset 1px 1px 4px rgba(0, 0, 0, .3), 0 2px 3px rgba(0, 0, 0, .4);
                margin: 0 auto 5px;
                display: block;
                transition: all .3s ease-out;
              }

              .site-logo-img:hover {
                transition: 2s; /* 定义旋转过渡时间 */
                transform: rotate(-360deg); /* 定义旋转的角度 */
                /* 下面是兼容处理 */
                -ms-transform: rotate(-360deg); /* IE 9 */
                -moz-transform: rotate(-360deg); /* Firefox */
                -webkit-transform: rotate(-360deg); /* Safari and Chrome */
                -o-transform: rotate(-360deg); /* Opera */
              }
            }

            .site-title {
              color: white;
              display: inline-block;
              font-size: 1.375em;
              font-weight: normal;
              line-height: 1.5;
              width: 60%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
            }

          }

          .site-subtitle {
            color: white;
            font-size: 14px;
            font-weight: initial;
            margin: 0 30px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
          }
        }

        .site-state {
          display: flex;
          justify-content: center;
          line-height: 1.4;
          margin-top: 10px;
          overflow: hidden;
          text-align: center;
          white-space: nowrap;

          .site-state-item:first-child {
            border-left: none;
          }

          .site-state-item {
            padding: 0 10px;

            .site-state-item-count {
              color: white;
              display: block;
              font-size: 1em;
              font-weight: 600;
              text-align: center;
            }

            .site-state-item-name {
              color: #999;
              font-size: 0.8125em;

            }
          }
        }
      }

      .site-nav {
        padding: 10px;

        .menu {
          margin-top: 0;
          padding-left: 0;

          .menu-item {
            list-style-type: none;

            a {
              border-bottom: 1px solid transparent;
              display: block;
              //font-size: 0.8125em;
              box-sizing: border-box;
              line-height: 35px;
              padding: 5px 10px;
              position: relative;
              text-align: left;
              transition-property: background-color;
              transition-delay: 0s;
              transition-duration: 0.2s;
              transition-timing-function: ease-in-out;
            }

            .badge {
              background-color: #ccc;
              border-radius: 10px;
              color: #fff;
              display: inline-block;
              float: right;
              font-size: 15px;
              font-weight: 700;
              line-height: 1;
              margin: 0.35em 0 0 0;
              padding: 2px 7px;
              text-align: center;
              text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
              vertical-align: middle;
              white-space: nowrap;
            }
          }
        }

      }
    }
  }

  .el-main {

    .main-inner {
      .content-wrap {
        background: #fff;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        .el-divider--horizontal {
          width: 100%;
          margin: 30px auto;
        }

        .el-pagination {
          margin: 0 auto;
          display: inline-flex;
        }
      }
    }
  }
}


@media (min-width: 1200px) {
  .main-inner {
    //width: 1160px;
  }
}

.site-logo-img .image-slot {
  background: #00000000;
}

</style>
<style>

.last-posts .post-divider {
  width: 100% !important;
  --el-border-style: double !important;
  margin: 40px auto 0 !important;
}
</style>
