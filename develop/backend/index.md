---
url: /develop/backend/index.md
---
## 简介

后端的代码全都是运行在==cloudflare worker==环境下的，近似于浏览器环境

::: table full-width

| Cloudflare存储 | 特性           | 类似于        |
| -------------- | -------------- | ------------- |
| D1             | 关系型数据库   | MySQL、SQLite |
| KV             | 键值对数据库   | Redis         |
| R2             | 对象存储数据库 | Minio         |

:::

## 环境变量

这里的环境变量可以在==wrangler.jsonc==中进行定义，在执行==wrangler deploy==的时候，会自动将==wrangler.jsonc==中的变量值上传至该项目对应的worker中去。

## 完整的配置文件

后端绑定的数据库和环境变量都要在自己的==wrangler.jsonc==中进行赋值

::: code-tabs

@tab wrangler.jsonc

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "authgenie",
  "main": "src/index.ts",
  "compatibility_date": "2025-12-03"
  // "compatibility_flags": [
  //   "nodejs_compat"
  // ],
  // "vars": {
  //   "MY_VAR": "my-variable"
  // },
  // "kv_namespaces": [
  //   {
  //     "binding": "MY_KV_NAMESPACE",
  //     "id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  //   }
  // ],
  // "r2_buckets": [
  //   {
  //     "binding": "MY_BUCKET",
  //     "bucket_name": "my-bucket"
  //   }
  // ],
  // "d1_databases": [
  //   {
  //     "binding": "MY_DB",
  //     "database_name": "my-database",
  //     "database_id": ""
  //   }
  // ],
  // "ai": {
  //   "binding": "AI"
  // },
  // "observability": {
  //   "enabled": true,
  //   "head_sampling_rate": 1
  // }
}
```

:::
