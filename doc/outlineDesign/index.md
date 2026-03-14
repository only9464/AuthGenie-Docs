---
url: /doc/outlineDesign/index.md
---
# AuthGenie 许可证管理系统 - 概要设计说明书

**文档版本：** V1.0\
**创建日期：** 2026 年 3 月 14 日\
**项目名称：** AuthGenie 许可证管理系统\
**开发单位：** 毕业设计项目

***

## 一、引言

### 1.1 编写目的

本概要设计说明书旨在对 AuthGenie 许可证管理系统进行全面的系统设计描述，明确系统的总体架构、功能模块划分、接口设计、数据结构设计以及数据库设计等关键内容。本文档为后续的详细设计、编码实现、测试验证提供技术依据和指导。

**读者对象：**

* 项目开发团队成员
* 系统测试人员
* 项目评审专家
* 毕业设计指导教师

### 1.2 项目背景

| 项目要素 | 说明 |
|---------|------|
| **项目名称** | AuthGenie 许可证管理系统 |
| **委托单位** | 毕业设计项目 |
| **开发单位** | 个人独立开发 |
| **开发方式** | 前后端一体化开发，采用 Cloudflare Workers 边缘计算架构 |
| **系统关系** | 本系统为独立的许可证管理与用户认证系统，提供 SDK 供客户端应用集成调用 |

AuthGenie 是一个基于 Cloudflare Workers 构建的现代化许可证管理与用户认证系统。系统采用前后端一体化架构，提供完整的用户注册登录、团队管理、项目管理以及多平台许可证（Windows/macOS/Linux/Android/iOS/HarmonyOS）的生成、校验和绑定功能。

### 1.3 术语

| 缩写、术语 | 解释 |
|-----------|------|
| **AuthGenie** | 项目名称，许可证管理系统 |
| **Cloudflare Workers** | Cloudflare 提供的无服务器边缘计算平台 |
| **D1** | Cloudflare 提供的 Serverless SQL 数据库（基于 SQLite） |
| **KV** | Cloudflare 提供的键值存储服务 |
| **Drizzle ORM** | TypeScript 类型的 ORM 框架，用于数据库操作 |
| **Hono** | 轻量级 Web 框架，专为边缘计算优化 |
| **JWT** | JSON Web Token，用于用户认证和会话管理 |
| **SDK** | Software Development Kit，软件开发工具包 |
| **SAdmin** | Super Admin，超级管理员 |
| **Admin** | 管理员 |
| **License** | 许可证，用于软件授权验证 |
| **Team** | 用户团队，支持多用户协作 |
| **Project** | 项目，许可证的归属单位 |

### 1.4 参考资料

| 编号 | 资料名称 | 作者/出版单位 | 发表日期 | 资料来源 |
|-----|---------|-------------|---------|---------|
| \[1] | Cloudflare Workers 官方文档 | Cloudflare | 2024 | https://developers.cloudflare.com/workers/ |
| \[2] | Hono 框架文档 | Hono 团队 | 2024 | https://hono.dev/ |
| \[3] | Drizzle ORM 官方文档 | Drizzle 团队 | 2024 | https://orm.drizzle.team/ |
| \[4] | Vue 3 官方文档 | Vue.js 团队 | 2024 | https://vuejs.org/ |
| \[5] | Element Plus 组件库文档 | Element Plus 团队 | 2024 | https://element-plus.org/ |
| \[6] | TypeScript 官方文档 | Microsoft | 2024 | https://www.typescriptlang.org/ |
| \[7] | 软件需求规格说明书 | AuthGenie 项目组 | 2026-03 | 本项目文档 |

***

## 二、任务概述

### 2.1 系统描述

AuthGenie 许可证管理系统是一个基于 Cloudflare Workers 边缘计算平台构建的 B/S 架构软件系统。系统采用前后端分离的设计模式，后端使用 Hono 框架提供 RESTful API 接口，前端使用 Vue 3 + Element Plus 构建用户界面。

**主要功能：**

1. **三级权限管理**：超级管理员 → 管理员 → 普通用户
2. **用户管理**：注册、登录、会话管理、状态控制
3. **团队管理**：创建团队、邀请成员、角色分配
4. **项目管理**：多平台项目创建、状态管理、统计查询
5. **许可证管理**：批量生成、校验验证、设备绑定、状态控制
6. **审计日志**：登录日志、操作日志、校验日志

**主要性能指标：**

* API 响应时间：< 100ms（边缘节点就近访问）
* 并发处理能力：支持 1000+ QPS
* 数据库查询响应：< 50ms
* 许可证校验成功率：> 99.9%

### 2.2 运行环境

#### 硬件环境

| 组件 | 配置要求 | 说明 |
|-----|---------|------|
| **服务器** | Cloudflare Workers 边缘节点 | 全球分布式部署，无需自建服务器 |
| **数据库** | Cloudflare D1 | Serverless SQL 数据库，自动扩展 |
| **客户端** | 任意现代浏览器 | Chrome 90+、Firefox 88+、Safari 14+ |
| **SDK 客户端** | Windows/macOS/Linux/Android/iOS/HarmonyOS | 支持六大平台 |

#### 软件环境

| 组件 | 版本 | 说明 |
|-----|------|------|
| **Workers 运行时** | 2026-01-28 兼容性 | Cloudflare Workers 运行时 |
| **后端框架** | Hono 4.11.7 | 轻量级 Web 框架 |
| **前端框架** | Vue 3.5.27 | Composition API |
| **UI 组件库** | Element Plus 2.13.2 | 企业级组件库 |
| **构建工具** | Vite 7.3.1 | 极速构建工具 |
| **数据库 ORM** | Drizzle ORM 0.45.1 | TypeScript ORM |
| **TypeScript** | 5.9.3 | 类型系统 |

#### 网络拓扑图

