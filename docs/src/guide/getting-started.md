# 快速开始 {#index}


## 安装 {#install}

```bash
# 克隆项目
git clone https://github.com/lqsong/frame-template-vue.git

# 进入项目目录
cd frame-template-vue

# 复制文件
copy .env.development  .env.development.local # 启用或修改里面的参数

# 安装依赖，请使用 pnpm 
pnpm i 

# 本地开发 启动项目
pnpm dev

```

> 推荐使用 pnpm , **[pnpm的安装与使用](http://liqingsong.cc/article/detail/26)** 。


<br/>

启动完成后，打开浏览器访问 [http://127.0.0.1:3001](http://127.0.0.1:3001)。



## 目录结构 {#directory-structure}

本项目已经为你生成了一个完整的开发框架，下面是整个项目的目录结构。

```bash
├── .husky                     # husky插件
│   └── pre-commit
├── .vscode                    # vscode编辑器配置目录
│   ├── extensions.json
│   └── settings.json
├── mock                       # mock data
│   ├── global.ts
│   └── user.ts
├── public                     # 静态资源
│   └── favicon.ico
├── src                        # 源代码目录
│   ├── @types                 # ts 类型定义目录
│   │   ├── config.settings.d.ts
│   │   ├── i18n.d.ts
│   │   ├── nprogress.d.ts
│   │   ├── qs.d.ts
│   │   ├── utils.request.d.ts
│   │   ├── vite-env.d.ts
│   │   └── vue-router.d.ts
│   ├── assets                 # 静态资源
│   │   ├── css                # css 目录
│   │   │   ├── global.scss
│   │   │   ├── mixin.scss
│   │   │   ├── normalize.css
│   │   │   └── variables.scss
│   │   ├── iconsvg            # svg icon 目录
│   │   │   └── theme.svg
│   │   └── images             # 图片目录
│   │       └── logo.png
│   ├── components             # 组件目录
│   │   ├── IconSvg            # svgicon 组件
│   │   │   └── index.vue
│   │   ├── PageLoading        # PageLoading 组件
│   │   │   └── index.vue
│   │   ├── Permission         # Permission 组件
│   │   │   └── index.vue
│   │   ├── Spin               # Spin 组件
│   │   │   └── index.vue
│   │   └── SwitchThemeModel   # 主题开关组件
│   │       └── index.vue
│   ├── composables            # 组合式函数目录
│   │   ├── useI18n.ts         # 多语言引入
│   │   ├── useTheme.ts        # 设置主题
│   │   └── useTitle.ts        # 设置浏览器title
│   ├── config                 # 配置目录
│   │   ├── router.ts          # 路由入口
│   │   ├── settings.ts        # 站点配置
│   │   └── store.ts           # 状态管理入口
│   ├── enums                  # 枚举目录
│   │   └── utils.request.enum.ts        
│   ├── layouts                # 布局目录
│   │   ├── DefaultLayout      # 默认布局
│   │   │   ├── index.vue
│   │   │   └── routes.ts
│   │   ├── MemberLayout       # Member布局
│   │   │   ├── index.vue
│   │   │   └── routes.ts
│   │   ├── UserLayout         # User布局
│   │   │   ├── index.vue
│   │   │   └── routes.ts
│   │   └── SecurityLayout.vue # Security布局
│   ├── locales                # 多语言全局目录
│   │   ├── en-US.ts           # 英文
│   │   ├── index.ts           # 全局多语言入口
│   │   ├── zh-CN.ts           # 简体
│   │   └── zh-TW.ts           # 繁体
│   ├── pages                  # 页面目录
│   │   ├── 404                # 404页面
│   │   │   └── index.vue
│   │   ├── home               # 首页
│   │   │   ├── components
│   │   │   │   └── HelloWorld.vue
│   │   │   ├── locales
│   │   │   │   ├── en-US.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── zh-CN.ts
│   │   │   │   └── zh-TW.ts   
│   │   │   └── index.vue
│   │   ├── member             # member布局框架对应的页面
│   │   │   ├── index          # 用户后台首页
│   │   │   │   └── sindex.vue
│   │   │   └── info           # 用户后台信息页
│   │   │       └── index.vue
│   │   ├── test               # 测试页面
│   │   │   └── index.vue
│   │   └── user               # user布局框架对应的页面
│   │       └── login          # 登录页面
│   │           ├── data.d.ts
│   │           ├── index.vue
│   │           └── server.ts
│   ├── services               # 公共数据请求目录
│   │   └── user.ts            # 用户相关数据请求
│   ├── store                  # 全局状态管理目录
│   │   ├── global.ts          # 全局 store
│   │   ├── i18n.ts            # 多语言 store
│   │   └── user.ts            # 用户 store
│   ├── utils                  # 工具函数目录
│   │   ├── i18n.ts            # 多语言函数集
│   │   ├── is.ts              # is判断函数集
│   │   ├── localToken.ts      # 登录token函数集
│   │   ├── request.ts         # 数据请求工具
│   │   └── router.ts          # 路由相关的函数集
│   ├── App.vue                # App 入口
│   └── main.ts                # 入口文件
├── .editorconfig              # 编辑器风格配置
├── .env                       # 环境变量
├── .env.development           # 环境变量-开发模式
├── .env.production            # 环境变量-生产模式
├── .env.test                  # 环境变量-测试模式
├── .eslintignore              # eslint
├── .eslintrc.js               # eslint 配置
├── .gitignore                 # Git忽略文件配置
├── .npmrc                     # npm运行时配置文件
├── .prettierignore            # prettier
├── .prettierrc.js             # prettier 配置
├── .stylelintignore           # stylelint
├── .stylelintrc.js            # stylelint 配置
├── index.html                 # html模板
├── lint-staged.config.js      # lint-staged 配置
├── package.json               # 项目信息
├── README.md                  # readme
├── svgo.config.js             # svgo 配置
├── tsconfig.json              # ts 配置
├── tsconfig.node.json
└── vite.config.ts             # vite 配置
```

