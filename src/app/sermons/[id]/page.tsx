import React from 'react'

// 动态路由页面，params.id 就是 sermon 的 id
export default async function SermonDetailPage({ params }: { params: { id: string } }) {
  // 获取 sermon 详情
  const res = await fetch(`http://localhost:3000/api/sermons/${params.id}`, { cache: 'no-store' })
  const sermon = await res.json()

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{sermon.title}</h1>
      <div className="text-gray-500 mb-2">
        {sermon.speaker} | {sermon.date}
      </div>
      {/* 这里可以用 renderRichText(sermon.content) 或其它渲染方式 */}
      <div>{/* sermon 内容渲染 */}</div>
    </div>
  )
}
