import React from 'react'

const audios = [
  {
    title: 'Love One Another',
    speaker: 'Pastor Zhang',
    date: '2024-01-15',
    duration: '45:30',
    url: '#',
  },
  {
    title: 'Faith That Moves Mountains',
    speaker: 'Pastor Li',
    date: '2024-01-08',
    duration: '38:20',
    url: '#',
  },
]

export default function AudioPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Audio Resources</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {audios.map((audio, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{audio.title}</h2>
            <div className="text-gray-600 text-sm mb-1">{audio.speaker}</div>
            <div className="text-gray-500 text-xs mb-2">
              {audio.date} | {audio.duration}
            </div>
            <audio controls className="w-full mt-2">
              <source src={audio.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  )
}
