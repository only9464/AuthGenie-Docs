---
url: /develop/backend/vertify/index.md
---
## 接口说明

许可证校验接口，支持六大平台（Windows/macOS/Linux/Android/iOS/HarmonyOS）的许可证验证。客户端 SDK 调用此接口验证许可证的有效性。

**校验流程：**

1. 客户端采集硬件信息
2. 发送许可证密钥和硬件信息到服务端
3. 服务端验证许可证有效性
4. 首次校验自动绑定硬件
5. 后续校验验证硬件匹配
6. 记录校验日志

## 请求

**URL:** `/api/vertify`

**方法:** `POST`

**Content-Type:** `application/json`

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| system | string | 是 | 操作系统：windows/macos/linux/android/ios/harmonyos |
| sdkVersion | string | 是 | SDK 版本号，如 0.0.1 |
| licenseKey | string | 是 | 许可证密钥 |
| clientTime | number | 否 | 客户端时间戳（毫秒） |
| hardware | object | 否 | 硬件信息（因平台而异） |

## 硬件信息格式

### Windows

| 字段 | 类型 | 说明 |
|------|------|------|
| osName | string | 操作系统名称 |
| osVersion | string | 操作系统版本 |
| cpuModel | string | CPU 型号 |
| cpuCores | number | CPU 核心数 |
| totalMemoryBytes | number | 总内存（字节） |
| diskModel | string | 磁盘型号 |
| diskSizeBytes | number | 磁盘总容量（字节） |
| hostname | string | 主机名 |

### macOS/Linux

| 字段 | 类型 | 说明 |
|------|------|------|
| hardwareJson | string | 硬件信息 JSON 字符串 |

### Android/iOS/HarmonyOS

| 字段 | 类型 | 说明 |
|------|------|------|
| hardwareJson | string | 硬件信息 JSON 字符串 |

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| success | boolean | 校验是否成功 |
| message | string | 响应消息 |
| expiresAt | number | 过期时间戳（null 表示永久有效） |
| bound | boolean | 是否已绑定设备 |

## 响应示例

### 校验成功

```json
{
  "success": true,
  "message": "校验通过",
  "expiresAt": null,
  "bound": true
}
```

### 校验失败

```json
{
  "success": false,
  "message": "许可证无效"
}
```

## 错误码

| 状态码 | 错误码 | 说明 |
|--------|--------|------|
| 200 | SUCCESS | 校验成功 |
| 400 | INVALID\_PARAMETERS | 参数无效 |
| 400 | LICENSE\_INVALID | 许可证无效 |
| 403 | LICENSE\_DISABLED | 许可证已禁用 |
| 403 | HARDWARE\_MISMATCH | 硬件信息不匹配 |
| 400 | UNSUPPORTED\_SYSTEM | 不支持的系统 |
| 400 | UNSUPPORTED\_VERSION | 不支持的 SDK 版本 |

## 实现细节

1. 解析请求参数
2. 验证 system、sdkVersion、licenseKey 是否有效
3. 根据 system 路由到对应平台处理器
4. 查询对应平台的许可证表
5. 验证许可证状态（active/disabled）
6. 如已绑定，验证硬件信息匹配
7. 如未绑定，绑定当前设备
8. 更新 lastUsedAt
9. 记录校验日志到 verify\_logs 表

## 平台处理器

| 平台 | 处理器路径 |
|------|-----------|
| Windows | src/vertify/windows/0.0.1.ts |
| macOS | src/vertify/macos/0.0.1.ts |
| Linux | src/vertify/linux/0.0.1.ts |
| Android | src/vertify/android/0.0.1.ts |
| iOS | src/vertify/ios/0.0.1.ts |
| HarmonyOS | src/vertify/harmonyos/0.0.1.ts |
