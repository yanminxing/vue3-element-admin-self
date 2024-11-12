# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# 1 项目介绍

本项目是一个使用 Vue 3 + TypeScript + Vite 的项目模板，旨在帮助开发者快速上手 Vue 3 和 TypeScript。

## 1.1  参考链接
1 [Vue3.3 + Vite+ Element-Plus + TypeScript 从0到1搭建企业级后台管理系统（前后端开源）](https://juejin.cn/post/7228990409909108793)   
2 原来仓库地址[地址](https://github.com/youlaitech/vue3-element-admin.git)  

## 1.2 项目搭建

### 1.2.1 项目初始化  
``` bash
# 初始化项目
npm init vite@latest self --template vue-ts
```
![创建项目图片](./projectImages/2024_11/01.png)

``` bash
# 初始化git仓库
git init

# 绑定远程仓库
git remote add origin 仓库地址
```    

``` bash

# 安装依赖
npm install

# 启动项目
npm run dev
```

### 1.2.2 使用element-plus 
``` bash
# 安装依赖
 npm install element-plus --save
```

``` typescript
 // 全局引入 修改main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const createFn = () => {
  const app = createApp(App)

  app.use(ElementPlus)

  app.mount('#app')
}

createFn()
```

### 1.2.3 使用vue-router 
``` bash
# 安装依赖
 npm install vue-router@4
```

``` typescript
 // 定义 src/router/index.ts
 import {createRouter, createWebHashHistory} from 'vue-router';
import HelloWorld  from '../components/HelloWorld.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld
    },
  ]
})

export default router
```
![引入 修改main.ts](./projectImages/2024_11/02.png)  

### 1.2.4 路径别名@   
 1 下载依赖    
 在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块: npm i -D @types/node
```bash  
npm i -D @types/node
```  
2 在 tsconfig.json 文件中配置路径别名  


```json
{
 "compilerOptions": {
  /*Vite 路径别名报错*/
  "baseUrl": "./",
  "paths" : {
   "@": ["src"],
   "@/*": ["src/*"],
   "@router/*": ["src/router/*"]
  }
 },
 "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}

```

3 在 vite.config.ts配置 
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // 在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块: npm i -D @types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Vite2设置别名路径方式一
/*    alias: {
      "@": path.resolve( "./src")
    }*/
    alias: [
        {
          find: '@',
          replacement: path.resolve( './src')
        },
      {
        find: '@router',
        replacement: path.resolve( './src/router')
      },
    ]
  }
})

```

### 1.2.5 多环境配置
1 配置环境变量文件.env.development 和.env.production等  
2 在 package.json中配置脚本命令 
```json
  "scripts": {
    "dev": "vite serve --mode development",
    "build:prod": "vue-tsc --noEmit && vite build --mode production",
    "preview": "vite preview"
  },
```

