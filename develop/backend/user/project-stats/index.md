---
url: /develop/backend/user/project-stats/index.md
---
## 接口说明

获取指定项目的统计数据，包括许可证总数、激活数、绑定数等。

## 请求

**URL:** `/api/user/project/stats`

**方法:** `GET`

## 请求头

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Cookie | string | 是 | session\_id，HttpOnly Cookie |

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| projectId | number | 是 | 项目 ID（Query 参数） |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| total | number | 许可证总数 |
| active | number | 已激活数量 |
| bound | number | 已绑定设备数量 |
| disabled | number | 已禁用数量 |
| pending | number | 待使用数量 |

## 响应示例

```json
{
  "total": 100,
  "active": 50,
  "bound": 45,
  "disabled": 5,
  "pending": 50
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 查询成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 401 | UNAUTHORIZED | 未授权 |
| 403 | FORBIDDEN | 无权限查看该项目 |
| 404 | PROJECT\_NOT\_FOUND | 项目不存在 |
| 500 | DATABASE\_ERROR | 数据库错误 |
