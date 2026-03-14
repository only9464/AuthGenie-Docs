---
title: 介绍
icon: lucide:file-pen
createTime: 2026/03/14 16:50:00
permalink: /develop/
---
## 项目简介

AuthGenie 是一套基于==Cloudflare Worker==开发的==面向多平台软件的全域授权管理与数据分析 SaaS 平台=={.info}

**核心功能：**
- 📦 多平台许可证管理（Windows/macOS/Linux/Android/iOS/HarmonyOS）
- 👥 三级权限管理（超级管理员/管理员/普通用户）
- 🔐 安全的用户认证与会话管理
- 📊 实时数据统计与分析
- 🌍 全球边缘节点部署，低延迟访问

**技术栈：**
- **后端：** Cloudflare Workers + Hono + Drizzle ORM + D1
- **前端：** Vue 3 + Vite + Element Plus + Pinia
- **数据库：** Cloudflare D1（SQLite）
- **会话存储：** Cloudflare KV

## 文档结构

```
develop/
├── backend/           # 后端 API 文档
│   ├── README.md      # 后端简介
│   ├── database.md    # 数据库设计
│   ├── user/          # 用户 API
│   ├── admin/         # 管理员 API
│   ├── sadmin/        # 超级管理员 API
│   └── vertify/       # 许可证校验 API
├── frontend/          # 前端文档
│   └── README.md      # 前端简介
├── installenv.md      # 环境安装
└── getcode.md         # 获取源码
```

## 快速开始

1. 阅读 [环境安装](/develop/installenv/) 了解开发环境要求
2. 阅读 [获取源码](/develop/getcode/) 克隆项目代码
3. 阅读 [后端文档](/develop/backend/) 了解 API 设计
4. 阅读 [前端文档](/develop/frontend/) 了解 UI 结构

## 相关链接

- [GitHub 仓库](https://github.com/your-repo/authgenie)
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Hono 框架文档](https://hono.dev/)
- [Drizzle ORM 文档](https://orm.drizzle.team/)