```
┌─────────────────────────────────────────────────────────────────┐
│                      Cloudflare 边缘网络                          │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐   │
│  │ 亚洲节点   │  │ 欧洲节点   │  │ 美洲节点   │  │ 其他节点   │   │
│  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘   │
│        │              │              │              │           │
│        └──────────────┴──────┬───────┴──────────────┘           │
│                              │                                  │
│                    ┌─────────▼─────────┐                        │
│                    │   AuthGenie Worker │                       │
│                    │   (Hono + Drizzle) │                       │
│                    └─────────┬─────────┘                        │
│                              │                                  │
│         ┌────────────────────┼────────────────────┐             │
│         │                    │                    │             │
│  ┌──────▼──────┐    ┌───────▼───────┐   ┌───────▼───────┐      │
│  │  D1 数据库   │    │ KV 会话存储    │   │ 静态资源 (ASSETS)│   │
│  │  (SQLite)   │    │ (USER_SESSION)│   │ (frontend/dist)│    │
│  └─────────────┘    └───────────────┘   └───────────────┘      │
└─────────────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
  ┌──────▼──────┐    ┌───────▼───────┐   ┌───────▼───────┐
  │  Web 浏览器   │    │  客户端 SDK    │   │  移动应用      │
  │ (管理后台)   │    │ (许可证校验)   │   │ (iOS/Android) │
  └─────────────┘    └───────────────┘   └───────────────┘
```

### 2.3 开发与测试环境

#### 开发环境

| 组件 | 配置 | 说明 |
|-----|------|------|
| **操作系统** | Linux / macOS / Windows | 开发机系统 |
| **Node.js** | v24.14.0 | 运行时环境 |
| **npm** | 11.9.0+ | 包管理器 |
| **Wrangler** | 4.61.1 | Cloudflare Workers CLI |
| **IDE** | VS Code / WebStorm | 开发工具 |

#### 测试环境

| 环境类型 | 配置 | 说明 |
|---------|------|------|
| **本地开发** | `wrangler dev` | 本地模拟 Workers 运行环境 |
| **预览部署** | `wrangler deploy --dry-run` | 部署前验证 |
| **生产环境** | Cloudflare Workers 生产节点 | 正式运行环境 |

### 2.4 条件与限制

1. **Cloudflare 依赖**：系统完全依赖 Cloudflare 平台，无法独立部署
2. **D1 数据库限制**：单数据库最大 500GB，适合中小型应用
3. **Workers 限制**：单次请求最大 CPU 时间 50ms（免费计划）
4. **网络要求**：客户端需要能够访问 Cloudflare 边缘节点
5. **浏览器兼容**：需要支持 ES2022 特性的现代浏览器

***

## 三、总体设计

### 3.1 系统设计原则

1. **边缘优先**：利用 Cloudflare 全球边缘节点，实现低延迟访问
2. **类型安全**：全栈 TypeScript，Drizzle ORM 提供数据库类型安全
3. **RESTful 设计**：遵循 REST 规范，接口清晰、易于理解和维护
4. **前后端分离**：前端独立构建部署，后端提供纯 API 服务
5. **安全至上**：JWT 认证、密码加密、操作审计、权限隔离
6. **可扩展性**：模块化设计，支持水平扩展和功能迭代
7. **多平台支持**：统一的许可证校验接口，支持六大操作系统平台

### 3.2 系统网络结构

```
┌─────────────────────────────────────────────────────────────────┐
│                        互联网                                    │
└─────────────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
  ┌──────▼──────┐    ┌───────▼───────┐   ┌───────▼───────┐
  │  用户端      │    │  管理员端      │   │  超级管理员端  │
  │  (Vue SPA)  │    │  (Vue SPA)    │   │  (Vue SPA)    │
  └──────┬──────┘    └───────┬───────┘   └───────┬───────┘
         │                    │                    │
         └────────────────────┼────────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │  Cloudflare CDN   │
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │  AuthGenie Worker │
                    │  (Hono Router)    │
                    └─────────┬─────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
  ┌──────▼──────┐    ┌───────▼───────┐   ┌───────▼───────┐
  │  D1 数据库   │    │ KV 会话存储    │   │  日志系统      │
  └─────────────┘    └───────────────┘   └───────────────┘
```

### 3.3 实现框架与处理流程

#### 总体实现框架

```
┌─────────────────────────────────────────────────────────────────┐
│                         前端层 (Frontend)                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │  用户端 App  │  │  管理员端 App│  │ 超级管理员端 │             │
│  │  (Vue 3)    │  │  (Vue 3)    │  │  (Vue 3)    │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
                              │ HTTP/HTTPS
┌─────────────────────────────────────────────────────────────────┐
│                         API 网关层 (Hono)                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    /api 路由分发                         │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │   │
│  │  │ /user   │  │ /admin  │  │ /sadmin │  │ /vertify│    │   │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                         业务逻辑层                               │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │ 用户服务 │  │ 团队服务 │  │ 项目服务 │  │许可证服务│           │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │认证中间件│  │授权中间件│  │日志中间件│  │校验中间件│           │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                         数据访问层 (Drizzle ORM)                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │ 用户表   │  │ 团队表   │  │ 项目表   │  │许可证表  │           │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │管理员表  │  │登录日志  │  │操作日志  │  │校验日志  │           │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

#### 典型处理流程（许可证校验）

```
1. 客户端 SDK 发起校验请求
         │
         ▼
2. POST /api/vertify (携带 licenseKey + 硬件信息)
         │
         ▼
3. 参数解析与验证
         │
         ▼
4. 根据 system 字段路由到对应平台处理器
   (windows/macos/linux/android/ios/harmonyos)
         │
         ▼
5. 查询许可证表验证 licenseKey 有效性
         │
         ▼
6. 检查许可证状态 (active/disabled)
         │
         ▼
7. 验证硬件绑定信息（如已绑定）
         │
         ▼
8. 记录校验日志到 verify_logs 表
         │
         ▼
