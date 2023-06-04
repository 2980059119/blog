<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <h1>tags</h1>
        <div class="post-body" style="opacity: 1; display: block; transform: translateY(0px);">
          <div class="tag-cloud">
            <h5 class="tag-cloud-title">目前共计 {{ tags.length }} 个标签</h5>
            <div class="tag-cloud-tags">
              <router-link to="/" v-for="(tag,index) in tags" :key="index"
                           :class="tag.articleNum>1?tag.articleNum>3?'tag-cloud-one':'tag-cloud-two':''">
                {{ tag.tagName }}
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </common>
  </div>
</template>

<script>
import tag from "@/api/tag";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tags",
  data() {
    return {
      tags: []
    }
  },
  created(){
    this.selectAll()
  },
  methods:{
    selectAll(){
      tag.selectAll().then((result) => {
        this.tags = result
      }).catch((err) => {
        console.log(err)
      });
    }
  }
}
</script>

<style lang="less" scoped>
.post-body {
  .tag-cloud {
    .tag-cloud-tags {
      text-align: start;

      a {
        font-size: 12px;
        color: #5c5c5c;
        display: inline-block;
        margin: 10px;
        word-wrap: break-word;
        background-color: transparent;
        border-bottom: 1px solid #999;
        outline: none;
        text-decoration: none;
        cursor: pointer;
      }

      .tag-cloud-one {
        font-size: 25.5px;
        color: #404040
      }

      .tag-cloud-two {
        font-size: 21px;
        color: #6f6f6f
      }
    }
  }
}

</style>
