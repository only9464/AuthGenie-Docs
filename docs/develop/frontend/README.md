---
title: 前端开发指南
icon: fluent:code-circle-20-regular
createTime: 2026/03/14 16:50:00
permalink: /develop/frontend/
---
## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.5.27 | Composition API |
| Vite | 7.3.1 | 构建工具 |
| Element Plus | 2.13.2 | UI 组件库 |
| Pinia | 3.0.4 | 状态管理 |
| Vue Router | 4.x | 路由管理 |
| Axios | 1.x | HTTP 客户端 |
| TypeScript | 5.9.3 | 类型系统 |

## 项目结构

```
frontend/
├── src/
│   ├── apps/               # 多应用入口
│   │   ├── user/           # 用户端应用
│   │   │   ├── main.ts     # 入口文件
│   │   │   ├── App.vue     # 根组件
│   │   │   ├── router/     # 路由配置
│   │   │   ├── stores/     # Pinia 状态
│   │   │   └── views/      # 页面组件
│   │   ├── admin/          # 管理员端应用
│   │   └── sadmin/         # 超级管理员端应用
│   ├── components/         # 公共组件
│   ├── composables/        # 组合式函数
│   ├── utils/              # 工具函数
│   ├── types/              # TypeScript 类型
│   └── styles/             # 全局样式
├── public/                 # 静态资源
├── index.html              # HTML 模板
└── vite.config.ts          # Vite 配置
```

## 多应用模式

AuthGenie 前端采用多应用模式，三个应用共享组件和工具库。

### 用户端（/）

- 路径：`src/apps/user/`
- 功能：团队管理、项目管理、许可证生成
- 路由：/login, /teams, /projects, /licenses

### 管理员端（/admin）

- 路径：`src/apps/admin/`
- 功能：用户管理、团队管理、项目管理、日志查询
- 路由：/login, /users, /teams, /projects, /logs

### 超级管理员端（/super）

- 路径：`src/apps/sadmin/`
- 功能：管理员管理、系统日志
- 路由：/login, /admins, /logs

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 类型检查
npm run type-check

# 代码格式化
npm run lint
```

## 组件开发规范

### 组件命名

- 文件名：PascalCase，如 `UserTable.vue`
- 组件名：与文件名一致

### Props 定义

```typescript
defineProps<{
  title: string
  count?: number
  loading?: boolean
}>()
```

### 事件定义

```typescript
const emit = defineEmits<{
  submit: [data: FormData]
  cancel: []
}>()
```

## 状态管理

使用 Pinia 进行状态管理。

```typescript
// stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as UserInfo | null,
    token: ''
  }),
  actions: {
    login(username: string, password: string) {
      // 登录逻辑
    }
  }
})
```

## API 调用

使用 Axios 封装的 API 客户端。

```typescript
// utils/request.ts
import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 添加 Token
  return config
})

// 响应拦截器
request.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)
```

## 路由配置

```typescript
// apps/user/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})
```
