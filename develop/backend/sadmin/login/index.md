---
url: /develop/backend/sadmin/login/index.md
---
## 接口说明

超级管理员通过用户名和密码进行登录，登录成功后返回管理员信息和会话有效期。

## 请求

**URL:** `/api/sadmin/login`

**方法:** `POST`

**Content-Type:** `application/json`

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 超级管理员账号 |
| password | string | 是 | 密码 |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| adminId | number | 管理员 ID |
| username | string | 管理员账号 |
| role | string | 角色：sadmin |
| expiresIn | number | 会话有效期（秒） |

## 响应示例

```json
{
  "adminId": 1,
  "username": "root",
  "role": "sadmin",
  "expiresIn": 604800
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 登录成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 401 | INVALID\_CREDENTIALS | 账号或密码错误 |
| 403 | ACCOUNT\_DISABLED | 账号已禁用 |
| 500 | DATABASE\_ERROR | 数据库未配置 |
