---
url: /develop/getcode/index.md
---
## 源码仓库

AuthGenie 项目托管在 GitHub 上。

**仓库地址：** https://github.com/your-repo/authgenie

## 克隆项目

### 方式一：HTTPS

```bash
git clone https://github.com/your-repo/authgenie.git
cd authgenie
```

### 方式二：SSH

```bash
git clone git@github.com:your-repo/authgenie.git
cd authgenie
```

## 项目结构

```
authgenie/
├── src/                    # 后端源码
│   ├── index.ts            # 入口文件
│   ├── db/                 # 数据库相关
│   │   ├── schema.ts       # 表结构定义
│   │   └── migrations/     # 数据库迁移
│   ├── user/               # 用户 API 模块
│   ├── admin/              # 管理员 API 模块
│   ├── sadmin/             # 超级管理员 API 模块
│   └── vertify/            # 许可证校验 API 模块
├── frontend/               # 前端源码
│   ├── src/
│   │   ├── apps/           # 多应用模式
│   │   │   ├── user/       # 用户端
│   │   │   ├── admin/      # 管理员端
│   │   │   └── sadmin/     # 超级管理员端
│   │   ├── components/     # 公共组件
│   │   ├── composables/    # 组合式函数
│   │   └── router/         # 路由配置
│   └── package.json
├── package.json            # 后端 package.json
├── wrangler.jsonc          # Workers 配置
└── README.md
```

## 分支说明

| 分支 | 说明 |
|------|------|
| main | 主分支，稳定版本 |
| develop | 开发分支，最新功能 |
| feature/\* | 功能分支 |
| fix/\* | 修复分支 |

## 版本标签

查看历史版本：

```bash
git tag -l
```

切换至特定版本：

```bash
git checkout v1.0.0
```
