---
url: /develop/backend/user/project-list/index.md
---
## 接口说明

获取指定团队下的所有项目列表。

## 请求

**URL:** `/api/user/project/list`

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
| projects | array | 项目列表 |
| projects\[].id | number | 项目 ID |
| projects\[].teamId | number | 所属团队 ID |
| projects\[].name | string | 项目名称 |
| projects\[].platform | string | 平台 |
| projects\[].status | string | 项目状态 |
| projects\[].createdAt | number | 创建时间戳 |

## 响应示例

```json
{
  "projects": [
    {
      "id": 1,
      "teamId": 1,
      "name": "My App",
      "platform": "windows",
      "status": "active",
      "createdAt": 1773478150000
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
