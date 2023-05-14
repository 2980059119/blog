<template>
  <li class="categories">
    <a class="category-list-link">{{ sourceItem.title }}({{ sourceItem.articlesNumber }})</a>
    <ul v-if="sourceItem.children" class="categories-item">
      <categories-item
          v-for="(item,index) in sourceItem.children"
          :sourceItem="item" :level="level+1" :key="index">
      </categories-item>
    </ul>
  </li>

</template>

<script>
export default {
  name: 'categoriesItem',
  props: {
    sourceItem: {
      type: Object
    },
    level: {
      type: Number
    }
  },
}
</script>
<style scoped>
.categories-item {
  padding: 0;
  margin-left: 20px;
}

.category-list-link {
  background-color: transparent;
  border-bottom: 1px solid #999;
  color: #555;
  outline: none;
  text-decoration: none;
  cursor: pointer;
}

</style>
