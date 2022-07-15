import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 无法提供 https 服务
  // base: 'http://static.moxuan.site/cra-deploy/'
  // base: 'https://moxuan-static.oss-cn-beijing.aliyuncs.com/cra-deploy/',
})
