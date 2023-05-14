<template>
  <p>
    <label style="margin-right: 16px;">切换 Loading</label>
    <el-switch v-model="loading"/>
  </p>
  <div>

    <el-skeleton :loading="loading" animated>
      <template v-slot:template>
        <el-skeleton-item
            variant="image"
            style="width: 100%; height: 240px;"
        />
        <div style="padding: 14px;">
          <el-skeleton-item variant="h3" style="width: 50%;"/>
          <div
              style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
          >
          </div>
        </div>
      </template>
      <template v-slot:default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom card-header">
              <span class="time">{{ currentDate }}</span>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "test",
  data() {
    return {
      loading: true,
      currentDate: '2021-06-01'
    }
  },
}
</script>