9. 返回校验结果 (success/failure + message)
```

### 3.4 结构模块设计

#### 子系统划分

| 子系统标识符 | 子系统名称 | 功能描述 |
|-------------|-----------|---------|
| **SUB-USER** | 用户管理子系统 | 用户注册、登录、会话管理、状态控制 |
| **SUB-ADMIN** | 管理员子系统 | 管理员登录、用户管理、团队管理、项目管理 |
| **SUB-SADMIN** | 超级管理员子系统 | 超级管理员登录、管理员管理、系统日志 |
| **SUB-VERTIFY** | 许可证校验子系统 | 多平台许可证校验、硬件绑定、校验日志 |
| **SUB-FRONTEND** | 前端展示子系统 | 用户端、管理员端、超级管理员端三个 Vue 应用 |

#### 功能模块划分

| 模块标识符 | 模块名称 | 所属子系统 | 功能描述 | 性能要求 |
|-----------|---------|-----------|---------|---------|
| **MOD-USER-AUTH** | 用户认证模块 | SUB-USER | 用户注册、登录、登出 | 响应时间 < 100ms |
| **MOD-USER-TEAM** | 团队管理模块 | SUB-USER | 创建团队、加入团队、成员管理 | 响应时间 < 150ms |
| **MOD-USER-PROJ** | 项目管理模块 | SUB-USER | 创建项目、删除项目、统计查询 | 响应时间 < 150ms |
| **MOD-USER-LIC** | 许可证管理模块 | SUB-USER | 批量生成、列表查询、详情查询 | 响应时间 < 200ms |
| **MOD-ADMIN-USER** | 用户管理模块 | SUB-ADMIN | 用户列表、启用/禁用用户 | 响应时间 < 150ms |
| **MOD-ADMIN-TEAM** | 团队管理模块 | SUB-ADMIN | 团队列表、启用/禁用/删除团队 | 响应时间 < 150ms |
| **MOD-ADMIN-PROJ** | 项目管理模块 | SUB-ADMIN | 项目列表、启用/禁用/删除项目 | 响应时间 < 150ms |
| **MOD-ADMIN-LOG** | 日志查询模块 | SUB-ADMIN | 用户操作日志查询 | 响应时间 < 200ms |
| **MOD-SADMIN-ADMIN** | 管理员管理模块 | SUB-SADMIN | 管理员列表、添加、删除、启用/禁用 | 响应时间 < 150ms |
| **MOD-SADMIN-LOG** | 日志查询模块 | SUB-SADMIN | 管理员登录日志查询 | 响应时间 < 200ms |
| **MOD-VERTIFY-WIN** | Windows 校验模块 | SUB-VERTIFY | Windows 平台许可证校验 | 响应时间 < 50ms |
| **MOD-VERTIFY-MAC** | macOS 校验模块 | SUB-VERTIFY | macOS 平台许可证校验 | 响应时间 < 50ms |
| **MOD-VERTIFY-LIN** | Linux 校验模块 | SUB-VERTIFY | Linux 平台许可证校验 | 响应时间 < 50ms |
| **MOD-VERTIFY-AND** | Android 校验模块 | SUB-VERTIFY | Android 平台许可证校验 | 响应时间 < 50ms |
| **MOD-VERTIFY-IOS** | iOS 校验模块 | SUB-VERTIFY | iOS 平台许可证校验 | 响应时间 < 50ms |
| **MOD-VERTIFY-HAR** | HarmonyOS 校验模块 | SUB-VERTIFY | HarmonyOS 平台许可证校验 | 响应时间 < 50ms |

#### 接口命名规范

**外部接口（API）：**

* 格式：`/api/{子系统}/{资源}/{操作}`
* 示例：`/api/user/login`、`/api/admin/user/list`、`/api/sadmin/admin/add`

**内部接口（模块间调用）：**

* 格式：`{模块标识符}.{功能名}`
* 示例：`MOD-USER-AUTH.login`、`MOD-USER-TEAM.create`

### 3.5 系统运行状态示意图

```
┌─────────────────────────────────────────────────────────────────┐
│                      Cloudflare Workers 运行时                    │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    Worker 主进程                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │              Hono Router (单线程事件循环)              │ │ │
│  │  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │ │ │
│  │  │  │ /user 路由  │  │ /admin 路由 │  │ /sadmin 路由 │     │ │ │
│  │  │  └────────────┘  └────────────┘  └────────────┘     │ │ │
│  │  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │ │ │
│  │  │  │/vertify 路由│  │ 静态资源    │  │ 中间件链    │     │ │ │
│  │  │  └────────────┘  └────────────┘  └────────────┘     │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                  │
│         ┌────────────────────┼────────────────────┐             │
│         │                    │                    │             │
│  ┌──────▼──────┐    ┌───────▼───────┐   ┌───────▼───────┐      │
│  │ D1 查询线程 │    │ KV 读写线程    │   │ 日志写入线程   │      │
│  │ (异步非阻塞)│    │ (异步非阻塞)   │   │ (异步非阻塞)   │      │
│  └─────────────┘    └───────────────┘   └───────────────┘      │
└─────────────────────────────────────────────────────────────────┘

