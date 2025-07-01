import React from 'react'

function TodaysDiet() {
   const dietPlan = [
    { time: "8:00 AM", item: "Oats with fruits & milk" },
    { time: "12:30 PM", item: "Boiled rice, dal, mixed veg curry" },
    { time: "4:00 PM", item: "Fruit juice or protein shake" },
    { time: "7:30 PM", item: "Khichdi and curd" },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md">
      <h2 className="text-lg font-bold mb-2">Today's Diet Plan</h2>
      <ul className="text-sm text-gray-700 space-y-2">
        {dietPlan.map((meal, index) => (
          <li key={index} className="flex justify-between border-b pb-1">
            <span className="font-medium">{meal.time}</span>
            <span>{meal.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodaysDiet
