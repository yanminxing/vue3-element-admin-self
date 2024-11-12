/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}


// 环境变量智能提示
interface ImportMetaEnv {
  /**
   * 系统名称
   * */
  VITE_APP_TITLE: string,
  /**
   * 系统端口号
   * */
  VITE_APP_PORT: string,
  /**
   * 系统的前置url
   * */
  VITE_APP_BASE_API: string
}
