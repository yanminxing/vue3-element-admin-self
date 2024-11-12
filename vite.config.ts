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
