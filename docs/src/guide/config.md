# 配置 {#index}

配置是开发一个后台项目的重要环节，它是一个后台项目的基础。想要了解一个后台项目，先要了解它的配置。

## 站点配置 {#website}

项目内置了一个站点配置文件 `/src/config/settings.ts`。

```ts
/**
 * @description: 站点配置
 * @author LiQingSong
 */
import {
	TAjaxHeadersTokenKey,
	TAjaxResponseNoVerifyUrl,
	TSiteTitle,
	TSiteTokenKey,
	TTheme,
	TThemeStorageKey,
} from "@/@types/config.settings.d";

/**
 * @description: 站点名称
 */
export const siteTitle: TSiteTitle = "Frame-Template-Vue";

/**
 * @description: 站点本地存储Token 的 Key值
 */
export const siteTokenKey: TSiteTokenKey = "frame-template-vue-token";

/**
 * @description: Ajax请求头发送Token 的 Key值
 */
export const ajaxHeadersTokenKey: TAjaxHeadersTokenKey = "x-token";

/**
 * @description: Ajax返回值不参加统一报错的api地址
 */
export const ajaxResponseNoVerifyUrl: TAjaxResponseNoVerifyUrl = ["/user/login", "/user/info"];

/**
 * @description: Layout 模板主题
 */
export const theme: TTheme = "dark";

/**
 * @description: Layout 模板主题本地存储(localStorage)的key名称
 */
export const themeStorageKey: TThemeStorageKey = "frame-template-vue-theme";
```

## 路由入口配置 {#router}

项目独立出了一个路由入口配置文件 `/src/config/router.ts`，其目的主要是：统一引入 `/src/layouts` 下不同layout的路由，集中处理重新格式化路由。

目前 `/src/config/router.ts` 的内容为：

```ts
/**
 * @description: 路由配置入口
 * @author LiQingSong
 */
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false, easing: "ease", speed: 1000 }); // NProgress Configuration

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

/* SecurityLayout */
import SecurityLayout from "@/layouts/SecurityLayout.vue";

/* MemberLayout */
import MemberLayoutRoutes from "@/layouts/MemberLayout/routes";
import MemberLayout from "@/layouts/MemberLayout/index.vue";

/* DefaultLayout */
import DefaultLayoutRoutes from "@/layouts/DefaultLayout/routes";
import DefaultLayout from "@/layouts/DefaultLayout/index.vue";

/* UserLayout */
import UserLayoutRoutes from "@/layouts/UserLayout/routes";
import UserLayout from "@/layouts/UserLayout/index.vue";

/* 请求消除器 */
import { requestCanceler } from "@/utils/request";

// 配置路由
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: DefaultLayout,
		children: DefaultLayoutRoutes,
	},
	{
		path: "/",
		component: UserLayout,
		children: UserLayoutRoutes,
	},
	{
		path: "/",
		component: SecurityLayout,
		children: [
			{
				path: "/",
				component: MemberLayout,
				children: MemberLayoutRoutes,
			},
		],
	},
	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/pages/404/index.vue"),
	},
];

const router = createRouter({
	scrollBehavior() {
		return { left: 0, top: 0 };
	},
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes,
});

/**
 * @description 路由前置，拦截
 */
router.beforeEach((to, from, next) => {
	// start progress bar
	NProgress.start();

	// 在跳转之前，清除所有ajax请求
	requestCanceler.removeAllPending();

	// 跳转到对应路由
	next();
});

/**
 * @description 路由后置，跳转结束
 */
router.afterEach(() => {
	// finish progress bar
	NProgress.done();
});

export default router;
```

::: tip 说明：
详细文档请查看：[路由](/guide/router.md)
:::


## 状态管理配置 {#store}

项目集成了 `pinia`，配置文件 `/src/config/store.ts` 可以做些公共的配置，如数据持久化等。

::: tip 说明：
详细文档请查看：[状态管理](/guide/store.md)
:::


## vite 配置 {#vite}

项目基于 `vite` 来进行构建，所以有个 vite 配置文件 `/vite.config.ts`。

[官方文档](https://cn.vitejs.dev/config/)


## 环境变量 {#env}
项目基于 `vite` 来进行构建，所以有环境变量配置文件 `/.env.development`、`/.env.production`。

[官方文档](https://cn.vitejs.dev/guide/env-and-mode.html)
