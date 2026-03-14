---
title: 安装环境和依赖
icon: grommet-icons:install
createTime: 2025/12/03 15:17:31
permalink: /develop/installenv/
---
## 系统要求

### 操作系统

- Windows 10/11
- macOS 12+
- Linux Ubuntu 20.04+

### Node.js

**版本要求：** Node.js 18.0+（推荐 20+）

```bash
# 检查 Node.js 版本
node -v

# 检查 npm 版本
npm -v
```

### 包管理器

- npm 9+
- 或 pnpm 8+
- 或 yarn 1.22+

## 安装步骤

### 1. 安装 Node.js

**Windows/macOS：**
访问 [Node.js 官网](https://nodejs.org/) 下载安装包

**Linux（Ubuntu/Debian）：**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Linux（CentOS/RHEL）：**
```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
```

### 2. 安装 Wrangler CLI

Wrangler 是 Cloudflare Workers 的官方 CLI 工具。

```bash
npm install -g wrangler

# 检查版本
wrangler -v
```

### 3. 登录 Cloudflare

```bash
wrangler login
```

浏览器会自动打开，使用 Cloudflare 账号授权。

### 4. 克隆项目

```bash
git clone https://github.com/your-repo/authgenie.git
cd authgenie
```

### 5. 安装后端依赖

```bash
npm install
```

### 6. 安装前端依赖

```bash
cd frontend
npm install
cd ..
```

### 7. 配置环境变量

复制 wrangler.jsonc.example 为 wrangler.jsonc：

```bash
cp wrangler.jsonc.example wrangler.jsonc
```

编辑 wrangler.jsonc，填入你的 Cloudflare 资源 ID。

### 8. 初始化数据库

```bash
wrangler d1 execute authgenie-db --local --file=src/db/migrations/0000_init.sql
```

## 开发环境验证

### 启动后端开发服务器

```bash
npm run dev
```

访问 http://localhost:8787

### 启动前端开发服务器

```bash
cd frontend
npm run dev
```

访问 http://localhost:5173

## 常见问题

### Q: wrangler 命令找不到

A: 确保已全局安装 wrangler，或检查 npm 全局 bin 目录是否在 PATH 中。

### Q: 登录 Cloudflare 失败

A: 检查网络连接，或尝试使用 `wrangler login --scopes=account:read`。

### Q: 数据库初始化失败

A: 确保已创建 D1 数据库，并在 wrangler.jsonc 中正确配置 database_id。
