
import React, { useState } from "react";

const GamifiedTask = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Walk 1000 steps", completed: false },
    { id: 2, title: "Drink 2L water", completed: true },
    { id: 3, title: "Do breathing exercises", completed: false },
  ]);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md">
      <h2 className="text-lg font-bold mb-3">Gamified Recovery Tasks</h2>
      <ul className="space-y-2 text-sm text-gray-800">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-2 rounded-lg border ${
              task.completed ? "bg-green-100 border-green-300" : "bg-yellow-50 border-yellow-200"
            }`}
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="accent-green-500 w-4 h-4"
              />
              <span>{task.title}</span>
            </label>
            <span className={`text-xs font-medium ${
              task.completed ? "text-green-600" : "text-yellow-600"
            }`}>
              {task.completed ? "Completed" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamifiedTask;
