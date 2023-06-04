import {createApp} from 'vue'
import App from './App.vue'
import router from './router/routers'
import store from './store'
import i18n from './i18n'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import common from "@/components/Common.vue";
import editorPreview from "@/components/EditorPreview.vue";
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
// 引入中文包
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App);
app.component(common.name, common)
app.component(editorPreview.name, editorPreview)
app.use(i18n)
    .use(store)
    .use(router)
    .use(UndrawUi)
    .use(ElementPlus, {locale: zhCn})
    .mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
