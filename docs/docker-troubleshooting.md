# Docker 故障排除指南

## 常见问题及解决方案

### 1. 文件共享错误 (Mounts denied)

**错误信息：**

```
Error response from daemon: Mounts denied:
The path /Users/zhangjian/vscode/payload-cms-harbor-lutheran/postgres is not shared from the host and is not known to Docker.
```

**解决方案：**

#### 方法1：配置Docker Desktop文件共享

1. 打开 Docker Desktop
2. 点击右上角设置图标 (⚙️)
3. 选择 "Resources" → "File Sharing"
4. 点击 "+" 添加以下路径：
   - `/Users/zhangjian/vscode/payload-cms-harbor-lutheran`
   - 或者添加整个用户目录：`/Users/zhangjian`
5. 点击 "Apply & Restart"

#### 方法2：使用相对路径（推荐）

修改 `docker-compose.yml` 文件，使用相对路径：

```yaml
volumes:
  - ./postgres:/var/lib/postgresql/data
```

#### 方法3：使用Docker命名卷

修改 `docker-compose.yml` 文件：

```yaml
volumes:
  - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 2. 端口冲突

**错误信息：**

```
Error starting userland proxy: listen tcp 0.0.0.0:3017: bind: address already in use
```

**解决方案：**

1. 检查端口占用：

```bash
lsof -i :3017
```

2. 修改 `docker-compose.yml` 中的端口映射：

```yaml
ports:
  - 3018:5432 # 使用其他端口
```

3. 更新 `.env` 文件中的连接字符串：

```env
DATABASE_URI=postgresql://cms:Sun4Love@localhost:3018/cms
```

### 3. 权限问题

**错误信息：**

```
FATAL: data directory "/var/lib/postgresql/data" has wrong ownership
```

**解决方案：**

1. 清理现有数据：

```bash
npm run docker:clean
```

2. 重新启动容器：

```bash
npm run docker:up
```

### 4. 容器无法启动

**检查步骤：**

1. 查看容器日志：

```bash
npm run docker:logs
```

2. 检查Docker服务状态：

```bash
docker info
```

3. 重启Docker Desktop

### 5. 数据库连接失败

**检查步骤：**

1. 确认容器正在运行：

```bash
docker ps
```

2. 测试数据库连接：

```bash
docker-compose exec db psql -U cms -d cms -c "SELECT version();"
```

3. 检查环境变量：

```bash
echo $DATABASE_URI
```

## 快速修复脚本

运行以下命令来自动修复常见问题：

```bash
# 停止所有容器
docker-compose down

# 清理数据
rm -rf postgres

# 重新创建数据目录
mkdir -p postgres

# 重新启动
docker-compose up -d
```

## 联系支持

如果问题仍然存在，请：

1. 检查 Docker Desktop 版本
2. 查看完整的错误日志
3. 确认系统权限设置
