---
url: /develop/backend/admin/user-enable/index.md
---
## 接口说明

管理员启用已禁用的用户账号。

## 请求

**URL:** `/api/admin/user/enable`

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
| userId | number | 是 | 用户 ID |

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
| 200 | SUCCESS | 操作成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 401 | UNAUTHORIZED | 未授权 |
| 403 | FORBIDDEN | 无权限 |
| 404 | USER\_NOT\_FOUND | 用户不存在 |
| 500 | DATABASE\_ERROR | 数据库错误 |
