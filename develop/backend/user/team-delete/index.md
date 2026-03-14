---
url: /develop/backend/user/team-delete/index.md
---
## 接口说明

删除指定的团队。只有团队所有者可以删除团队。删除团队会同时删除团队下的所有项目和许可证。

## 请求

**URL:** `/api/user/team/delete`

**方法:** `DELETE`

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
| 403 | FORBIDDEN | 无权限删除该团队 |
| 404 | TEAM\_NOT\_FOUND | 团队不存在 |
| 500 | DATABASE\_ERROR | 数据库错误 |

## 实现细节

1. 验证用户登录状态
2. 检查团队是否存在
3. 验证用户是否为团队所有者
4. 删除团队记录（级联删除项目和许可证）
5. 记录操作日志
