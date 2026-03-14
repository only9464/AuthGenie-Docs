---
url: /develop/backend/user/logout/index.md
---
## 接口说明

用户退出登录，系统会清除 KV 中的会话数据。需要携带有效的会话 Cookie。

## 请求

**URL:** `/api/user/logout`

**方法:** `POST`

## 请求头

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Cookie | string | 是 | session\_id，HttpOnly Cookie |

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
| 200 | SUCCESS | 登出成功 |
| 401 | UNAUTHORIZED | 未授权 |

## 实现细节

1. 从 Cookie 中读取 session\_id
2. 从 KV 中删除会话数据
3. 清除客户端 Cookie
