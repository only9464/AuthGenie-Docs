import { defineCollections, type ThemeCollections } from 'vuepress-theme-plume'
import { themeDevelop } from './theme-develop'
import { themeGuide } from './theme-guide'

export const zhCollections: ThemeCollections = defineCollections([
  // 博客
  { type: 'post', dir: '/blog/', link: '/blog/', title: '博客' },
  // 文档
  themeGuide,
  themeDevelop,
])