模块对应关系：
- Worker 主进程 → 所有业务逻辑模块
- Hono Router → 路由分发模块
- D1 查询线程 → 数据访问层模块
- KV 读写线程 → 会话管理模块
- 日志写入线程 → 审计日志模块
```

### 3.6 功能需求与程序模块的关系

| 需求 | MOD-USER-AUTH | MOD-USER-TEAM | MOD-USER-PROJ | MOD-USER-LIC | MOD-ADMIN-USER | MOD-ADMIN-TEAM | MOD-ADMIN-PROJ | MOD-SADMIN-ADMIN | MOD-VERTIFY |
|-----|---------------|---------------|---------------|--------------|----------------|----------------|----------------|------------------|-------------|
| 用户注册 | √ | | | | | | | | |
| 用户登录 | √ | | | | | | | | |
| 团队创建 | | √ | | | | | | | |
| 团队管理 | | √ | | | | | | | |
| 项目创建 | | | √ | | | | | | |
| 项目管理 | | | √ | | | | √ | | |
| 许可证生成 | | | | √ | | | | | |
| 许可证校验 | | | | | | | | | √ |
| 用户管理 | | | | | √ | | | | |
| 团队管理 (Admin) | | | | | | √ | | | |
| 管理员管理 | | | | | | | | √ | |
| 日志查询 | | | | | √ | | | √ | |

### 3.7 尚未解决的问题

1. **密码加密**：当前版本使用明文密码存储，计划后续版本引入 bcrypt 或 Argon2 进行密码哈希
2. **JWT 密钥管理**：JWT\_SECRET 目前配置在 wrangler.jsonc 中，计划迁移到 Cloudflare Secrets 管理
3. **API 限流**：尚未实现速率限制，计划引入 Cloudflare Rate Limiting 或自定义限流中间件
4. **监控告警**：尚未集成监控和告警系统，计划使用 Cloudflare Workers Analytics 和第三方告警服务
5. **CI/CD 自动化**：尚未配置自动化部署流程，计划使用 GitHub Actions 实现自动部署

***

## 四、接口设计

### 4.1 外部接口

#### 用户界面接口

| 界面标识符 | 界面名称 | 访问路径 | 描述 |
|-----------|---------|---------|------|
| **UI-USER** | 用户端界面 | `/` | 普通用户使用的 Web 界面 |
| **UI-ADMIN** | 管理员端界面 | `/admin` | 管理员使用的 Web 管理界面 |
| **UI-SADMIN** | 超级管理员端界面 | `/super` | 超级管理员使用的 Web 管理界面 |

#### 软件接口（API）

**用户接口（/api/user）：**

| 接口路径 | 方法 | 描述 | 输入参数 | 输出参数 |
|---------|------|------|---------|---------|
| `/api/user/register` | POST | 用户注册 | username, password | { success, userId } |
| `/api/user/login` | POST | 用户登录 | username, password | { success, token, user } |
| `/api/user/logout` | POST | 用户登出 | (JWT Token) | { success } |
| `/api/user/team/list` | GET | 团队列表 | (JWT Token) | { teams: \[] } |
| `/api/user/team/create` | POST | 创建团队 | name | { success, teamId } |
| `/api/user/team/delete` | DELETE | 删除团队 | teamId | { success } |
| `/api/user/team/join` | POST | 加入团队 | teamId, code | { success } |
| `/api/user/team/members` | GET | 团队成员 | teamId | { members: \[] } |
| `/api/user/project/list` | GET | 项目列表 | teamId | { projects: \[] } |
| `/api/user/project/create` | POST | 创建项目 | teamId, name, platform | { success, projectId } |
| `/api/user/project/delete` | DELETE | 删除项目 | projectId | { success } |
| `/api/user/project/stats` | GET | 项目统计 | projectId | { stats: {} } |
| `/api/user/license/batch` | POST | 批量生成许可证 | projectId, count | { licenses: \[] } |
| `/api/user/license/list` | GET | 许可证列表 | projectId | { licenses: \[] } |
| `/api/user/license/detail` | GET | 许可证详情 | licenseId | { license: {} } |

**管理员接口（/api/admin）：**

| 接口路径 | 方法 | 描述 | 输入参数 | 输出参数 |
|---------|------|------|---------|---------|
| `/api/admin/login` | POST | 管理员登录 | username, password | { success, token, admin } |
| `/api/admin/user/list` | GET | 用户列表 | page, limit | { users: \[], total } |
| `/api/admin/user/disable` | POST | 禁用用户 | userId | { success } |
| `/api/admin/user/enable` | POST | 启用用户 | userId | { success } |
| `/api/admin/team/list` | GET | 团队列表 | page, limit | { teams: \[], total } |
| `/api/admin/team/disable` | POST | 禁用团队 | teamId | { success } |
| `/api/admin/team/enable` | POST | 启用团队 | teamId | { success } |
| `/api/admin/team/delete` | DELETE | 删除团队 | teamId | { success } |
| `/api/admin/project/list` | GET | 项目列表 | page, limit | { projects: \[], total } |
| `/api/admin/project/disable` | POST | 禁用项目 | projectId | { success } |
| `/api/admin/project/enable` | POST | 启用项目 | projectId | { success } |
| `/api/admin/project/delete` | DELETE | 删除项目 | projectId | { success } |
| `/api/admin/user/log` | GET | 用户操作日志 | page, limit, filters | { logs: \[], total } |

**超级管理员接口（/api/sadmin）：**

| 接口路径 | 方法 | 描述 | 输入参数 | 输出参数 |
|---------|------|------|---------|---------|
| `/api/sadmin/login` | POST | 超级管理员登录 | username, password | { success, token, admin } |
| `/api/sadmin/admin/list` | GET | 管理员列表 | page, limit | { admins: \[], total } |
| `/api/sadmin/admin/add` | POST | 添加管理员 | username, password | { success, adminId } |
| `/api/sadmin/admin/delete` | DELETE | 删除管理员 | adminId | { success } |
| `/api/sadmin/admin/disable` | POST | 禁用管理员 | adminId | { success } |
| `/api/sadmin/admin/enable` | POST | 启用管理员 | adminId | { success } |
| `/api/sadmin/admin/log` | GET | 管理员登录日志 | page, limit, filters | { logs: \[], total } |

**许可证校验接口（/api/vertify）：**

| 接口路径 | 方法 | 描述 | 输入参数 | 输出参数 |
|---------|------|------|---------|---------|
| `/api/vertify` | POST | 许可证校验 | system, sdkVersion, licenseKey, hardware | { success, message, expiresAt } |

#### 硬件接口

本系统为纯软件系统，不涉及直接硬件接口。客户端 SDK 通过系统 API 采集硬件信息用于许可证绑定。

#### 通信接口

| 接口类型 | 协议 | 端口 | 说明 |
|---------|------|------|------|
| **HTTP/HTTPS** | HTTP/1.1, HTTP/2, HTTP/3 | 80, 443 | Web 访问和 API 调用 |
| **WebSocket** | WebSocket | 443 | 实时通信（预留） |

### 4.2 内部接口

#### 模块间接口

| 接口标识符 | 调用方 | 被调用方 | 功能描述 | 接口类型 |
|-----------|--------|---------|---------|---------|
| **INT-AUTH-001** | 所有用户接口 | requireUser 中间件 | 用户身份验证 | 中间件 |
| **INT-AUTH-002** | 所有管理员接口 | requireAdmin 中间件 | 管理员身份验证 | 中间件 |
| **INT-AUTH-003** | 所有超级管理员接口 | requireSadmin 中间件 | 超级管理员身份验证 | 中间件 |
| **INT-DB-001** | 所有业务模块 | Drizzle ORM | 数据库 CRUD 操作 | 函数调用 |
| **INT-KV-001** | 认证模块 | KV 存储 | 会话 Token 存储 | 异步调用 |
| **INT-LOG-001** | 所有业务模块 | 日志记录函数 | 操作日志记录 | 异步调用 |

#### 接口规范

**中间件接口规范：**

```typescript
// 认证中间件接口
interface AuthMiddleware {
  (c: Context, next: Next): Promise<void>
}

