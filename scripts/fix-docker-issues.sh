#!/bin/bash

echo "🔧 Docker 问题快速修复脚本"
echo "=========================="

# 停止所有容器
echo "1. 停止所有容器..."
docker-compose down

# 清理现有数据
echo "2. 清理现有数据..."
rm -rf postgres

# 重新创建数据目录
echo "3. 重新创建数据目录..."
mkdir -p postgres

# 清理Docker卷（如果存在）
echo "4. 清理Docker卷..."
docker volume rm payload-cms-harbor-lutheran_postgres_data 2>/dev/null || true

# 重新启动
echo "5. 重新启动容器..."
docker-compose up -d

# 等待数据库启动
echo "6. 等待数据库启动..."
sleep 10

# 检查容器状态
echo "7. 检查容器状态..."
docker ps

# 测试数据库连接
echo "8. 测试数据库连接..."
docker-compose exec db psql -U cms -d cms -c "SELECT version();" 2>/dev/null && {
    echo "✅ 数据库连接成功！"
} || {
    echo "❌ 数据库连接失败，请检查日志："
    docker-compose logs db
}

echo "🎉 修复完成！" 