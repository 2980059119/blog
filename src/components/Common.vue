<template>
  <div class="common-layout">
    <el-container :style="cssVars">
      <el-header>
        <div class="background_picture">
          <div class="background_img">
            <div class="header_title">
              <h1 class="header_h1 ">
                <router-link to="/" href="" rel="">{{ info.title }}</router-link>
              </h1>
              <h2 class="header_intro header_intro_title">{{ typer.output }}<span class="animation"></span>
              </h2>
            </div>
          </div>
        </div>
      </el-header>
      <el-container class="main">
        <el-aside width="240px">
          <div class="header-inner">
            <div class="site-brand-wrapper">
              <div class="site-meta">
                <div class="custom-logo-site-title">
                  <span class="site-logo">
                    <router-link to="/" rel="start">
                      <el-image class="site-logo-img"
                                :src="info.avatar">
                          <template #placeholder>
                            <div class="image-slot"></div>
                          </template>
                          <template #error>
                            <img :src="require('@/assets/images/ikun.jpg')" class="el-image__inner">
                          </template>
                      </el-image>
                    </router-link>
                  </span>
                  <span class="site-title">{{ info.name }}</span>
                </div>
                <p class="site-subtitle">{{ info.sign }}</p>
              </div>
            </div>
            <nav class="site-nav">
              <ul id="menu" class="menu">
                <li class="menu-item menu-item-home">
                  <router-link to="/" rel="section">
                    <el-icon>
                      <HomeFilled/>
                    </el-icon>
                    首页
                  </router-link>
                </li>
                <li class="menu-item menu-item-tags">
                  <router-link :to="{name: 'tags'}" rel="section">
                    <el-icon>
                      <PriceTag/>
                    </el-icon>
                    标签
                    <span class="badge">{{ tag }}</span>
                  </router-link>
                </li>
                <li class="menu-item menu-item-categories">
                  <router-link :to="{name: 'categories'}" rel="section">
                    <el-icon>
                      <Menu/>
                    </el-icon>
                    分类
                    <span class="badge">{{ categories }}</span>
                  </router-link>
                </li>
                <!-- <li class="menu-item menu-item-archives">
                  <router-link :to="{name: 'archives'}" rel="section">
                    <el-icon>
                      <Box/>
                    </el-icon>
                    文章
                    <span class="badge">29</span>
                  </router-link>
                </li> -->
                <li class="menu-item menu-item-about">
                  <router-link :to="{name: 'about'}" rel="section">
                    <el-icon>
                      <User/>
                    </el-icon>
                    关于
                  </router-link>
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
          <div class="header-inner" style="margin-top: 20px">
            <slot name="aside"></slot>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <div class="main-inner">
              <div class="content-wrap">
                <!-- 文章内容 -->
                <slot name="content"></slot>
              </div>
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>

      </el-container>
    </el-container>
  </div>
  <!--<div style="position: fixed; bottom: 0;z-index: 100;">-->
  <!--  <live2d-->
  <!--      :style="style"-->
  <!--      :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']"-->
  <!--      :direction="direction"-->
  <!--      :size="size"-->
  <!--  ></live2d>-->
  <!--</div>-->
</template>
<script>
import EasyTyper from "easy-typer-js";
// import live2d from 'vue-live2d'
import posts from '@/api/posts';
import request from '@/utils/request'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'common',
  // components: {live2d},
  data() {
    return {
      typer: {
        output: '',
        isEnd: false,
        speed: 80,
        singleBack: false,
        sleep: 0,
        type: 'normal',
        backSpeed: 40,
        sentencePause: false
      },
      loading: true,
      article: 0,
      tag: 0,
      categories: 0,
      info:{
        "name": "ikun",
        "title": "IKUN 的个人博客",
        "sign": "天青色等烟雨，而我在等你",
        "concerning": "菜鸡一枚",
        "avatar": "",
        "background": "",
        "siteBg": ""
      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      this.selectData()
      this.fetchData()
    },
    fetchData() {
      // 一言Api进行打字机循环输出效果
      fetch('https://v1.hitokoto.cn')
          .then(res => {
            return res.json()
          })
          .then(({hitokoto}) => {
            this.initTyped(hitokoto)
          })
          .catch(err => {
            this.initTyped("但行好事莫问前程")
            console.error(err)
          })
    },
    initTyped(input, fn, hooks) {
      const typer = this.typer
      // eslint-disable-next-line no-unused-vars
      const typed = new EasyTyper(typer, input, fn, hooks)
    },
    selectData(){
      posts.selectData().then((result) => {
        this.article = result.article
        this.tag = result.tag
        this.info = result.info
      }).catch((err) => {
        console.log(err)
      });
    },
  },
  computed: {
    cssVars() {
      let background = this.info.background
      let siteBg = this.info.siteBg
      if(this.info.background){
        background = 'url(' + this.info.background + ')'
      }
      if(this.info.siteBg){
        siteBg = 'url(' + this.info.siteBg + ')'
      }
      return {
        "--background": background,
        "--siteBg": siteBg
      };
    }
  }
}
</script>

<style lang="scss" >
.common-layout {
  .main {
    width: 75%;
    margin: 50px auto;
    position: relative;
    z-index: 2;
    min-width: 900px;
    display: flex;

  }

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
      min-height: 300px;
      min-width: 900px;

      .background_img {
        //这里外层盒子已经固定定位了，其实可以不加定位
        position: absolute;
        background-image: var(--background, url('@/assets/images/index.jpg'));
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
            text-shadow: 0 3px 6px rgb(0 0 0 / 60%);
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

            .animation::after {
              content: '';
              display: inline-block;
              width: 1px;
              height: 36%;
              animation: blink 1s infinite steps(1, start)
            }

            @keyframes blink {
              0% {
                background-color: white;
              }
              50% {
                background-color: rgba(0, 0, 0, 0);
              }
              100% {
                background-color: white;
              }
            }
          }

          .header_intro {
            margin: 0;
            color: rgba(255, 255, 255, .8);
            line-height: 34px;
            text-shadow: 0 3px 6px rgba(0, 0, 0, .3);
            -webkit-animation: fade-in-down .9s both;
            animation: fade-in-down .9s both;
            -webkit-animation-delay: .3s;
            animation-delay: .3s;
            width: 40%;
            /*让长段文本不换行*/
            white-space: nowrap;
            /*设置文本超出元素宽度部分隐藏*/
            overflow-x: hidden;
            /*设置文本超出部分用省略号显示*/
            text-overflow: ellipsis;
          }
        }
      }
    }
  }

  .el-aside {
    padding: 10px;
    height: 100%;

    .header-inner {
      background: #fff;
      border-radius: 15px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 6px 6px 6px -2px rgba(0, 0, 0, 0.19);
      overflow: hidden;
      .site-brand-wrapper {
        background-image: var(--siteBg, url('@/assets/images/side-bg.jpg'));
        background-position: top;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 226px;
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

                .image-slot {
                  background: #00000000;
                }
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
            margin: 0 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
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
              line-height: 24px;
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

    --el-main-padding: 10px;

    .main-inner {
      .content-wrap {
        background: #fff;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 1px 13px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);

        .el-divider--horizontal {
          width: 7%;
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

.last-posts .post-divider {
  width: 100% !important;
  --el-border-style: double !important;
  margin: 40px auto 0 !important;
}

nav a.router-link-exact-active {
  color: #ff4400;
}
</style>
