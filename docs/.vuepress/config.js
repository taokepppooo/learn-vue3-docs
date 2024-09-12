import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  base: '/learn-vue3-docs/',
  title: 'vue3 源码学习doc',
  description: '记录vue3源码学习过程，以及源码的见解',

  theme: defaultTheme({
    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