// 中间件设置用户信息到上下文
c.set('user', { id, username, role })

// 认证失败时提前返回
return c.json({ message: '未授权' }, 401)
```

**数据库操作接口规范：**

```typescript
// 查询接口
interface Query<T> {
  where(condition: Condition): Query<T>
  limit(count: number): Query<T>
  offset(count: number): Query<T>
  orderBy(field: string, direction: 'asc' | 'desc'): Query<T>
  all(): Promise<T[]>
  get(): Promise<T | undefined>
}

// 插入接口
interface Insert<T> {
  values(data: T | T[]): Insert<T>
  return(): Insert<T>
  run(): Promise<InsertResult>
}
```

***

## 五、数据结构设计

### 5.1 逻辑结构设计

#### 用户表（users）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| username | TEXT | 255 | 是 | 用户名，唯一 |
| password | TEXT | 255 | 是 | 密码（明文） |
| status | TEXT | 20 | 是 | 状态：active/disabled |
| createdAt | INTEGER | - | 是 | 创建时间戳 (ms) |
| updatedAt | INTEGER | - | 是 | 更新时间戳 (ms) |
| lastLoginAt | INTEGER | - | 否 | 最后登录时间戳 (ms) |

#### 管理员表（admins）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| username | TEXT | 255 | 是 | 用户名，唯一 |
| passwordHash | TEXT | 255 | 是 | 密码哈希（明文） |
| status | TEXT | 20 | 是 | 状态：active/disabled |
| createdAt | INTEGER | - | 是 | 创建时间戳 (ms) |
| updatedAt | INTEGER | - | 是 | 更新时间戳 (ms) |
| lastLoginAt | INTEGER | - | 否 | 最后登录时间戳 (ms) |

#### 团队表（teams）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| ownerUserId | INTEGER | - | 是 | 所有者用户 ID |
| name | TEXT | 255 | 是 | 团队名称 |
| status | TEXT | 20 | 是 | 状态：active/disabled |
| createdAt | INTEGER | - | 是 | 创建时间戳 (ms) |
| updatedAt | INTEGER | - | 是 | 更新时间戳 (ms) |

#### 团队成员表（teamMembers）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| teamId | INTEGER | - | 是 | 团队 ID |
| userId | INTEGER | - | 是 | 用户 ID |
| role | TEXT | 20 | 是 | 角色：owner/member |
| joinedAt | INTEGER | - | 是 | 加入时间戳 (ms) |

#### 项目表（projects）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| teamId | INTEGER | - | 是 | 所属团队 ID |
| name | TEXT | 255 | 是 | 项目名称 |
| platform | TEXT | 20 | 是 | 平台：windows/macos/linux/android/ios/harmonyos |
| status | TEXT | 20 | 是 | 状态：active/disabled |
| createdAt | INTEGER | - | 是 | 创建时间戳 (ms) |
| updatedAt | INTEGER | - | 是 | 更新时间戳 (ms) |

#### 许可证表（licenses）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| projectId | INTEGER | - | 是 | 所属项目 ID |
| licenseKey | TEXT | 64 | 是 | 许可证密钥，唯一 |
| status | TEXT | 20 | 是 | 状态：active/disabled |
| createdAt | INTEGER | - | 是 | 创建时间戳 (ms) |
| firstUsedAt | INTEGER | - | 否 | 首次使用时间戳 (ms) |
| lastVerifiedAt | INTEGER | - | 否 | 最后校验时间戳 (ms) |

#### 许可证绑定表（licenseBindings）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| licenseId | INTEGER | - | 是 | 许可证 ID |
| clientUid | TEXT | 255 | 是 | 客户端唯一标识 |
| boundAt | INTEGER | - | 是 | 绑定时间戳 (ms) |

#### 登录日志表（loginLogs）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| actorType | TEXT | 20 | 是 | 角色类型：sadmin/admin |
| actorId | INTEGER | - | 否 | 角色 ID |
| actorUsername | TEXT | 255 | 是 | 角色用户名 |
| success | INTEGER | 1 | 是 | 成功：1/失败：0 |
| ip | TEXT | 45 | 否 | IP 地址 |
| userAgent | TEXT | 512 | 否 | 用户代理 |
| createdAt | INTEGER | - | 是 | 创建时间戳 (ms) |

#### 操作日志表（adminActionLogs / userActionLogs）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| adminId/userId | INTEGER | - | 是 | 操作者 ID |
| action | TEXT | 255 | 是 | 操作描述 |
| actionType | TEXT | 20 | 是 | 操作类型：create/delete/enable/disable/update/batch/join/register/other |
| targetType | TEXT | 50 | 否 | 目标类型 |
| targetId | INTEGER | - | 否 | 目标 ID |
| success | INTEGER | 1 | 是 | 成功：1/失败：0 |
| errorMessage | TEXT | 512 | 否 | 错误信息 |
| ip | TEXT | 45 | 否 | IP 地址 |
| userAgent | TEXT | 512 | 否 | 用户代理 |
| createdAt | INTEGER | - | 是 | 创建时间戳 (ms) |

#### 校验日志表（verifyLogs）

| 字段名 | 数据类型 | 长度 | 必填 | 说明 |
|-------|---------|------|------|------|
| id | INTEGER | - | 是 | 主键，自增 |
| projectId | INTEGER | - | 是 | 项目 ID |
| licenseId | INTEGER | - | 否 | 许可证 ID |
| clientUid | TEXT | 255 | 否 | 客户端唯一标识 |
| clientTime | INTEGER | - | 否 | 客户端时间戳 (ms) |
| serverTime | INTEGER | - | 是 | 服务端时间戳 (ms) |
| success | INTEGER | 1 | 是 | 成功：1/失败：0 |
| createdAt | INTEGER | - | 是 | 创建时间戳 (ms) |

### 5.2 物理结构设计

#### 存储要求

| 数据结构 | 存储引擎 | 存储位置 | 容量估算 |
|---------|---------|---------|---------|
| 所有数据表 | SQLite (D1) | Cloudflare D1 | < 10GB（初期） |
| 会话数据 | KV Store | Cloudflare KV | < 1GB |
| 静态资源 | CDN | Cloudflare CDN | < 500MB |

#### 访问方法

| 数据结构 | 访问方式 | 索引策略 | 访问频率 |
|---------|---------|---------|---------|
| users | Drizzle ORM | username 唯一索引 | 高 |
| admins | Drizzle ORM | username 唯一索引 | 中 |
| teams | Drizzle ORM | ownerUserId 索引 | 中 |
| teamMembers | Drizzle ORM | teamId+userId 唯一索引 | 中 |
| projects | Drizzle ORM | teamId 索引 | 高 |
| licenses | Drizzle ORM | licenseKey 唯一索引 | 高 |
| 日志表 | Drizzle ORM | createdAt 索引 | 中 |

#### 保密条件

| 数据结构 | 保密级别 | 访问控制 | 加密要求 |
|---------|---------|---------|---------|
| users.password | 高 | 仅内部访问 | 计划加密 |
| admins.passwordHash | 高 | 仅内部访问 | 计划加密 |
| licenses.licenseKey | 高 | API 验证后访问 | 无需加密 |
| 日志表.ip | 中 | 管理员可查 | 无需加密 |
| 其他业务数据 | 中 | 权限控制访问 | 无需加密 |

### 5.3 数据结构与程序代码的关系

| 结构 | MOD-USER-AUTH | MOD-USER-TEAM | MOD-USER-PROJ | MOD-USER-LIC | MOD-ADMIN | MOD-SADMIN | MOD-VERTIFY |
|-----|---------------|---------------|---------------|--------------|-----------|------------|-------------|
| users | √ | | | | √ | | |
| admins | √ | | | | | √ | |
| teams | | √ | | | √ | | |
| teamMembers | | √ | | | √ | | |
| projects | | | √ | √ | √ | | |
| licenses | | | | √ | | | √ |
| licenseBindings | | | | | | | √ |
| loginLogs | √ | | | | | √ | |
| adminActionLogs | | | | | √ | √ | |
| userActionLogs | √ | √ | √ | √ | √ | | |
| verifyLogs | | | | | | | √ |

***

## 六、数据库设计

### 6.1 数据库环境

| 项目 | 说明 |
|-----|------|
| **数据库类型** | Cloudflare D1（Serverless SQLite） |
| **数据库版本** | SQLite 3.x |
| **ORM 框架** | Drizzle ORM 0.45.1 |
| **部署方式** | Cloudflare 托管，自动扩展 |
| **备份策略** | Cloudflare 自动备份 |

### 6.2 数据库命名规则

| 对象类型 | 命名规则 | 示例 |
|---------|---------|------|
| **表名** | 复数形式，小写，下划线分隔 | users, teamMembers, loginLogs |
| **字段名** | 驼峰命名（TypeScript）/ 下划线命名（SQL） | createdAt / created\_at |
| **索引名** | `{表名}_{字段名}_idx` | users\_username\_idx |
| **唯一索引** | `{表名}_{字段名}_unique_idx` | licenses\_license\_key\_idx |

### 6.3 逻辑设计

数据库 ER 图核心关系：

```
users (1) ─────< (N) teamMembers >───── (N) teams (1) ─────< (N) projects
  │                                                                    │
  │                                                                    │
  └──────────────< (N) userActionLogs                                  │
                                                                         │
                                                                         ▼
