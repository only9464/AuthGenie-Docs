/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import path from 'path'
export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: '灵域',
      lang: 'zh-CN',
      description: '面向多平台软件的全域授权管理与数据分析SaaS平台',
    },
    '/en/': {
      title: 'AuthGenie',
      lang: 'en-US',
      description: 'A SaaS platform for global authorization management and data analysis for multi platform software',
    },
  },

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  ],

  bundler: webpackBundler({
    configureWebpack: () => {
      const NODE_ENV = process.env.NODE_ENV
      //判断是否是生产环境
      if(NODE_ENV === 'production'){
        return {
          output: {
            publicPath: 'https://cdn.jsdelivr.net/gh/only9464/AuthGenie-Docs@gh-pages/'
          },
          resolve: {
            //配置路径别名
            alias: {
              'public': path.resolve(__dirname, './public') 
            }
          }
        }
      }else{
        return {
          resolve: {
            //配置路径别名
            alias: {
              'public': path.resolve(__dirname, './public') 
            }
          }
        }
      }
    }
  }),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  alias: {
    '@theme/VPBackToTop.vue': path.resolve(__dirname, './theme/components/MyVPBackToTop.vue'),
  },
  plugins: [
  ],
  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',
    hostname: 'https://ag.529464.xyz',

    llmstxt: {
      locale: 'all',
      llmsTxtTemplateGetter: {
        description: (_, { currentLocale }) => {
          return currentLocale === '/'
            ? '面向多平台软件的全域授权管理与数据分析SaaS平台'
            : 'A SaaS platform for global authorization management and data analysis for multi platform software'
        },
        details: '',
      },
    },

    /* 文档仓库配置，用于 editLink */
    docsRepo: 'https://github.com/only9464/AuthGenie-Docs',
    docsDir: 'docs',
    docsBranch: 'main',

    /* 页内信息 */
    editLink: true,
    // lastUpdated: true,
    // contributors: true,
    contributors: { mode: 'block' },
    // changelog: false,
    changelog: {
      maxCount: 20,
      repoUrl: 'https://github.com/only9464/AuthGenie-Docs',
      commitUrlPattern: ':repo/commit/:hash',
      issueUrlPattern: ':repo/issues/:issue',
      tagUrlPattern: ':repo/releases/tag/:tag'
    },
    plugins: {
      // 如果您在此处直接声明为 true，则表示开发环境和生产环境都启用该功能
      git: true
    },
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },

    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indices: [''],
    // },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    codeHighlighter: {
      twoslash: true, // 启用 twoslash
      whitespace: true, // 启用 空格/Tab 高亮
      lineNumbers: true, // 启用行号
    },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    readingTime: {
      wordPerMinute: 300,
    },

    /**
     * markdown
     * @see https://theme-plume.vuejs.press/config/markdown/
     */
    markdown: {
      fileTree: {icon: 'colored'},
      abbr: true,         // 启用 abbr 语法  *[label]: content
      annotation: true,   // 启用 annotation 语法  [+label]: content
      pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      plot: true,         // 启用隐秘文本语法 !!xxxx!!
      bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      // artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      icon: { provider: 'iconify' },        // 启用内置图标语法  ::icon-name::
      table: {
        align: 'center',
        maxContent: false,
        fullWidth: false,
        copy: 'all',
      },        // 启用表格增强容器语法 ::: table
      codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      demo: true,         // 启用 demo 容器  ::: demo
      // repl: {             // 启用 代码演示容器
        // go: true,         // ::: go-repl
      //   rust: true,       // ::: rust-repl
      //   kotlin: true,     // ::: kotlin-repl
      //   python: true,     // ::: python-repl
      // },
      math: {             // 启用数学公式
        type: 'katex',
        copy: true,
        mhchem: true
      },
      chartjs: true,      // 启用 chart.js
      echarts: true,      // 启用 ECharts
      mermaid: true,      // 启用 mermaid
      flowchart: true,    // 启用 flowchart
      image: {
        figure: true,     // 启用 figure
        lazyload: true,   // 启用图片懒加载
        mark: true,       // 启用图片标记
        size: true,       // 启用图片大小
      },
      include: {
        // resolvePath: (file) => {
        //   if (file.startsWith('@src'))
        //     return file.replace('@src', path.resolve(__dirname, '..'))
        //   return file
        // },
        deep: true,
        useComment: true,
        resolveImagePath: true,
        resolveLinkPath: true,
      },      // 在 Markdown 文件中导入其他 markdown 文件内容
      imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'only9464/AuthGenie-Docs',
      repoId: 'R_kgDOQ0yl_g',
      category: 'General',
      categoryId: 'DIC_kwDOQ0yl_s4C03j2',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
      darkTheme: 'dark_protanopia',
      lightTheme: 'light_protanopia',
    },

    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  }),
})
