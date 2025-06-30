import React from 'react'

const seriesList = [
  {
    title: 'Love Series',
    description: 'A series about the biblical meaning of love.',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    isActive: true,
  },
  {
    title: 'Faith Series',
    description: 'Exploring the power and importance of faith.',
    startDate: '2024-02-01',
    endDate: '2024-02-28',
    isActive: false,
  },
]

export default function SeriesPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Sermon Series</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {seriesList.map((series, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{series.title}</h2>
            <div className="text-gray-600 text-sm mb-1">{series.description}</div>
            <div className="text-gray-500 text-xs mb-2">
              {series.startDate} ~ {series.endDate}
            </div>
            <span
              className={`inline-block px-2 py-1 rounded text-xs ${series.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}
            >
              {series.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