admins (1) ─────< (N) adminActionLogs                      (1) ─────< (N) licenses
  │                                                                    │
  │                                                                    │
  └──────────────< (N) loginLogs                           (1) ─────< (N) licenseBindings
                                                                         │
                                                                         │
                                                                         ▼
                                                              (1) ─────< (N) verifyLogs
```

### 6.4 物理设计

#### 表空间设计

所有数据表存储在 Cloudflare D1 默认表空间中，无需手动管理。

#### 索引设计

| 表名 | 索引名 | 索引字段 | 索引类型 | 说明 |
|-----|-------|---------|---------|------|
| users | users\_username\_idx | username | UNIQUE | 用户名唯一性保证 |
| users | users\_status\_idx | status | NORMAL | 状态查询优化 |
| teams | teams\_owner\_user\_id\_idx | ownerUserId | NORMAL | 所有者查询优化 |
| teams | teams\_status\_idx | status | NORMAL | 状态查询优化 |
| teamMembers | team\_members\_team\_user\_idx | teamId, userId | UNIQUE | 防止重复加入 |
| projects | projects\_team\_id\_idx | teamId | NORMAL | 团队项目查询优化 |
| licenses | licenses\_license\_key\_idx | licenseKey | UNIQUE | 许可证密钥唯一性 |
| licenses | licenses\_project\_id\_idx | projectId | NORMAL | 项目许可证查询优化 |
| loginLogs | login\_logs\_created\_at\_idx | createdAt | NORMAL | 时间范围查询优化 |

### 6.5 安全性设计

| 安全措施 | 实现方式 | 说明 |
|---------|---------|------|
| **SQL 注入防护** | Drizzle ORM 参数化查询 | 所有查询使用参数绑定 |
| **访问控制** | JWT + 中间件验证 | 三级权限隔离 |
| **数据隔离** | teamId 关联查询 | 用户只能访问自己团队的数据 |
| **审计日志** | 操作日志记录 | 所有敏感操作记录日志 |
| **密码保护** | 计划引入 bcrypt | 当前为明文，后续版本改进 |

### 6.6 数据库管理与维护

| 维护任务 | 执行方式 | 频率 | 负责人 |
|---------|---------|------|-------|
| **数据备份** | Cloudflare 自动备份 | 每日 | Cloudflare |
| **性能监控** | D1 Dashboard | 持续 | 开发者 |
| **索引优化** | 分析慢查询日志 | 按需 | 开发者 |
| **数据清理** | 手动执行 SQL | 按需 | 管理员 |
| **迁移管理** | Drizzle Kit migrate | 版本发布时 | 开发者 |

***

## 七、用户界面设计

### 7.1 界面视图标识符

| 标识符 | 界面名称 | 所属应用 | 路径 | 描述 |
|-------|---------|---------|------|------|
| **UI-USER-LOGIN** | 用户登录页 | 用户端 | `/login` | 用户登录界面 |
| **UI-USER-HOME** | 用户首页 | 用户端 | `/` | 用户仪表盘 |
| **UI-USER-TEAMS** | 团队管理页 | 用户端 | `/teams` | 团队列表和操作 |
| **UI-USER-PROJECTS** | 项目管理页 | 用户端 | `/projects` | 项目列表和操作 |
| **UI-USER-LICENSES** | 许可证管理页 | 用户端 | `/licenses` | 许可证生成和管理 |
| **UI-USER-ANALYTICS** | 数据分析页 | 用户端 | `/analytics` | 统计图表展示 |
| **UI-ADMIN-LOGIN** | 管理员登录页 | 管理员端 | `/admin` | 管理员登录界面 |
| **UI-ADMIN-USERS** | 用户管理页 | 管理员端 | `/admin/users` | 用户列表和操作 |
| **UI-ADMIN-TEAMS** | 团队管理页 | 管理员端 | `/admin/teams` | 团队列表和操作 |
| **UI-ADMIN-PROJECTS** | 项目管理页 | 管理员端 | `/admin/projects` | 项目列表和操作 |
| **UI-ADMIN-LOGS** | 日志查询页 | 管理员端 | `/admin/logs` | 用户操作日志查询 |
| **UI-SADMIN-LOGIN** | 超级管理员登录页 | 超级管理员端 | `/super` | 超级管理员登录界面 |
| **UI-SADMIN-ADMINS** | 管理员管理页 | 超级管理员端 | `/super/admins` | 管理员列表和操作 |
| **UI-SADMIN-LOGS** | 日志查询页 | 超级管理员端 | `/super/logs` | 管理员登录日志查询 |

### 7.2 界面关系图

```
┌─────────────────────────────────────────────────────────────────┐
│                         用户端 (User App)                        │
│                                                                  │
│  ┌──────────┐                                                   │
│  │ 登录页    │─────────────────────────────────────┐            │
│  │ (LOGIN)  │                                     │            │
│  └──────────┘                                     ▼            │
│                                            ┌──────────┐        │
│         ┌─────────────────────────────────▶│  首页     │        │
│         │                                  │ (HOME)   │        │
│         │                                  └──────────┘        │
│         │                                       │              │
│         │         ┌─────────────┬───────────────┼──┬─────────┐ │
│         │         │             │               │  │         │ │
│         ▼         ▼             ▼               ▼  ▼         ▼ │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  │ 团队管理  │ │ 项目管理  │ │许可证管理 │ │ 数据分析  │ │  登出    │
│  │ (TEAMS)  │ │(PROJECTS)│ │(LICENSES)│ │(ANALYTICS)│ │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       管理员端 (Admin App)                       │
│                                                                  │
│  ┌──────────┐                                                   │
│  │ 登录页    │─────────────────────────────────────┐            │
│  │ (LOGIN)  │                                     │            │
│  └──────────┘                                     ▼            │
│                                            ┌──────────┐        │
│         ┌─────────────────────────────────▶│  首页     │        │
│         │                                  │ (DASHBOARD)      │
│         │                                  └──────────┘        │
│         │                                       │              │
│         │         ┌─────────────┬───────────────┼──┬─────────┐ │
│         │         │             │               │  │         │ │
│         ▼         ▼             ▼               ▼  ▼         ▼ │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  │ 用户管理  │ │ 团队管理  │ │ 项目管理  │ │ 日志查询  │ │  登出    │
│  │ (USERS)  │ │ (TEAMS)  │ │(PROJECTS)│ │  (LOGS)  │ │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                     超级管理员端 (Super Admin App)                │
│                                                                  │
│  ┌──────────┐                                                   │
│  │ 登录页    │─────────────────────────────────────┐            │
│  │ (LOGIN)  │                                     │            │
│  └──────────┘                                     ▼            │
│                                            ┌──────────┐        │
│         ┌─────────────────────────────────▶│  首页     │        │
│         │                                  │ (DASHBOARD)      │
│         │                                  └──────────┘        │
│         │                                       │              │
│         │              ┌────────────────────────┼──┬─────────┐ │
│         │              │                        │  │         │ │
│         ▼              ▼                        ▼  ▼         ▼ │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  │管理员管理 │ │ 日志查询  │ │  系统设置 │ │  登出    │
│  │ (ADMINS) │ │  (LOGS)  │ │ (SETTINGS)│ │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 工作流程图

