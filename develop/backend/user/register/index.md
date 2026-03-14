---
url: /develop/backend/user/register/index.md
---
## 接口说明

新用户注册账号，注册成功后自动登录。用户名必须唯一，系统会自动创建用户记录并返回用户信息。

## 请求

**URL:** `/api/user/register`

**方法:** `POST`

**Content-Type:** `application/json`

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | string | 是 | 用户名，2-20 字符，必须唯一 |
| password | string | 是 | 密码，6-32 字符 |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| success | boolean | 是否成功 |
| userId | number | 用户 ID |
| username | string | 用户名 |

## 响应示例

```json
{
  "success": true,
  "userId": 1001,
  "username": "newuser"
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 注册成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 409 | USERNAME\_EXISTS | 用户名已存在 |
| 500 | DATABASE\_ERROR | 数据库错误 |

## 实现细节

1. 验证用户名和密码格式
2. 检查用户名是否已存在
3. 创建用户记录（密码明文存储）
4. 返回用户信息
