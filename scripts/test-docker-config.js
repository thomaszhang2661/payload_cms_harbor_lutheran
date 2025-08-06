#!/usr/bin/env node

/**
 * Docker 配置测试脚本
 * 用于验证 docker-compose.yml 配置是否正确
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔍 检查 Docker 配置...\n');

// 检查 docker-compose.yml 文件
if (fs.existsSync('./docker-compose.yml')) {
  console.log('✅ docker-compose.yml 文件存在');
} else {
  console.log('❌ docker-compose.yml 文件不存在');
  process.exit(1);
}

// 检查 postgres 目录
if (fs.existsSync('./postgres')) {
  console.log('✅ postgres 数据目录存在');
} else {
  console.log('❌ postgres 数据目录不存在');
  process.exit(1);
}

// 检查 Docker 是否运行
try {
  execSync('docker --version', { stdio: 'pipe' });
  console.log('✅ Docker 已安装');
} catch (error) {
  console.log('❌ Docker 未安装或无法访问');
  console.log('请确保 Docker Desktop 已启动');
  process.exit(1);
}

// 检查 docker-compose 配置
try {
  execSync('docker-compose config', { stdio: 'pipe' });
  console.log('✅ docker-compose.yml 配置有效');
} catch (error) {
  console.log('❌ docker-compose.yml 配置有误');
  console.log('错误信息:', error.message);
  process.exit(1);
}

console.log('\n🎉 Docker 配置检查完成！');
console.log('\n📋 下一步操作：');
console.log('1. 确保 Docker Desktop 已启动');
console.log('2. 运行: npm run docker:up');
console.log('3. 创建 .env 文件并配置数据库连接');
console.log('4. 运行: npm run dev'); 