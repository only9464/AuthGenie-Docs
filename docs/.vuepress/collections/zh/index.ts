import { defineCollections, type ThemeCollections } from 'vuepress-theme-plume'
import { developDoc } from './developDoc'
// import { otherDoc } from './otherDoc'

export const zhCollections: ThemeCollections = defineCollections([
  // 博客
  { type: 'post', dir: '/blog/', link: '/blog/', title: '博客' },
  // 文档
  developDoc,
  { type: 'doc',title:'文档',dir: 'doc',linkPrefix: '/doc/',sidebar: ['', 'requirements','technologyResearch','outlineDesign']},
])
