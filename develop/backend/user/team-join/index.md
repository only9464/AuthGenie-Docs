---
url: /develop/backend/user/team-join/index.md
---
## 接口说明

用户通过邀请码加入已有团队。

## 请求

**URL:** `/api/user/team/join`

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
| teamId | number | 是 | 团队 ID |
| code | string | 是 | 邀请码 |

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
| 200 | SUCCESS | 加入成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 401 | UNAUTHORIZED | 未授权 |
| 404 | TEAM\_NOT\_FOUND | 团队不存在 |
| 410 | INVALID\_CODE | 邀请码无效或已过期 |
| 500 | DATABASE\_ERROR | 数据库错误 |
