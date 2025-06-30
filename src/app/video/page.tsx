import React from 'react'

const videos = [
  {
    title: 'The True Meaning of Love',
    speaker: 'Pastor Zhang',
    date: '2024-01-15',
    duration: '45:30',
    url: '#',
  },
  {
    title: 'A Heart of Gratitude',
    speaker: 'Pastor Wang',
    date: '2024-01-01',
    duration: '40:10',
    url: '#',
  },
]

export default function VideoPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Video Resources</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((video, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <div className="text-gray-600 text-sm mb-1">{video.speaker}</div>
            <div className="text-gray-500 text-xs mb-2">
              {video.date} | {video.duration}
            </div>
            <video controls className="w-full mt-2">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  )
}
