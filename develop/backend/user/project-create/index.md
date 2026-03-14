---
url: /develop/backend/user/project-create/index.md
---
## 接口说明

在指定团队下创建新项目。项目必须属于某个平台（Windows/macOS/Linux/Android/iOS/HarmonyOS）。

## 请求

**URL:** `/api/user/project/create`

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
| teamId | number | 是 | 所属团队 ID |
| name | string | 是 | 项目名称 |
| platform | string | 是 | 目标平台：windows/macos/linux/android/ios/harmonyos |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| success | boolean | 是否成功 |
| project | object | 项目信息 |
| project.id | number | 项目 ID |
| project.teamId | number | 所属团队 ID |
| project.name | string | 项目名称 |
| project.platform | string | 平台 |
| project.status | string | 项目状态 |
| project.createdAt | number | 创建时间戳 |

## 响应示例

```json
{
  "success": true,
  "project": {
    "id": 1,
    "teamId": 1,
    "name": "My App",
    "platform": "windows",
    "status": "active",
    "createdAt": 1773478150000
  }
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 创建成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 401 | UNAUTHORIZED | 未授权 |
| 403 | FORBIDDEN | 无权限在该团队下创建项目 |
| 404 | TEAM\_NOT\_FOUND | 团队不存在 |
| 500 | DATABASE\_ERROR | 数据库错误 |
