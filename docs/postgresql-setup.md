# PostgreSQL 数据库设置指南

## 1. 安装 PostgreSQL

### macOS (使用 Homebrew)
```bash
brew install postgresql
brew services start postgresql
```

### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Windows
从 [PostgreSQL 官网](https://www.postgresql.org/download/windows/) 下载安装包

## 2. 创建数据库和用户

```bash
# 连接到 PostgreSQL
psql -U postgres

# 创建数据库
CREATE DATABASE harbor_lutheran_db;

# 创建用户（可选）
CREATE USER harbor_user WITH PASSWORD 'your_password';

# 授权
GRANT ALL PRIVILEGES ON DATABASE harbor_lutheran_db TO harbor_user;

# 退出
\q
```

## 3. 配置环境变量

创建 `.env` 文件：

```env
# PostgreSQL 连接字符串
DATABASE_URI=postgresql://username:password@localhost:5432/harbor_lutheran_db

# Payload CMS 密钥
PAYLOAD_SECRET=your-secret-key-here

# Node 选项
NODE_OPTIONS="--no-deprecation"
```

## 4. 数据库连接字符串格式

```
postgresql://username:password@host:port/database_name
```

示例：
- 本地开发：`postgresql://postgres:password@localhost:5432/harbor_lutheran_db`
- 生产环境：`postgresql://user:pass@your-server.com:5432/harbor_lutheran_db`

## 5. 从 MongoDB 迁移数据

如果您有现有的 MongoDB 数据需要迁移：

1. 设置 MongoDB 连接字符串：
```env
MONGODB_URI=mongodb://localhost:27017/your_mongodb_database
```

2. 运行迁移脚本：
```bash
node scripts/migrate-to-postgres.js
```

## 6. 启动应用程序

```bash
npm run dev
```

Payload CMS 将自动创建所需的表结构。

## 7. 验证安装

访问 http://localhost:3000/admin 确认应用程序正常运行。

## 常见问题

### 连接被拒绝
- 检查 PostgreSQL 服务是否运行
- 确认端口号（默认 5432）
- 检查防火墙设置

### 认证失败
- 确认用户名和密码正确
- 检查用户权限设置

### 数据库不存在
- 确认数据库名称正确
- 检查数据库是否已创建

## 生产环境注意事项

1. **安全性**
   - 使用强密码
   - 限制数据库访问权限
   - 启用 SSL 连接

2. **性能**
   - 配置适当的连接池大小
   - 定期维护数据库
   - 监控查询性能

3. **备份**
   - 设置定期备份策略
   - 测试恢复流程 