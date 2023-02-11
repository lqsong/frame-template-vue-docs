# 初始化项目 {#index}

## create vite {#create-vite}

一、请用 `create vite` 命令创建 vue 项目。

```sh 
 pnpm create vite
```

> 创建步骤输入：

- 1、Project name: >> 输入项目名称
- 2、选中 vue
- 3、选中 TypeScript

二、项目生成完成，目录结构如下:

```bash
├── .vscode                    # vscode编辑器配置目录
│   └── extensions.json
├── public                     # 静态资源
│   └── vite.svg
├── src                        # 源代码目录
│   ├── assets                 # 静态资源
│   │   └── vue.svg
│   ├── components             # 组件目录
│   │   └── HelloWorld.vue 
│   ├── App.vue                # App 入口
│   ├── main.ts                # 入口文件
│   ├── style.css              # css
│   └── vite-env.d.ts          # ts 配置
├── .gitignore                 # Git忽略文件配置
├── index.html                 # html模板
├── package.json               # 项目信息
├── README.md                  # readme
├── tsconfig.json              # ts 配置
├── tsconfig.node.json
└── vite.config.ts             # vite 配置
```


三、安装运行:

```sh
pnpm install
pnpm run dev 
```

> 这样我们就基于vite创建了一个vue项目，并且运行了起来。

## 配置 EdiorConfig 统一内容风格 {#config-editer}

一、在项目根目录创建 `.editorconfig` 文件，内容如下：

```sh
# @see: http://editorconfig.org
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = tab # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
max_line_length = 120 # 最大行长度
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 开启末尾空格修剪
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md]
trim_trailing_whitespace = false # 关闭末尾空格修剪
max_line_length = off # 关闭最大行长度限制

```

二、修改 `/.vscode/extensions.json` 文件内容如下：

```json{4-8}
{
  "recommendations": [
		"Vue.volar",
		"vue.vscode-typescript-vue-plugin",
		"stylelint.vscode-stylelint",
		"dbaeumer.vscode-eslint",
		"editorconfig.editorconfig",
		"esbenp.prettier-vscode"
	]
}
```

## 扩展vite配置，ts、css 支持，打包优化 {#vite-config}

一、配置 .env 文件

- 1、在项目根目录创建 `.env` 文件，内容如下:

```sh
# port
VITE_APP_PORT = 3001

# open 运行 pnpm run dev 时自动打开浏览器
VITE_APP_OPEN = true

# 是否生成包预览文件
VITE_APP_REPORT = false

# 是否开启gzip压缩
VITE_APP_BUILD_GZIP = false
```

- 2、在项目根目录创建 `.env.development` 文件，内容如下:

```sh
# 本地环境
NODE_ENV = development
```

- 3、在项目根目录创建 `.env.production` 文件，内容如下:

```sh
# 线上环境
NODE_ENV = production
```

- 4、在项目根目录创建 `.env.test` 文件，内容如下:

```sh
# 测试环境
NODE_ENV = test
```


二、安装以下相关开发依赖

- @types/node (node types)
- sass (sass 支持)
- less (less 支持)
- vite-plugin-compression (gzip compress)
- rollup-plugin-visualizer (是否生成包预览，分析依赖包大小，方便做优化)

```sh
pnpm add @types/node sass less vite-plugin-compression rollup-plugin-visualizer -D
```

三、修改 `tsconfig.json` 内容如下：

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
	"types": ["vite/client"],
	// 跳过库检查，解决打包失败
    "skipLibCheck": true,
	// 解析非相对模块名的基准目录
	"baseUrl": ".",
	// 模块名到基于 baseUrl的路径映射的列表。
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules", "dist", "**/*.js"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```


四、修改 `vite.config.ts` 内容如下: 

```ts
import { resolve } from "path";
import { defineConfig, loadEnv, PluginOption } from 'vite';
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import vue from '@vitejs/plugin-vue';

// @see: https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const root = process.cwd();
	const env = loadEnv(mode, root);

	const {
		VITE_APP_PORT,
		VITE_APP_REPORT,
		VITE_APP_BUILD_GZIP,
		VITE_APP_OPEN,
	} = env;


	// vite 插件
	const vitePlugins: (PluginOption | PluginOption[])[] = [
		vue(),
	];

	// vite-plugin-compression gzip compress
	if (VITE_APP_BUILD_GZIP === "true") {
		vitePlugins.push(
			viteCompression({
				verbose: true,
				disable: false,
				threshold: 10240,
				algorithm: "gzip",
				ext: ".gz",
			}),
		);
	}

	// rollup-plugin-visualizer 是否生成包预览(分析依赖包大小,方便做优化处理)
	if (VITE_APP_REPORT === "true") {
		vitePlugins.push(visualizer());
	}

  return {
		root,
		server: {
			host: "0.0.0.0",
			port: Number(VITE_APP_PORT || 3001),
			open: VITE_APP_OPEN === "true",
			cors: true,
		},
		resolve: {
			alias: [
				{
					find: /^~/,
					replacement: `${resolve(__dirname, "./node_modules")}/`,
				},
				{
					find: /@\//,
					replacement: `${resolve(__dirname, "./src")}/`,
				},
			],
		},
		plugins: vitePlugins,
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
				},
			},
		},
	};
});
```


五、 `package.json` 文件，`scripts` 中新增以下内容：

```json{4-5}
{
	"scripts": {
        "build": "vue-tsc --noEmit && vite build",
		"build:dev": "vue-tsc --noEmit && vite build --mode development",
		"build:test": "vue-tsc --noEmit && vite build --mode test",
	}
}
```


## 限制包管理工具为pnpm {#limit-package-tools}

一、安装以下相关开发依赖

- only-allow (限制包管理工具)

```sh
pnpm add only-allow -D
```

二、 `package.json` 文件，`scripts` 中新增以下内容：

```json{3}
{
	"scripts": {
       "preinstall": "only-allow pnpm"
	}
}
```

## 锁定项目 Node 版本 {#limit-node-version}

通过在 `package.json` 文件中指定 `engines` 字段，可限定项目使用的 node 版本。

```json{2-4}
{
	"engines": {
		"node": ">= 14.18.0"
	},
}
```


