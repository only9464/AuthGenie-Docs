/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' ,icon:'subway:home-1'},
  { text: '指南', link: '/guide/' ,icon:'icon-park-outline:guide-board'},
  { text: '开发文档', link: '/develop/' ,icon:'streamline-ultimate:coding-apps-website-web-dev-api-cloud-bold'},
  { text: '博客', link: '/blog/' ,icon:'carbon:blog'},
  { text: '标签', link: '/blog/tags/' ,icon:'gis:tags'},
  { text: '归档', link: '/blog/archives/' ,icon:'streamline-freehand:archive-drawer-1'},
  { text: '其他文档',link: '/doc/' ,icon:'streamline-freehand:notes-quill'},
  {
    text: '更多',
    icon: 'icon-park-outline:more-three',
    items: [
      { text: '常见问题', link: '/faq/', icon: 'wpf:faq' },
      { text: '喝杯奶茶', link: '/sponsor/', icon: 'twemoji:bubble-tea' },
      { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
      {
        text: 'Cloudflare',
        icon: 'devicon:cloudflare',
        items: [
          { text: '官方网站', link: 'https://www.cloudflare.com/', icon: 'devicon:cloudflare-wordmark'},
          { text: 'Worker', link: 'https://workers.cloudflare.com/', icon: 'devicon:cloudflareworkers-wordmark'},
          { text: 'Pages', link: 'https://developers.cloudflare.com/pages/', icon: 'vscode-icons:folder-type-cloudflare-opened' },
          { text: 'D1', link: 'https://developers.cloudflare.com/d1/get-started/', icon: 'devicon:cloudflareworkers' },
          { text: 'R2', link: 'https://developers.cloudflare.com/r2/', icon: 'vscode-icons:folder-type-cloudflare' },
          { text: 'KV', link: 'https://developers.cloudflare.com/kv/', icon: 'material-icon-theme:folder-cloudflare-open' },

        ],
      },
      {
        text: 'Hono',
        icon: 'logos:hono',
        items: [
          { text: '官方Github', link: 'https://github.com/honojs', icon: 'logos:hono' },
          { text: '第三方中文文档', link: 'https://honodev.pages.dev/zh/docs/getting-started/cloudflare-workers', icon: 'simple-icons:hono' },
        ],
      },
      {
        text: 'Vue.js',
        icon: 'devicon:vuejs-wordmark',
        items: [
          { text: '官方文档', link: 'https://cn.vuejs.org/', icon: 'logos:vue' },
          { text: 'Element Plus', link: 'https://element-plus.org/zh-CN/', icon: 'logos:element' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    badge: '新',
    items: [
      { text: '更新日志', link: '/changelog/' },
      { text: '参与贡献', link: '/contributing/' },
    ],
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/demo/README.md' }]
  },
])

