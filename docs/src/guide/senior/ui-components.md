# UI组件 {#index}

UI组件库，是开发项目必不可少的一项，你可以自己开发一套，也可以用开源项目。

本项目为了容易扩展与二次开发，没有集成UI组件库，你可以自己集成以下开源组件库。



## Vant {#vant}

有赞团队开源，轻量、可靠的移动端 Vue 组件库。


一、安装

```sh
pnpm add vant
```

二、完整引入

```ts
// main.ts
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
app.mount('#app');
```

三、自动导入

```sh
# 需要安装以下插件
pnpm add -D unplugin-vue-components unplugin-auto-import
```

详细内容请查看 [官方文档](https://vant-contrib.gitee.io/vant/#/zh-CN/home) 、 [Github](https://github.com/youzan/vant)。

四、二开样列

- [Template-Vant-Vue](/guide/sdev/template-vant-vue)



## Element Plus {#element-plus}

经典中的经典，基于 Vue 3，面向设计师和开发者的组件库。

一、安装

```sh
pnpm add element-plus
```

二、完整引入

```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

三、自动导入

```sh
# 需要安装以下插件
pnpm add -D unplugin-vue-components unplugin-auto-import
```

详细内容请查看 [官方文档](https://element-plus.gitee.io/zh-CN/) 、 [Github](https://github.com/element-plus/element-plus)。

四、二开样列

- [Admin-Element-Vue](/guide/sdev/admin-element-vue)


## Ant Design Vue {#ant-design-vue}

Ant Design 的 Vue 实现，蚂蚁前端 UI 库，开发和服务于企业级后台产品。

一、安装

```sh
pnpm add ant-design-vue
```
二、完整引入

```ts
// main.ts
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(Antd).mount('#app');
```

三、自动导入

```sh
# 需要安装以下插件
pnpm add -D unplugin-vue-components unplugin-auto-import
```

详细内容请查看 [官方文档](https://www.antdv.com/docs/vue/introduce-cn) 、 [Github](https://github.com/vueComponent/ant-design-vue)。

四、二开样列

- [Admin-Antd-Vue](/guide/sdev/admin-antd-vue)



## Tdesign Vue Next {#tdesign-vue-next}

鹅厂优质 UI 组件，配套工具完整，设计工整，文档清晰。

一、安装

```sh
pnpm add tdesign-vue-next
```

二、完整引入

```ts
// main.ts
import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import App from './app.vue';

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App);
app.use(TDesign);
app.mount('#app')
```

三、自动导入

```sh
# 需要安装以下插件
pnpm add -D unplugin-vue-components unplugin-auto-import
```

详细内容请查看 [官方文档](https://tdesign.tencent.com/vue-next/getting-started) 、 [Github](https://github.com/Tencent/tdesign-vue-next)。



## Arco Design Vue {#arco-design-vue}

字节跳动 UI 组件库开源，大厂逻辑，设计文档完美。

一、安装

```sh
pnpm add  @arco-design/web-vue
```

二、完整引入

```ts
// main.ts
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');
```

三、自动导入

```sh
# 需要安装以下插件
pnpm add -D unplugin-vue-components unplugin-auto-import
```

详细内容请查看 [官方文档](https://arco.design/vue/docs/start) 、 [Github](https://github.com/arco-design/arco-design-vue)。



## Nutui {#nutui}

京东风格的轻量级移动端 Vue 组件库，移动端友好，面向电商业务场景。

详细内容请查看 [官方文档](https://nutui.jd.com/) 、 [Github](https://github.com/jdf2e/nutui)。


##  Varlet {#varlet}

Varlet 是一个基于 Vue3 开发的 Material 风格移动端组件库，全面拥抱 Vue3 生态，由社区团队维护。支持 Typescript、按需引入、暗黑模式、主题定制、国际化，并提供 VSCode 插件保障良好的开发体验

详细内容请查看 [官方文档](https://varlet-varletjs.vercel.app/) 、 [Github](https://github.com/varletjs/varlet)。


## Naive-UI {#naive-ui}

宝藏 Vue UI 库，Vue UI 新星，从 Vue 3 起步(比较完整，主题可调，使用 TypeScript，快)

详细内容请查看 [官方文档](https://www.naiveui.com/zh-CN/) 、 [Github](https://github.com/TuSimple/naive-ui)。



