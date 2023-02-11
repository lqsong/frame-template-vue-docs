import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,
  srcDir: 'src',
  title: 'Frame-Template-Vue',
  titleTemplate: '基于 Vue 的框架模板',
  description: '基于 Vue 的框架模板，方便扩展与二次开发。',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['script', {type: 'text/javascript', src: 'https://hm.baidu.com/hm.js?762db8b1a966687eae544e59afc16cfd'}]
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '教程', link: '/tutorial/', activeMatch: '/tutorial/' },
      { text: '捐赠', link: '/donate/', activeMatch: '/donate/' },
      {
        text: '生态',
        items: [
          {
            text: '框架模板',
            items: [
              {text: 'frame-template-vue', link: 'http://frame-template-vue.liqingsong.cc'},
            ],
          },
          {
            text: '后台框架',
            items: [
              {text: 'admin-element-vue', link: 'http://admin-element-vue.liqingsong.cc'},
              {text: 'admin-antd-vue', link: 'http://admin-antd-vue.liqingsong.cc'},
              {text: 'admin-antd-react', link: 'http://admin-antd-react.liqingsong.cc'},
              {text: 'electron-admin-element-vue', link: 'http://admin-element-vue.liqingsong.cc/tsv2/guide/senior/electron.html'},
              {text: 'electron-admin-antd-vue', link: 'http://admin-antd-vue.liqingsong.cc/webpackts/guide/senior/electron.html'},
              {text: 'electron-admin-antd-react', link: 'http://admin-antd-react.liqingsong.cc/guide/senior/electron.html'},
              {text: 'admin-vue3-micro-qiankun', link: 'http://admin-vue3-micro-qiankun.liqingsong.cc'},
            ],
          },
          {
            text: '前台框架',
            items: [
              {text: 'midway-vue3-ssr', link: 'http://midway-vue3-ssr.liqingsong.cc'},
              {text: 'midway-react-ssr', link: 'http://midway-react-ssr.liqingsong.cc'},
              {text: 'template-vant-vue', link: 'http://template-vant-vue.liqingsong.cc'},
            ],
          },
          
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          collapsible: true,
          items: [
            { text: '简介', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
          ]
        },
        {
          text: '基础',
          collapsible: true,
          items: [          
            { text: '环境准备', link: '/guide/env-prepare' },
            { text: '配置', link: '/guide/config' },
            { text: '布局', link: '/guide/layout' },
            { text: '路由', link: '/guide/router' },
            { text: '页面', link: '/guide/page' },
            { text: '状态管理', link: '/guide/store' },
            { text: '认证与权限', link: '/guide/permission' },
            { text: '多语言', link: '/guide/locales' },
            { text: '数据请求', link: '/guide/server' },
            { text: 'Mock Data', link: '/guide/mock' },
            { text: '构建与部署', link: '/guide/build-and-deploy' },
          ]
        },
        {
          text: '进阶',
          collapsible: true,
          items: [          
            { text: 'UI组件', link: '/guide/senior/ui-components' },
            { text: '跨域', link: '/guide/senior/cors' },
            { text: '错误处理', link: '/guide/senior/error' },
          ]
        },
        {
          text: '二次开发',
          collapsible: true,
          items: [          
            { text: 'Template-Vant-Vue', link: '/guide/sdev/template-vant-vue' },
            { text: 'Admin-Element-Vue', link: '/guide/sdev/admin-element-vue' },
            { text: 'Admin-Antd-Vue', link: '/guide/sdev/admin-antd-vue' },
          
          ]
        },         
      ],
      '/tutorial/': [
        {
          text: '搭建教程',
          items: [
            { text: '简介', link: '/tutorial/' },
            { text: '环境准备', link: '/tutorial/env-prepare' },
            { text: '初始化项目', link: '/tutorial/init-project' },
            { text: '配置JS Lint', link: '/tutorial/js-lint' },
            { text: '配置CSS Lint', link: '/tutorial/css-lint' },
            { text: 'Git流程规范，代码风格自动化', link: '/tutorial/git-process-auto' },
            { text: 'Mock功能', link: '/tutorial/mock' },
            { text: '重构目录结构', link: '/tutorial/re-dir-structure' },
            { text: 'SvgIcon功能', link: '/tutorial/svg-icon' },
            { text: '路由功能', link: '/tutorial/router' },
            { text: '状态管理功能', link: '/tutorial/store' },
            { text: '多语言功能', link: '/tutorial/locales' },
            { text: '数据请求工具', link: '/tutorial/request' },
            { text: '认证功能', link: '/tutorial/security' },
            { text: '结束语', link: '/tutorial/conclusion' },
          ]
        },
        
      ],
    },
    /* algolia: {
      indexName: 'frame-template-vue',
      appId: 'JUX5Q8NL56',
      apiKey: 'ca6d7a7ea1955d40fa7ebbe9266d03c3'
    }, */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lqsong/frame-template-vue' },
    ],
    logo: '/images/logo.png',
    outlineTitle: '页面概要',
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${new Date().getFullYear()} LiQingSong`
    },
    
  }
  // ...
})
