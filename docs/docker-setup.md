# Docker PostgreSQL 设置指南

## 概述

本项目使用Docker来运行PostgreSQL数据库，确保开发环境的一致性和便携性。

## 快速开始

### 1. 启动数据库服务

> 💡 **提示**: 如果遇到文件共享错误，请运行 `npm run docker:fix` 自动修复

```bash
# 启动PostgreSQL容器
npm run docker:up

# 或者直接使用docker-compose
docker-compose up -d
```

### 2. 配置环境变量

创建 `.env` 文件：

```env
# Docker PostgreSQL 数据库配置
DATABASE_URI=postgresql://cms:Sun4Love@localhost:3017/cms

# Payload CMS 配置
PAYLOAD_SECRET=your-secret-key-here

# Node 选项
NODE_OPTIONS="--no-deprecation"
```

### 3. 启动应用程序

```bash
npm run dev
```

## Docker 命令

### 数据库管理

```bash
# 启动数据库服务
npm run docker:up

# 停止数据库服务
npm run docker:down

# 重启数据库服务
npm run docker:restart

# 查看数据库日志
npm run docker:logs

# 清理数据库（删除所有数据）
npm run docker:clean
```

### 直接使用 docker-compose

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 查看日志
docker-compose logs -f db

# 进入数据库容器
docker-compose exec db psql -U cms -d cms

# 备份数据库
docker-compose exec db pg_dump -U cms cms > backup.sql

# 恢复数据库
docker-compose exec -T db psql -U cms -d cms < backup.sql
```

## 数据库连接信息

- **主机**: localhost
- **端口**: 3017 (避免与本地PostgreSQL冲突)
- **数据库**: cms
- **用户名**: cms
- **密码**: Sun4Love
- **连接字符串**: `postgresql://cms:Sun4Love@localhost:3017/cms`

## 数据持久化

数据库数据存储在Docker命名卷 `postgres_data` 中，确保数据持久化且避免文件共享问题。

## 健康检查

Docker Compose配置包含健康检查，确保数据库服务正常运行：

```yaml
healthcheck:
  test: ['CMD-SHELL', 'pg_isready -U cms -d cms']
  interval: 10s
  timeout: 5s
  retries: 5
```

## 故障排除

### 端口冲突

如果3017端口被占用，可以修改 `docker-compose.yml` 中的端口映射：

```yaml
ports:
  - 3018:5432 # 改为其他端口
```

然后更新 `.env` 文件中的连接字符串：

```env
DATABASE_URI=postgresql://cms:Sun4Love@localhost:3018/cms
```

### 容器无法启动

1. 检查Docker是否运行
2. 检查端口是否被占用
3. 查看容器日志：`npm run docker:logs`

### 数据丢失

如果数据丢失，可以：

1. 检查Docker卷是否存在：`docker volume ls`
2. 确认Docker卷挂载正确
3. 查看容器日志排查问题
4. 运行修复脚本：`npm run docker:fix`

## 生产环境

在生产环境中，建议：

1. 使用环境变量而不是硬编码密码
2. 配置适当的备份策略
3. 使用外部PostgreSQL服务而不是Docker容器
4. 启用SSL连接

## 迁移现有数据

如果您有现有的MongoDB数据需要迁移到Docker PostgreSQL：

1. 启动Docker数据库：`npm run docker:up`
2. 配置环境变量
3. 运行迁移脚本：`npm run migrate:to-postgres`
