---
url: /develop/backend/sadmin/admin-list/index.md
---
## 接口说明

超级管理员分页查询所有管理员列表，支持按状态筛选。

## 请求

**URL:** `/api/sadmin/admin/list`

**方法:** `GET`

## 请求头

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Cookie | string | 是 | session\_id，HttpOnly Cookie |

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| page | number | 否 | 页码，默认 1 |
| limit | number | 否 | 每页数量，默认 20 |
| status | string | 否 | 状态筛选：active/disabled |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| admins | array | 管理员列表 |
| admins\[].id | number | 管理员 ID |
| admins\[].username | string | 管理员账号 |
| admins\[].status | string | 管理员状态 |
| admins\[].createdAt | number | 创建时间戳 |
| admins\[].lastLoginAt | number | 最后登录时间戳 |
| total | number | 总数 |
| page | number | 当前页码 |
| limit | number | 每页数量 |

## 响应示例

```json
{
  "admins": [
    {
      "id": 1,
      "username": "admin1",
      "status": "active",
      "createdAt": 1773478150000,
      "lastLoginAt": 1773478150000
    }
  ],
  "total": 10,
  "page": 1,
  "limit": 20
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 查询成功 |
| 401 | UNAUTHORIZED | 未授权 |
| 403 | FORBIDDEN | 无权限 |
| 500 | DATABASE\_ERROR | 数据库错误 |
