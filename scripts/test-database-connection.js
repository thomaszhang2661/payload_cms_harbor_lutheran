#!/usr/bin/env node

/**
 * 数据库连接测试脚本
 * 用于验证PostgreSQL数据库连接是否正常
 */

import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const DATABASE_URI = process.env.DATABASE_URI

if (!DATABASE_URI) {
  console.error('❌ 错误: 未设置 DATABASE_URI 环境变量')
  console.log('请创建 .env 文件并设置:')
  console.log('DATABASE_URI=postgresql://cms:Sun4Love@localhost:3017/cms')
  process.exit(1)
}

async function testConnection() {
  const pool = new Pool({
    connectionString: DATABASE_URI,
  })

  try {
    console.log('🔍 测试数据库连接...')
    console.log(`连接字符串: ${DATABASE_URI.replace(/:[^:@]*@/, ':****@')}`)

    // 测试连接
    const client = await pool.connect()
    console.log('✅ 数据库连接成功！')

    // 获取PostgreSQL版本
    const result = await client.query('SELECT version()')
    console.log(`📊 PostgreSQL版本: ${result.rows[0].version.split(',')[0]}`)

    // 获取数据库信息
    const dbResult = await client.query('SELECT current_database(), current_user')
    console.log(`🗄️  当前数据库: ${dbResult.rows[0].current_database}`)
    console.log(`👤 当前用户: ${dbResult.rows[0].current_user}`)

    client.release()

    console.log('\n🎉 数据库连接测试完成！')
    console.log('现在可以启动应用程序: npm run dev')
  } catch (error) {
    console.error('❌ 数据库连接失败:', error.message)
    console.log('\n🔧 可能的解决方案:')
    console.log('1. 确保Docker容器正在运行: npm run docker:up')
    console.log('2. 检查端口3017是否被占用')
    console.log('3. 运行修复脚本: npm run docker:fix')
    process.exit(1)
  } finally {
    await pool.end()
  }
}

testConnection()
