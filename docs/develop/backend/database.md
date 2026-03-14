---
title: 数据库
icon: streamline-plump:database-solid
createTime: 2026/03/14 16:50:00
permalink: /develop/backend/database/
---
## 一、D1 数据库

### 系统管理员表（admins）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| username | TEXT | 否 | 管理员账号，唯一 |
| passwordHash | TEXT | 否 | 密码哈希（当前版本明文） |
| status | TEXT | 否 | 状态：active/disabled |
| createdAt | INTEGER | 否 | 创建时间戳（毫秒） |
| updatedAt | INTEGER | 否 | 更新时间戳（毫秒） |
| lastLoginAt | INTEGER | 否 | 最后登录时间戳（毫秒） |

:::

### 用户表（users）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| username | TEXT | 否 | 用户名，唯一 |
| password | TEXT | 否 | 密码（当前版本明文） |
| status | TEXT | 否 | 状态：active/disabled |
| createdAt | INTEGER | 否 | 创建时间戳（毫秒） |
| updatedAt | INTEGER | 否 | 更新时间戳（毫秒） |
| lastLoginAt | INTEGER | 否 | 最后登录时间戳（毫秒） |

:::

### 团队表（teams）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| ownerUserId | INTEGER | 否 | 所有者用户 ID |
| name | TEXT | 否 | 团队名称 |
| status | TEXT | 否 | 状态：active/disabled |
| createdAt | INTEGER | 否 | 创建时间戳（毫秒） |
| updatedAt | INTEGER | 否 | 更新时间戳（毫秒） |

:::

### 团队成员表（teamMembers）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| teamId | INTEGER | 否 | 团队 ID |
| userId | INTEGER | 否 | 用户 ID |
| role | TEXT | 否 | 角色：owner/member |
| joinedAt | INTEGER | 否 | 加入时间戳（毫秒） |

:::

### 项目表（projects）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| teamId | INTEGER | 否 | 所属团队 ID |
| name | TEXT | 否 | 项目名称 |
| platform | TEXT | 否 | 平台：windows/macos/linux/android/ios/harmonyos |
| status | TEXT | 否 | 状态：active/disabled |
| createdAt | INTEGER | 否 | 创建时间戳（毫秒） |
| updatedAt | INTEGER | 否 | 更新时间戳（毫秒） |

:::

### 许可证表（按平台分表）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 表名 | 说明 |
|------|------|
| windows_licenses | Windows 许可证表 |
| macos_licenses | macOS 许可证表 |
| linux_licenses | Linux 许可证表 |
| android_licenses | Android 许可证表 |
| ios_licenses | iOS 许可证表 |
| harmonyos_licenses | HarmonyOS 许可证表 |

:::

**通用字段：**

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| projectId | INTEGER | 否 | 所属项目 ID |
| licenseKey | TEXT | 否 | 许可证密钥，唯一 |
| status | TEXT | 否 | 状态：pending/active/disabled |
| createdAt | INTEGER | 否 | 创建时间戳（毫秒） |
| updatedAt | INTEGER | 否 | 更新时间戳（毫秒） |
| firstUsedAt | INTEGER | 否 | 首次使用时间戳（毫秒） |
| lastUsedAt | INTEGER | 否 | 最后校验时间戳（毫秒） |

**Windows 特有字段：**

| 字段名 | 类型 | 说明 |
|--------|------|------|
| osName | TEXT | 操作系统名称 |
| osVersion | TEXT | 操作系统版本 |
| cpuModel | TEXT | CPU 型号 |
| cpuCores | INTEGER | CPU 核心数 |
| totalMemoryBytes | INTEGER | 总内存（字节） |
| diskModel | TEXT | 磁盘型号 |
| diskSizeBytes | INTEGER | 磁盘总容量（字节） |
| hostname | TEXT | 主机名 |

**其他平台字段：**

| 字段名 | 类型 | 说明 |
|--------|------|------|
| hardwareJson | TEXT | 硬件信息 JSON 字符串 |

:::

### 登录日志表（loginLogs）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| actorType | TEXT | 否 | 角色类型：sadmin/admin |
| actorId | INTEGER | 否 | 角色 ID |
| actorUsername | TEXT | 否 | 角色用户名 |
| success | INTEGER | 否 | 成功：1/失败：0 |
| ip | TEXT | 否 | IP 地址 |
| userAgent | TEXT | 否 | 用户代理 |
| createdAt | INTEGER | 否 | 创建时间戳（毫秒） |

:::

### 操作日志表（userActionLogs / adminActionLogs）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| userId/adminId | INTEGER | 否 | 操作者 ID |
| action | TEXT | 否 | 操作描述 |
| actionType | TEXT | 否 | 操作类型：create/delete/enable/disable/update/batch/join/register/other |
| targetType | TEXT | 否 | 目标类型 |
| targetId | INTEGER | 否 | 目标 ID |
| success | INTEGER | 否 | 成功：1/失败：0 |
| errorMessage | TEXT | 否 | 错误信息 |
| ip | TEXT | 否 | IP 地址 |
| userAgent | TEXT | 否 | 用户代理 |
| createdAt | INTEGER | 否 | 创建时间戳（毫秒） |

:::

### 校验日志表（verifyLogs）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 类型 | 主键 | 说明 |
|--------|------|------|------|
| id | INTEGER | 是 | 主键，自增 |
| projectId | INTEGER | 否 | 项目 ID |
| licenseId | INTEGER | 否 | 许可证 ID |
| clientUid | TEXT | 否 | 客户端唯一标识 |
| clientTime | INTEGER | 否 | 客户端时间戳（毫秒） |
| serverTime | INTEGER | 否 | 服务端时间戳（毫秒） |
| success | INTEGER | 否 | 成功：1/失败：0 |
| createdAt | INTEGER | 否 | 创建时间戳（毫秒） |

:::

## 二、KV 数据库

### USER_SESSION_KV

用于存储用户会话数据。

**Key 格式：**
- `session:{sessionId}` - 会话数据
- `user-session:{userId}` - 用户当前会话 ID（用于单点登录）

**Value 格式（JSON）：**

| 字段 | 类型 | 说明 |
|------|------|------|
| userId | number | 用户 ID |
| username | string | 用户名 |
| createdAt | number | 创建时间戳 |
| expiresAt | number | 过期时间戳 |

**TTL：** 7 天（604800 秒）
