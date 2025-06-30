import React from 'react'

const meetings = [
  {
    title: 'Deacon Board Meeting',
    type: 'Deacon Board',
    date: '2024-01-10',
    summary: 'Discussed annual budget and ministry plans.',
  },
  {
    title: 'Youth Ministry Meeting',
    type: 'Ministry Meeting',
    date: '2024-01-05',
    summary: 'Planned upcoming youth fellowship activities.',
  },
]

export default function MeetingsPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Meeting Minutes</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{meeting.title}</h2>
            <div className="text-gray-600 text-sm mb-1">{meeting.type}</div>
            <div className="text-gray-500 text-xs mb-2">{meeting.date}</div>
            <p className="text-gray-700 flex-1">{meeting.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
