import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 mb-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
            Harbor Lutheran Church
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-4">
            港湾路德教会 Resource Management System
          </p>
          <Link
            href="/admin"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 hover:text-blue-900 transition-colors"
          >
            Admin Panel
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white/80 rounded-xl shadow-md p-6 mb-10 border border-blue-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Search Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search sermon titles, scriptures, or content..."
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Speaker</option>
              <option value="all">All Speakers</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Series</option>
              <option value="all">All Series</option>
            </select>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <Link
            href="/sermons"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-blue-100 group"
          >
            <div className="text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Sermons</h3>
              <p className="text-gray-600 text-sm">View all sermons</p>
            </div>
          </Link>

          <Link
            href="/audio"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-green-100 group"
          >
            <div className="text-center">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Audio</h3>
              <p className="text-gray-600 text-sm">Listen to sermon audio</p>
            </div>
          </Link>

          <Link
            href="/video"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-red-100 group"
          >
            <div className="text-center">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <svg
                  className="w-7 h-7 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Video</h3>
              <p className="text-gray-600 text-sm">Watch sermon videos</p>
            </div>
          </Link>

          <Link
            href="/series"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-purple-100 group"
          >
            <div className="text-center">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg
                  className="w-7 h-7 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Series</h3>
              <p className="text-gray-600 text-sm">Browse sermon series</p>
            </div>
          </Link>
        </div>

        {/* Church Management Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <Link
            href="/ministry-plans"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-indigo-100 group"
          >
            <div className="text-center">
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <svg
                  className="w-7 h-7 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Ministry Plans</h3>
              <p className="text-gray-600 text-sm">View church ministry arrangements</p>
            </div>
          </Link>

          <Link
            href="/news"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-yellow-100 group"
          >
            <div className="text-center">
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <svg
                  className="w-7 h-7 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Church News</h3>
              <p className="text-gray-600 text-sm">Latest church updates</p>
            </div>
          </Link>

          <Link
            href="/meetings"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-teal-100 group"
          >
            <div className="text-center">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <svg
                  className="w-7 h-7 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Meeting Minutes</h3>
              <p className="text-gray-600 text-sm">View meeting records</p>
            </div>
          </Link>
        </div>

        {/* Recent Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Recent Sermons */}
          <div className="bg-white/90 rounded-xl shadow-md p-6 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest Sermons</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900">The True Meaning of Love</h3>
                <p className="text-gray-600 text-sm">1 John 4:7-21 | Pastor Zhang | Jan 15, 2024</p>
                <div className="flex space-x-4 mt-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Read</button>
                  <button className="text-green-600 hover:text-green-800 text-sm">Listen</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Watch</button>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900">The Power of Faith</h3>
                <p className="text-gray-600 text-sm">Hebrews 11:1-6 | Pastor Li | Jan 8, 2024</p>
                <div className="flex space-x-4 mt-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Read</button>
                  <button className="text-green-600 hover:text-green-800 text-sm">Listen</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Watch</button>
                </div>
              </div>

              <div className="pb-4">
                <h3 className="text-lg font-medium text-gray-900">A Heart of Gratitude</h3>
                <p className="text-gray-600 text-sm">Psalm 100:1-5 | Pastor Wang | Jan 1, 2024</p>
                <div className="flex space-x-4 mt-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Read</button>
                  <button className="text-green-600 hover:text-green-800 text-sm">Listen</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Watch</button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent News */}
          <div className="bg-white/90 rounded-xl shadow-md p-6 border border-yellow-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest Updates</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Announcement
                  </span>
                  <span className="text-gray-500 text-sm">Jan 20, 2024</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  2024 Church Annual Plan Released
                </h3>
                <p className="text-gray-600 text-sm">
                  For the new year, we have developed detailed ministry plans including worship,
                  education, mission, and more...
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Event
                  </span>
                  <span className="text-gray-500 text-sm">Jan 18, 2024</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Youth Fellowship Outdoor Activity
                </h3>
                <p className="text-gray-600 text-sm">
                  This weekend, the youth fellowship will organize an outdoor activity. All young
                  friends are welcome to join...
                </p>
              </div>

              <div className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                    Ministry
                  </span>
                  <span className="text-gray-500 text-sm">Jan 16, 2024</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  New Children&#39;s Sunday School Curriculum
                </h3>
                <p className="text-gray-600 text-sm">
                  Children&#39;s Sunday School will begin a new curriculum system to help children
                  better learn the Bible...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Harbor Lutheran Church. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2">
              Harbor Lutheran Church Resource Management System
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
