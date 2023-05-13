<template>
  <div class="main">
    <common>
      <preview :info="post.info" :content="post.content"></preview>
    </common>
  </div>
</template>
<script>
import common from "@/views/tools/common/index.vue";
import preview from "@/views/tools/mavonEditor/preview/index.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Posts",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    common, preview
  },
  data() {
    return {
      post: {
        info: {
          title: '文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2',
          isTop: true,
          createDate: '2021-07-19',
          categories: ['爬虫', '抓包'],
          textNumber: '11k',
        },
        content: "### 项目结构\n" +
            "\n" +
            "项目采用按功能分模块的开发方式，结构如下\n" +
            "\n" +
            "- `gxlyedu-common` 为系统的公共模块\n" +
            "- `gxlyedu-common->gxlyedu-common-core` 为系统的公共模块，各种工具类，公共配置存在该模块\n" +
            "- `gxlyedu-common->gxlyedu-common-log` 为系统的公共模块，公共日志模块\n" +
            "- `gxlyedu-common->gxlyedu-common-security` 为系统的公共模块，权限校验模块\n" +
            "- `gxlyedu-api` 为系统的远程接口调用（openFeign）\n" +
            "- `gxlyedu-gateway` 微服务网关，所有流量经过网关，由网关分发到具体微服务\n" +
            "- `gxlyedu-auth` 为系统的权限（Security）模块，包含登录验证，验证码....\n" +
            "- `gxlyedu-server` 为系统微服务服务模块 里面存放了核心服务功能\n" +
            "- `gxlyedu-server->gxlyedu-system-core` 系统的最核心的模块整个后台项目的整体权限架构\n" +
            "- `gxlyedu-server->gxlyedu-school` 为系统的学校模块，包含对学校专业，学生，老师的操作\n" +
            "- `gxlyedu-server->gxlyedu-mnt` 为系统的运维\n" +
            "- `gxlyedu-logging` 为系统的日志模块，其他模块如果需要记录日志需要引入该模块\n" +
            "- `gxlyedu-tools` 为第三方工具模块，包含：图床、邮件、云存储、本地存储、支付宝\n" +
            "- `gxlyedu-generator` 为系统的代码生成模块，代码生成的模板在 system 模块中\n" +
            "\n" +
            "### 具体微服务对应端口范围\n" +
            "\n" +
            "```\n" +
            "GatewayApplication :8081 - 9000\n" +
            "AuthApplication :11000 - 11999\n" +
            "MntApplication :12000 - 12999\n" +
            "QuartzApplication :13000 - 13999\n" +
            "SystemCoreApplication :14000 - 14999\n" +
            "ToolsApplication :15000 - 15999\n" +
            "LogApplication :16000 - 16999\n" +
            "GenratorApplication :17000 - 17999\n" +
            "SchoolApplication:18000 - 18999\n" +
            "```\n" +
            "\n" +
            "### 目录对应作用"
      }
    }
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
    text-indent: 2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}
</style>
