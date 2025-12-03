import { defineCollections, type ThemeCollections } from 'vuepress-theme-plume'
import { themeConfig } from './theme-config'
import { themeGuide } from './theme-guide'

export const enCollections: ThemeCollections = defineCollections([
  // 博客
  { type: 'post', dir: '/blog/', link: '/blog/', title: 'Blog' },
  // 文档
  themeGuide,
  themeConfig,
])
