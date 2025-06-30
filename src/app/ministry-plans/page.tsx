import React from 'react';

const plans = [
  {
    title: 'Worship Ministry Plan',
    ministry: 'Worship Ministry',
    leader: 'Pastor Zhang',
    startDate: '2024-01-01',
    endDate: '2024-06-30',
    status: 'In Progress'
  },
  {
    title: 'Youth Ministry Plan',
    ministry: 'Youth Ministry',
    leader: 'Pastor Li',
    startDate: '2024-02-01',
    endDate: '2024-12-31',
    status: 'Planning'
  }
];

export default function MinistryPlansPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Ministry Plans</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <div className="text-gray-600 text-sm mb-1">{plan.ministry}</div>
            <div className="text-gray-500 text-xs mb-2">Leader: {plan.leader}</div>
            <div className="text-gray-500 text-xs mb-2">{plan.startDate} ~ {plan.endDate}</div>
            <span className={`inline-block px-2 py-1 rounded text-xs ${plan.status === 'In Progress' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{plan.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 