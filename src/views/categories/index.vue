<template>
  <div class="main">
    <common>
      <template v-slot:content>
        <h1>categories</h1>
        <h5>目前共计 {{ categoriesNumber(categoriesList,0) }} 个分类</h5>
        <div class="category-all">
          <ul class="category-list">
            <categories-item v-for="(item, index) in categoriesList" :key="index" :level="0"
                             :sourceItem="item"></categories-item>
          </ul>
        </div>
      </template>
    </common>
  </div>
</template>

<script>
import categoriesItem from "@/components/categoriesItem.vue";
import categories from "@/api/categories";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Categories",
  components: {categoriesItem},
  data() {
    return {
      categoriesList: [],
      categories: 0,
    }
  },
  created(){
    this.selectAll()
  },
  methods: {
    categoriesNumber(categoriesList, categoriesTemp) {
      let categoriesListLength = categoriesList.length
      if (categoriesListLength > 0) {
        for (let i = 0; i < categoriesListLength; i++) {
          categoriesTemp++;
          categoriesTemp = this.categoriesNumber(categoriesList[i].children, categoriesTemp);
        }
      }
      return categoriesTemp;
    },
    selectAll(){
      categories.selectAll().then((result) => {
        this.categoriesList = result
      }).catch((err) => {
        console.log(err)
      });
    }
  }
}
</script>

<style scoped>


.category-all {
  width: fit-content;
}

.category-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.category-list li {
  width: 0;
}
</style>