**用户注册登录流程：**

```
开始
  │
  ▼
访问用户端首页
  │
  ▼
未登录？──是──▶ 跳转到登录页
  │                    │
  │                    ▼
  │              输入用户名密码
  │                    │
  │                    ▼
  │              调用 /api/user/login
  │                    │
  │                    ▼
  │              验证成功？──否──▶ 显示错误信息
  │                   │是
  │                   ▼
  │              存储 JWT Token
  │                   │
  │                   ▼
  └──────────────▶ 跳转到首页
                    │
                    ▼
                  结束
```

**许可证校验流程：**

```
客户端 SDK 发起校验请求
  │
  ▼
POST /api/vertify
  │
  ▼
解析请求参数 (system, sdkVersion, licenseKey, hardware)
  │
  ▼
参数验证 ──失败──▶ 返回 400 错误
  │成功
  ▼
根据 system 路由到对应平台处理器
  │
  ▼
查询许可证表验证 licenseKey
  │
  ▼
许可证存在？──否──▶ 返回校验失败
  │是
  ▼
状态为 active？──否──▶ 返回校验失败
  │是
  ▼
已绑定设备？──是──▶ 验证 clientUid 匹配
  │否                      │匹配失败
  ▼                       ▼
绑定当前设备        返回校验失败
  │
  ▼
记录校验日志
  │
  ▼
更新 lastVerifiedAt
  │
  ▼
返回校验成功 (success: true)
  │
  ▼
结束
```

