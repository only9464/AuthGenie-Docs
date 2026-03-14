---
url: /develop/backend/sadmin/admin-add/index.md
---
## 接口说明

超级管理员添加新的管理员账号。

## 请求

**URL:** `/api/sadmin/admin/add`

**方法:** `POST`

**Content-Type:** `application/json`

## 请求头

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Cookie | string | 是 | session\_id，HttpOnly Cookie |
| Content-Type | string | 是 | 必须为 application/json |

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 管理员账号 |
| password | string | 是 | 密码 |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| success | boolean | 是否成功 |
| adminId | number | 管理员 ID |

## 响应示例

```json
{
  "success": true,
  "adminId": 2
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 添加成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 401 | UNAUTHORIZED | 未授权 |
| 403 | FORBIDDEN | 无权限 |
| 409 | USERNAME\_EXISTS | 账号已存在 |
| 500 | DATABASE\_ERROR | 数据库错误 |
