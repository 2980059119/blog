<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <editorPreview :posts-info="post.info" :posts-content="post.content" id="editor-preview"></editorPreview>
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Posts",
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
        content: "​\t\t一个基于 Spring Boot 2.4.6 、spring-cloud-alibaba 2020.0.RC1、spring-cloud 2020.0.3、java jdk11、 mybatis-plus 3.4.3.3、 JWT、Spring Security 2.2.10.RELEASE、mysql 5.7、Redis、Vue的前后端分离的后台管理系统\n" +
            "\n" +
            "## 简介\n" +
            "\n" +
            "- 使用最新技术栈，社区资源丰富。\n" +
            "- 权限控制采用 RBAC 思想\n" +
            "- 高效率开发，代码生成器可一键生成前后端代码\n" +
            "- 支持数据字典，可方便地对一些状态进行管理\n" +
            "- 支持接口限流，避免恶意请求导致服务层压力过大\n" +
            "- 支持接口级别的功能权限与数据权限，可自定义操作\n" +
            "- 自定义权限注解与匿名接口注解，可快速对接口拦截与放行\n" +
            "- 对一些常用地前端组件封装：表格数据请求、数据字典等\n" +
            "- 前后端统一异常拦截处理，统一输出异常，避免繁琐的判断\n" +
            "- 支持在线用户管理与服务器性能监控，支持限制单用户登录\n" +
            "- 支持运维管理，可方便地对远程服务器的应用进行部署与管理\n" +
            "\n" +
            "### 系统功能\n" +
            "\n" +
            "- 用户管理：提供用户的相关配置，新增用户后，默认密码为123456\n" +
            "- 角色管理：对权限与菜单进行分配，可根据部门设置角色的数据权限\n" +
            "- 菜单管理：已实现菜单动态路由，后端可配置化，支持多级菜单\n" +
            "- 部门管理：可配置系统组织架构，树形表格展示\n" +
            "- 岗位管理：配置各个部门的职位\n" +
            "- 字典管理：可维护常用一些固定的数据，如：状态，性别等\n" +
            "- 系统日志：记录用户操作日志与异常日志，方便开发人员定位排错\n" +
            "- SQL监控：采用druid 监控数据库访问性能，默认用户名admin，密码123456\n" +
            "- 定时任务：整合Quartz做定时任务，加入任务日志，任务运行情况一目了然\n" +
            "- 代码生成：高灵活度生成前后端代码，减少大量重复的工作任务\n" +
            "- 邮件工具：配合富文本，发送html格式的邮件\n" +
            "- 支付宝支付：整合了支付宝支付并且提供了测试账号，可自行测试\n" +
            "- 服务监控：监控服务器的负载情况\n" +
            "- 运维管理：一键部署你的应用\n" +
            "\n" +
            "### 项目结构\n" +
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
            "### 目录对应作用\n" +
            "\n" +
            "```tex\n" +
            "gxlyedu-auth：\n" +
            "\n" +
            "\tconfig ：\n" +
            "\t\tJwtAuthenticationFilter\n" +
            "\t\tLoginCode-登录验证码配置信息\n" +
            "\t\tLoginCodeEnum-验证码配置枚举\n" +
            "\t\tLoginProperties-配置文件读取\n" +
            "\t\tSecurityConfig-Security认证框架配置信息，配置有密码的加密方式，放行拦截规则等\n" +
            "\t\t\n" +
            "\tcontroller：\n" +
            "\t\tAuthorizationController-登录、退出、用户信息、验证码\n" +
            "\t\tOnlineController-\n" +
            "\t\t\n" +
            "\tsecurity：\n" +
            "\t\tJwtAccessDeniedHandler-拒绝访问处理程序\n" +
            "\t\tJwtAuthenticationEntryPoint-认证入口点\n" +
            "\t\t\n" +
            "\tservice：\n" +
            "\t\tUserDetailsServiceImpl-继承UserDetailsService接口以实现接管Security默认校验功能，先读取redis如没有在查数据库，查询到数据后存入redis中\n" +
            "\t\t\n" +
            "gxlyedu-common：\n" +
            "\tgxlyedu-common-core：\n" +
            "\t\tannotation：接口\n" +
            "\t\t\tanonymous：不需要经过权限校验的请求-匿名请求\n" +
            "\t\t\t\n" +
            "\t\tconfig：配置信息\n" +
            "\t\t\tConfigurerAdapter-全局跨域处理、上传文件存储读取位置、消息转换器\n" +
            "\t\t\tFileProperties-判断当前部署的电脑系统\n" +
            "\t\t\tMybatisPlusConfig-mybatis配置信息\n" +
            "\t\t\tMybatisPlusFillHandler-mybatis自动更新处理器\n" +
            "\t\t\tRedisConfig-Redis配置信息、序列化器\n" +
            "\t\t\t\n" +
            "\t\tconstant：常量\n" +
            "\t\t\tenums-邮箱、权限、菜单类型、请求方式枚举\n" +
            "\t\t\tServiceNameConstants-微服务名\n" +
            "\t\t\t\n" +
            "\t\tdomain：公共实体类\n" +
            "\t\t\n" +
            "\t\texception：异常信息\n" +
            "\t\t\tApiError-异常返回格式\n" +
            "\t\t\tGlobalExceptionHandler-全局异常处理\n" +
            "\t\t\tBadRequestException-统一异常处理\n" +
            "\t\t\tEntityExistException-实体存在异常\n" +
            "\t\t\tEntityNotFoundException-实体未找到异常\n" +
            "\t\t\tFeignClientErrorDecoder-远程调用微服务异常\n" +
            "\t\t\tInnerAuthException-内部认证异常\n" +
            "\t\t\tServiceException-服务内部异常\n" +
            "\t\tfeign：feign 请求拦截器\n" +
            "\t\t\n" +
            "\t\tutils：全局工具类\n" +
            "\t\t\tbean拷贝、时间转换、加解密、File工具类，扩展 hutool 工具包、获取IP、分页工具、Redis、Rsa 工具类，公钥私钥生成，加解密、SecurityUtils、SpringContextHolder、验证工具、翻译工具类\n" +
            "\t\t\t\n" +
            "\tgxlyedu-common-log：LogAspect使用切面方法，以注解的形式保存日志\n" +
            "\t\n" +
            "\tgxlyedu-common-security：\n" +
            "\t\tInnerAuth-内部认证注解，配置此注解方法只能有内部程序访问\n" +
            "\t\tInnerAuthAspect-内部认证注解、调用验证处理\n" +
            "\t\tconfig：\n" +
            "\t\t\tPermissionConfig-自定义权限校验\n" +
            "\t\t\tSecurityProperties-Jwt参数配置\n" +
            "\t\tinterceptor：全局拦截请求\n" +
            "\t\t\n" +
            "gxlyedu-gateway:\n" +
            "\tconfig:网关配置信息\n" +
            "\tfilter：网关过滤器\n" +
            "\t\tGlobalLogFilter-所有请求经过的第一个网关过滤器，用户记录用户信息，记录请求所需时间\n" +
            "\t\tRequestFilter-所有请求经过的第二个网关过滤器，请求过滤\n" +
            "\t\tAuthFilter-所有请求经过的最后一个网关过滤器，认证过滤、查看是否在过滤白名单上，或者是否携带token\n" +
            "\t\t\n" +
            "gxlyedu-generator：代码生成器\n" +
            "\n" +
            "gxlyedu-logging：日志模块，提供服务供用户、程序添加读取删除更新日志\n" +
            "\n" +
            "gxlyedu-tools：工具模块，支付服务、邮件服务、本地存储服务、oss存储服务\n" +
            "\n" +
            "gxlyedu-api : 所有微服务所需的openFeign调用接口\n" +
            "\n" +
            "gxlyedu-server：服务模块\n" +
            "\tgxlyedu-mnt：运维模块\n" +
            "\t\n" +
            "\tgxlyedu-quartz：定时模块\n" +
            "\t\n" +
            "\tgxlyedu-school：学校模块\n" +
            "\t\n" +
            "\tgxlyedu-system-core：系统模块\n" +
            "\n" +
            "```\n" +
            "\n" +
            "\n" +
            "\n" +
            "### ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABH1JREFUSA3tVl1oHFUUPmdmd2ltklqbpJDiNnXFmgbFktho7YMPNiJSSZM0+CAYSkUELVhM6YuwIPpgoOKDqOBDC0XE2CQoNtQXBUFTTcCi+Wlh1V2TQExsUzcltd3M9Tt3ZjZzZ2fT+OJTL8yeM+eee757fmeJbq//KQL8X3DUSFOcfr7cRsRtxNQMWueeVzOkaITIGqQHNg5y8+jNW9ldM7A6nTpAjuolUikAwq7CE3WcM2RRDz+XGVgN3FptU/aUSlvq9Pa3iZ1+sgAqJyyAFqkipd9dqiwHF3P65YycLWc/6sqGrvoEoIp6DOFaX5h6+dnfjkWprwqsPk0dUGq5vySwDImC10KxFHgGL1SWoc92O3eVht09qdXNH11I2SsTsJYqMWzihqGMi+A+Garf3BAuuLI5oGlULyNfyB/HYNujwktOfRrMr5t77NmevqaUopx0grnKAyvVpmwUDB4x6FPXuGvYLTDwWsejwgtgkYKPqRJg8SV6xaiZ3ZTppGneS4yfH5/66fZSDHv+QZci/+h5c5UHtpy67JUqGppM0sh0Nc1dW6/N1W5Yoqat8/TU/VnadmdeW2PLLSyh0cvxBs3KbqTmwYPpxN4do/mzE8nEpvX/UMu2Wbp74zUAK5q6WkHns7V0eWkdPbPzd3rxkTGybadYySumVzhcaJFbs5UrEkQ/+CK8gF5dnh/6ciIZ73gwQ927L1IitoxKLXYP3SjYdOrHHfTZhRRlFyrorafPk20B3HPD1y2G3qKZME5Jcf3t/HUC13/8tSd++vqFveMUTwAUxSUFI1QekR1+bIze3D9MF2aq6cPvG72CgnldWCFqyRw3lwH8ZMerjTD9ElRO7Gv44wNpC90aASqGfVlz/Rx17srQ57/UU26hkhQqUB7dBR71WmzQhHUnblGmVOEw0jhbV1n9OlXUDCIRGaNV5Jp43N516fN7JmnTHdfp7Hgy0luO4aMhtkLL8Bi3bUWYvzh5Mn1dTxrL6QmGuRhGL/TiTTxRoEdTszSaq9GR0NGA3KdkOz3hqSV3MIDhQ5IVX/Ivx3umBti2es2h4eZby7x8br1rkf7Mo90AqC8aQ3sJeNzqFRu+vSANAQe3PL7l0HGOAdwDCeZYvNKeoZp1Qfs6Aipndh86HmFRi0LAnEO47wsqM6cdfjh3jBPUzhZy7nvlUfFsamED1VQt6aISHVymXZ/B2aCtIG8AI8xfobj2d3en1wWVhOeHELKmLQ1s211s88comkv4UCwWyF787mJdYXtNfhKAXVqnKTq8QZvGAGGOfaTo5pGZ/PwbUCr5+DPr/1J92JNHr9aOl/F3iI5+O1nfybsGxoimvZ3ViWSluDITw3P37mypheDIPY0tw7+O/5ApbkYw+zpfaUVu32Pi98+defdUhEpZkRFq0aqyNh9FuL9hpYbEm6iwi0z2REd09ZmyENEbuhjDWzKvZXTqKYaBIr3tt5kuPtQBZFvEUwHt60vfCNu41XsksH9Ij1BMMz1Y0OOunHNShFIP5868g5zeXmuLwL9T4b6Q2+KejgAAAABJRU5ErkJggg==)快速开始\n" +
            "\n" +
            "使用该项目前，你需要检查你本地的开发环境，避免出现问题!\n" +
            "\n" +
            "#### 所需环境\n" +
            "\n" +
            "```text\n" +
            "1、JDK：11\n" +
            "2、Redis 3.0+\n" +
            "3、Maven 3.0+\n" +
            "4、MYSQL 5.7.0\n" +
            "5、Node v10+ (最好使用 12，高版本可能会有问题)\n" +
            "```\n" +
            "\n" +
            "注意\n" +
            "\n" +
            "前端安装完 node 后，最好设置下淘宝的镜像源，不建议使用 cnpm（可能会出现奇怪的问题）\n" +
            "\n" +
            "```text\n" +
            "npm config set registry https://registry.npm.taobao.org\n" +
            "配置后可通过下面方式来验证是否成功\n" +
            "npm config get registry\n" +
            "\n" +
            "在 ~/.npmrc 加入下面内容，可以避免安装 node-sass 失败\n" +
            "sass_binary_site=https://npm.taobao.org/mirrors/node-sass/\n" +
            "\n" +
            ".npmrc 文件位于\n" +
            "win：C:\\Users\\[你的账户名称]\\.npmrc\n" +
            "linux：直接使用 vi ~/.npmrc\n" +
            "```\n" +
            "\n" +
            "#### 开发准备\n" +
            "\n" +
            "提示\n" +
            "\n" +
            "在使用该系统前，你还需要做如下准备\n" +
            "\n" +
            "1. 给 [idea (opens new window)](https://blog.csdn.net/wochunyang/article/details/81736354)安装 lombok 插件，我们用它可以省略get，set 方法，可以使代码更简洁， 具体查看 [lombok教程(opens new window)](https://www.ydyno.com/archives/1147.html)\n" +
            "2. 了解MapStruct，项目用到了他映射实体，如果你不熟悉可以查看：[熟悉MapStruct(opens new window)](https://www.jianshu.com/p/3f20ca1a93b0)\n" +
            "3. 你需要有 Spring boot 的基础，推荐教程 [Spring Boot 2.0 学习(opens new window)](https://github.com/ityouknow/spring-boot-examples)\n" +
            "4. 你还需要有 [Vue (opens new window)](https://cn.vuejs.org/v2/guide/)的基础，推荐入门视频教程 [网易云课堂(opens new window)](https://study.163.com/course/courseMain.htm?courseId=1004711010)\n" +
            "\n" +
            "#### 运行项目\n" +
            "\n" +
            "注意\n" +
            "\n" +
            "因为本项目是前后端分离的，所以需要前后端都启动好，才能进行访问"
      },
      aData: [],  // 瞄点数据
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
      let arr = str.split("");
      let newArr = [...new Set(arr)];
      return newArr.join("");
    }


  },
  created() {
    this.listA()
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
