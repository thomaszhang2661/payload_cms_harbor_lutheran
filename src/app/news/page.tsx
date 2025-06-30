import React from 'react'

const newsList = [
  {
    title: '2024 Church Annual Plan Released',
    category: 'Announcement',
    date: '2024-01-20',
    summary:
      'For the new year, we have developed detailed ministry plans including worship, education, mission, and more.',
  },
  {
    title: 'Youth Fellowship Outdoor Activity',
    category: 'Event',
    date: '2024-01-18',
    summary:
      'This weekend, the youth fellowship will organize an outdoor activity. All young friends are welcome to join.',
  },
]

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Church News</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {newsList.map((news, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
            <div className="text-gray-600 text-sm mb-1">{news.category}</div>
            <div className="text-gray-500 text-xs mb-2">{news.date}</div>
            <p className="text-gray-700 flex-1">{news.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
