<template>
  <div>
    {{ obj.output }}
    <span className="easy-typed-cursor">|</span>
  </div>
</template>
<script>
import EasyTyper from 'easy-typer-js'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  data() {
    return {
      obj: {
        output: '',
        isEnd: false,
        speed: 80,
        singleBack: false,
        sleep: 0,
        type: 'normal',
        backSpeed: 40,
        sentencePause: false
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      this.fetchData()
    },
    fetchData() {
      // 一言Api进行打字机循环输出效果
      fetch('https://v1.hitokoto.cn')
          .then(res => {
            console.log("res == " + res)
            return res.json()
          })
          .then(({hitokoto}) => {
            console.log("hitokoto == " + hitokoto)
            this.initTyped(hitokoto)
          })
          .catch(err => {
            this.initTyped("但行好事莫问前程")
            console.error(err)
          })
    },
    initTyped(input, fn, hooks) {
      const obj = this.obj
      // eslint-disable-next-line no-unused-vars
      const typed = new EasyTyper(obj, input, fn, hooks)
    }
  }
}
</script>
