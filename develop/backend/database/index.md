---
url: /develop/backend/database/index.md
---
## D1数据库

### 系统管理员表

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名     | 字段类型 | 字段含义         | 是否外键 | 备注                   |
| ---------- | -------- | ---------------- | -------- | ---------------------- |
| id         | int      | 系统管理员ID     |          |                        |
| username   | string   | 系统管理员用户名 |          |                        |
| email      | string   | 系统管理员邮箱   |          |                        |
| canBeUsed  | int      | 该账号是否可用   |          | 0表示不可用，1表示可用 |
| updateTime | string   | 信息更新时间     |          |                        |
| createTime | string   | 创建时间         |          |                        |

:::

### 用户表

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名     | 字段类型 | 字段含义     | 是否外键 | 备注                         |
| ---------- | -------- | ------------ | -------- | ---------------------------- |
| id         | int      | 用户ID       |          |                              |
| username   | string   | 用户名       |          |                              |
| password   | string   | 密码         |          | 加密后存储                   |
| email      | string   | 邮箱         |          | 使用github登录的时候强制替换 |
| github\_id  | int      | github数字id |          | 用户使用github登录自动绑定   |
| canBeUsed  | int      | 账号是否可用 |          | 0表示不可用，1表示可用       |
| updateTime | string   | 信息更新时间 |          |                              |
| createTime | string   | 创建时间     |          |                              |

:::

### 团队表

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 字段类型 | 字段含义 | 是否外键 | 备注 |
| ------ | -------- | -------- | -------- | ---- |
| id     |          |          |          |      |
|        |          |          |          |      |

:::

### 项目表

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 字段类型 | 字段含义 | 是否外键 | 备注 |
| ------ | -------- | -------- | -------- | ---- |
| id     |          |          |          |      |
|        |          |          |          |      |

:::

## 表格示例

::: table full-width align="center" hl-rows="tip:1" hl-cols="success:1"

| 字段名 | 字段类型 | 字段含义 | 是否外键 | 备注 |
| ------ | -------- | -------- | -------- | ---- |
| id     |          |          |          |      |

:::
