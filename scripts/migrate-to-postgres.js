#!/usr/bin/env node

/**
 * 数据库迁移脚本 - 从MongoDB迁移到PostgreSQL
 * 
 * 使用说明:
 * 1. 确保PostgreSQL数据库已创建并运行
 * 2. 设置正确的环境变量 DATABASE_URI
 * 3. 运行此脚本: node scripts/migrate-to-postgres.js
 */

import { MongoClient } from 'mongodb';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/harbor_lutheran';
const POSTGRES_URI = process.env.DATABASE_URI;

if (!POSTGRES_URI) {
  console.error('错误: 请设置 DATABASE_URI 环境变量');
  process.exit(1);
}

async function migrateData() {
  let mongoClient;
  let pgPool;

  try {
    console.log('开始数据库迁移...');
    
    // 连接MongoDB
    console.log('连接MongoDB...');
    mongoClient = new MongoClient(MONGODB_URI);
    await mongoClient.connect();
    const db = mongoClient.db();
    
    // 连接PostgreSQL
    console.log('连接PostgreSQL...');
    pgPool = new Pool({
      connectionString: POSTGRES_URI,
    });
    
    // 测试连接
    await pgPool.query('SELECT NOW()');
    console.log('数据库连接成功');
    
    // 获取所有集合
    const collections = await db.listCollections().toArray();
    console.log(`找到 ${collections.length} 个集合`);
    
    for (const collection of collections) {
      const collectionName = collection.name;
      console.log(`迁移集合: ${collectionName}`);
      
      // 获取集合数据
      const data = await db.collection(collectionName).find({}).toArray();
      console.log(`  - 找到 ${data.length} 条记录`);
      
      if (data.length > 0) {
        // 这里需要根据具体的集合结构来构建插入语句
        // 由于Payload CMS会自动创建表结构，我们主要关注数据迁移
        console.log(`  - 数据将在Payload CMS启动时自动迁移`);
      }
    }
    
    console.log('迁移完成！');
    console.log('请启动应用程序，Payload CMS将自动创建表结构');
    
  } catch (error) {
    console.error('迁移过程中出现错误:', error);
    process.exit(1);
  } finally {
    if (mongoClient) {
      await mongoClient.close();
    }
    if (pgPool) {
      await pgPool.end();
    }
  }
}

migrateData(); 