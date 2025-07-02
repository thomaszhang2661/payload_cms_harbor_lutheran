'use client'

// import React from 'react'

// const sermons = [
//   {
//     title: 'The True Meaning of Love',
//     scripture: '1 John 4:7-21',
//     speaker: 'Pastor Zhang',
//     date: '2024-01-15',
//     summary: 'Exploring the biblical meaning of love and how to live it out.',
//   },
//   {
//     title: 'The Power of Faith',
//     scripture: 'Hebrews 11:1-6',
//     speaker: 'Pastor Li',
//     date: '2024-01-08',
//     summary: 'A message on the importance and strength of faith in our lives.',
//   },
//   {
//     title: 'A Heart of Gratitude',
//     scripture: 'Psalm 100:1-5',
//     speaker: 'Pastor Wang',
//     date: '2024-01-01',
//     summary: 'Learning to give thanks in all circumstances.',
//   },
// ]

// export default function SermonsPage() {
//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold mb-8">Sermons</h1>
//       <div className="grid gap-6 md:grid-cols-2">
//         {sermons.map((sermon, idx) => (
//           <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
//             <h2 className="text-xl font-semibold mb-2">{sermon.title}</h2>
//             <div className="text-gray-600 text-sm mb-1">{sermon.scripture}</div>
//             <div className="text-gray-500 text-xs mb-2">
//               {sermon.speaker} | {sermon.date}
//             </div>
//             <p className="text-gray-700 flex-1">{sermon.summary}</p>
//             <div className="mt-4 flex space-x-2">
//               <button className="text-blue-600 hover:underline text-sm">Read</button>
//               <button className="text-green-600 hover:underline text-sm">Listen</button>
//               <button className="text-red-600 hover:underline text-sm">Watch</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// src/app/sermons/page.tsx
import React, { useState } from 'react'
import Link from 'next/link'

function SermonsList({ sermons }: { sermons: any[] }) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'desc' | 'asc'>('desc')

  // 搜索和排序
  const filtered = sermons
    .filter((s) => s.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === 'desc'
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime(),
    )

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Sermons</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as 'desc' | 'asc')}
          className="border rounded px-2 py-1"
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>
      <ul>
        {filtered.map((sermon) => (
          <li key={sermon.id} className="mb-3">
            <Link
              href={`/sermons/${sermon.id}`}
              className="text-blue-600 hover:underline text-lg font-medium"
            >
              {sermon.title}
            </Link>
            <span className="ml-2 text-gray-500 text-sm">
              {sermon.speaker} | {sermon.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function SermonsPage() {
  // 服务端获取 sermons 数据
  const res = await fetch('http://localhost:3000/api/sermons', { cache: 'no-store' })
  const { docs: sermons } = await res.json()

  return <SermonsList sermons={sermons} />
}
