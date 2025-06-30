// 云存储配置
export interface CloudStorageConfig {
  provider: 'aliyun' | 'tencent' | 'aws' | 'qiniu'
  region: string
  bucket: string
  accessKeyId: string
  accessKeySecret: string
  domain: string // CDN 域名
}

// 云存储服务配置
export const cloudStorageConfig: CloudStorageConfig = {
  provider: 'aliyun', // 默认使用阿里云
  region: process.env.CLOUD_STORAGE_REGION || 'cn-hangzhou',
  bucket: process.env.CLOUD_STORAGE_BUCKET || '',
  accessKeyId: process.env.CLOUD_STORAGE_ACCESS_KEY_ID || '',
  accessKeySecret: process.env.CLOUD_STORAGE_ACCESS_KEY_SECRET || '',
  domain: process.env.CLOUD_STORAGE_DOMAIN || '',
}

// 文件类型配置
export const fileTypes = {
  audio: {
    allowedExtensions: ['.mp3', '.wav', '.ogg', '.m4a', '.aac'],
    maxSize: 500 * 1024 * 1024, // 500MB
    mimeTypes: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4', 'audio/aac'],
  },
  video: {
    allowedExtensions: ['.mp4', '.webm', '.ogg', '.avi', '.mov'],
    maxSize: 2 * 1024 * 1024 * 1024, // 2GB
    mimeTypes: ['video/mp4', 'video/webm', 'video/ogg', 'video/avi', 'video/quicktime'],
  },
  image: {
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
    maxSize: 10 * 1024 * 1024, // 10MB
    mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  },
}

// 生成文件路径
export function generateFilePath(type: 'audio' | 'video' | 'image', filename: string): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${type}/${year}/${month}/${day}/${filename}`
}

// 验证文件类型
export function validateFileType(type: 'audio' | 'video' | 'image', filename: string): boolean {
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'))
  return fileTypes[type].allowedExtensions.includes(extension)
}

// 获取完整的文件URL
export function getFileUrl(path: string): string {
  if (!cloudStorageConfig.domain) {
    throw new Error('Cloud storage domain not configured')
  }
  return `https://${cloudStorageConfig.domain}/${path}`
}
