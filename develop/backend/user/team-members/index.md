---
url: /develop/backend/user/team-members/index.md
---
## 接口说明

获取指定团队的所有成员列表。

## 请求

**URL:** `/api/user/team/members`

**方法:** `GET`

## 请求头

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Cookie | string | 是 | session\_id，HttpOnly Cookie |

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| teamId | number | 是 | 团队 ID（Query 参数） |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| members | array | 成员列表 |
| members\[].userId | number | 用户 ID |
| members\[].username | string | 用户名 |
| members\[].role | string | 角色：owner/member |
| members\[].joinedAt | number | 加入时间戳 |

## 响应示例

```json
{
  "members": [
    {
      "userId": 1001,
      "username": "owner",
      "role": "owner",
      "joinedAt": 1773478150000
    },
    {
      "userId": 1002,
      "username": "member1",
      "role": "member",
      "joinedAt": 1773478200000
    }
  ]
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 查询成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 401 | UNAUTHORIZED | 未授权 |
| 403 | FORBIDDEN | 无权限查看该团队 |
| 404 | TEAM\_NOT\_FOUND | 团队不存在 |
| 500 | DATABASE\_ERROR | 数据库错误 |
