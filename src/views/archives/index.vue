<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <el-timeline>
          <el-timeline-item center timestamp="2018-4-12" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item center timestamp="2018/4/2" placement="top">
            Event start
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            Event end
          </el-timeline-item>
        </el-timeline>
      </template>
    </common>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Archives"
}
</script>

<style scoped>

</style>
