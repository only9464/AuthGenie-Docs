---
title: 数据库
icon: streamline-plump:database-solid
createTime: 2025/12/03 15:43:05
permalink: /develop/backend/database/
---
## 一、D1数据库

### 系统管理员表（admin）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名        | 类型    | 主键 | 说明                     |
|---------------|---------|------|--------------------------|
| id            | TEXT    | 是   | 雪花 ID / UUID           |
| username      | TEXT    | 否   | 管理员账号               |
| email         | TEXT    | 否   | 登录邮箱                 |
| password_hash | TEXT    | 否   | 哈希密码                 |
| canBeUsed     | INTEGER | 否   | 0 禁用 / 1 启用          |
| updateTime    | TEXT    | 否   | 更新时间（ISO）          |
| createTime    | TEXT    | 否   | 创建时间（ISO）          |

:::

### 操作审计日志（audit_log）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"
| 字段名     | 类型    | 主键 | 说明                            |
|------------|---------|------|---------------------------------|
| id         | TEXT    | 是   | ID                              |
| actor_type | TEXT    | 否   | admin / user                    |
| actor_id   | TEXT    | 否   | 操作者 ID                       |
| action     | TEXT    | 否   | login / create_project ...      |
| detail     | TEXT    | 否   | 扩展 JSON                       |
| ip         | TEXT    | 否   | 操作 IP                         |
| createTime | TEXT    | 否   | 时间戳                          |


### 用户表（user）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"
| 字段名     | 类型    | 主键 | 说明                           |
|------------|---------|------|--------------------------------|
| id         | TEXT    | 是   | 用户 ID（UUID）                |
| username   | TEXT    | 否   | 用户名（GitHub login）         |
| email      | TEXT    | 否   | GitHub 邮箱（可能为空）        |
| avatar     | TEXT    | 否   | GitHub 头像 URL                |
| github_id  | TEXT    | 否   | GitHub User ID                 |
| canBeUsed  | INTEGER | 否   | 1 可用 / 0 禁用                |
| updateTime | TEXT    | 否   | 更新时间（ISO）                |
| createTime | TEXT    | 否   | 创建时间（ISO）                |

:::

### 团队表（team）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"
| 字段名     | 类型 | 主键 | 说明             |
|------------|------|------|------------------|
| id         | TEXT | 是   | 团队 ID          |
| name       | TEXT | 否   | 团队名称         |
| owner_id   | TEXT | 否   | 创建者 user.id   |
| createTime | TEXT | 否   | 创建时间         |
| updateTime | TEXT | 否   | 更新时间         |

:::

### 团队成员表（team_member）


::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"
| 字段名     | 类型 | 主键 | 说明                           |
|------------|------|------|--------------------------------|
| id         | TEXT | 是   | ID                             |
| team_id    | TEXT | 否   | 团队 ID                        |
| user_id    | TEXT | 否   | 用户 ID                        |
| role       | TEXT | 否   | owner / admin / member         |
| createTime | TEXT | 否   | 加入时间                       |

:::

### 项目表（project）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"
| 字段名      | 类型 | 主键 | 说明         |
|-------------|------|------|--------------|
| id          | TEXT | 是   | 项目 ID      |
| team_id     | TEXT | 否   | 所属团队 ID  |
| name        | TEXT | 否   | 项目名称     |
| description | TEXT | 否   | 项目简介     |
| createTime  | TEXT | 否   | 创建时间     |
| updateTime  | TEXT | 否   | 更新时间     |

:::

### License 表（license）

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"
| 字段名         | 类型    | 主键 | 说明                           |
|----------------|---------|------|--------------------------------|
| id             | TEXT    | 是   | License ID                     |
| project_id     | TEXT    | 否   | 所属项目                       |
| key            | TEXT    | 否   | 授权密钥（哈希/加密存储）     |
| type           | TEXT    | 否   | trial / paid / internal / life |
| max_activation | INTEGER | 否   | 最大激活次数                   |
| expireAt       | TEXT    | 否   | 到期时间                       |
| meta_json      | TEXT    | 否   | JSON 扩展数据                  |
| createTime     | TEXT    | 否   | 创建时间                       |
| updateTime     | TEXT    | 否   | 更新时间                       |

:::



## 二、KV数据库

### SessionID

Key: `session:{session_id}`  
Value(JSON):

| 字段        | 说明                     |
|-------------|--------------------------|
| user_id     | 用户 ID                  |
| ip          | 登录 IP                  |
| ua          | User-Agent               |
| expireAt    | 过期时间（ISO）         |
| createTime  | 创建时间                 |