***

## 八、出错处理设计

### 8.1 出错输出信息

| 错误分类 | 子项及编码 | 错误名称 | 错误代码 | HTTP 状态码 | 备注 |
|---------|-----------|---------|---------|-----------|------|
| **认证错误** | AUTH-001 | 未授权访问 | UNAUTHORIZED | 401 | 缺少或无效 JWT Token |
| **认证错误** | AUTH-002 | 账号或密码错误 | INVALID\_CREDENTIALS | 401 | 登录失败 |
| **认证错误** | AUTH-003 | 账号已被禁用 | ACCOUNT\_DISABLED | 403 | 账号状态为 disabled |
| **权限错误** | PERM-001 | 权限不足 | INSUFFICIENT\_PERMISSION | 403 | 角色权限不足 |
| **权限错误** | PERM-002 | 访问被拒绝 | ACCESS\_DENIED | 403 | 无权访问该资源 |
| **参数错误** | PARAM-001 | 参数无效 | INVALID\_PARAMETERS | 400 | 请求参数格式错误 |
| **参数错误** | PARAM-002 | 必填参数缺失 | MISSING\_REQUIRED\_FIELD | 400 | 缺少必填字段 |
| **参数错误** | PARAM-003 | 参数值超出范围 | VALUE\_OUT\_OF\_RANGE | 400 | 参数值不合法 |
| **资源错误** | RES-001 | 资源不存在 | RESOURCE\_NOT\_FOUND | 404 | 查询的资源不存在 |
| **资源错误** | RES-002 | 资源已存在 | RESOURCE\_ALREADY\_EXISTS | 409 | 创建的资源已存在 |
| **资源错误** | RES-003 | 资源已被删除 | RESOURCE\_DELETED | 410 | 资源已被软删除 |
| **业务错误** | BIZ-001 | 操作失败 | OPERATION\_FAILED | 500 | 业务逻辑执行失败 |
| **业务错误** | BIZ-002 | 许可证无效 | LICENSE\_INVALID | 400 | 许可证校验失败 |
| **业务错误** | BIZ-003 | 许可证已过期 | LICENSE\_EXPIRED | 403 | 许可证超过有效期 |
| **业务错误** | BIZ-004 | 许可证已绑定 | LICENSE\_ALREADY\_BOUND | 409 | 许可证已绑定其他设备 |
| **业务错误** | BIZ-005 | 不支持的系统 | UNSUPPORTED\_SYSTEM | 400 | 不支持的操作系统 |
| **业务错误** | BIZ-006 | 不支持的版本 | UNSUPPORTED\_VERSION | 400 | 不支持的 SDK 版本 |
| **系统错误** | SYS-001 | 数据库错误 | DATABASE\_ERROR | 500 | D1 数据库操作失败 |
| **系统错误** | SYS-002 | 内部服务器错误 | INTERNAL\_SERVER\_ERROR | 500 | 未预期的系统错误 |
| **系统错误** | SYS-003 | 服务不可用 | SERVICE\_UNAVAILABLE | 503 | 服务暂时不可用 |

### 8.2 出错处理对策

#### 后备机制

| 场景 | 后备方案 | 说明 |
|-----|---------|------|
| D1 数据库不可用 | 返回缓存数据 | 读取 KV 中的缓存数据（如有） |
| KV 会话存储不可用 | 降级为无状态 JWT | 仅依赖 JWT Token 验证 |
| 边缘节点故障 | 自动路由到邻近节点 | Cloudflare 自动故障转移 |

#### 性能降级

| 降级级别 | 触发条件 | 降级措施 |
|---------|---------|---------|
| **Level 1** | 响应时间 > 200ms | 减少日志写入频率 |
| **Level 2** | 响应时间 > 500ms | 暂停非关键日志记录 |
| **Level 3** | 响应时间 > 1000ms | 仅处理核心业务请求 |

#### 恢复机制

| 故障类型 | 恢复策略 | 说明 |
|---------|---------|------|
| **短暂网络故障** | 自动重试 | 最多重试 3 次，间隔递增 |
| **数据库锁死** | 事务回滚 + 重试 | 回滚当前事务，延迟后重试 |
| **服务崩溃** | Cloudflare 自动重启 | Workers 自动故障恢复 |

#### 再启动机制

| 场景 | 再启动流程 | 说明 |
|-----|-----------|------|
| **Worker 冷启动** | Cloudflare 自动加载 | 首次请求时自动初始化 |
| **部署更新** | 灰度发布 | Cloudflare 自动滚动更新 |
| **配置变更** | 重新加载配置 | 下次请求时生效 |

***

## 附录

### 附录 A：版本历史

| 版本 | 日期 | 作者 | 变更说明 |
|-----|------|------|---------|
| V1.0 | 2026-03-14 | AuthGenie 项目组 | 初始版本 |

### 附录 B：审批记录

| 角色 | 姓名 | 日期 | 意见 | 签名 |
|-----|------|------|------|------|
| 项目负责人 | - | - | - | - |
| 技术负责人 | - | - | - | - |
| 指导教师 | - | - | - | - |

***

**文档结束**
