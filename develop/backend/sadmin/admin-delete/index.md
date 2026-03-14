---
url: /develop/backend/sadmin/admin-delete/index.md
---
## 接口说明

超级管理员删除指定的管理员账号。

## 请求

**URL:** `/api/sadmin/admin/delete`

**方法:** `DELETE`

## 请求头

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Cookie | string | 是 | session\_id，HttpOnly Cookie |

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| adminId | number | 是 | 管理员 ID（Query 参数） |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| success | boolean | 是否成功 |

## 响应示例

```json
{
  "success": true
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 删除成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 401 | UNAUTHORIZED | 未授权 |
| 403 | FORBIDDEN | 无权限 |
| 404 | ADMIN\_NOT\_FOUND | 管理员不存在 |
| 500 | DATABASE\_ERROR | 数据库错误 |
