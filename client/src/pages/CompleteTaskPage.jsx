import React from "react";
import {Link} from "react-router-dom";
import { Home, Calendar, PlusCircle, ListTodo, CheckCircle, Trash2, CheckCircle2 } from "lucide-react";

const CompleteTaskPage = () => {
  const tasks = [
      { id: 1, title: "Finish UI design", date: "2025-08-16" },
      { id: 2, title: "Submit project report", date: "2025-08-18" },
      { id: 3, title: "Prepare for presentation", date: "2025-08-20" },
    ];
    return (
      <div className="flex flex-col h-screen bg-black text-white">
        {/* Header */}
        <header className="flex justify-center items-center px-4 py-3 border-b border-gray-800">
          <h1 className="text-lg font-semibold flex items-center gap-2">
            <CheckCircle size={20} /> Complete Tasks
          </h1>
        </header>
  
        {/* Task List */}
        <main className="flex-1 overflow-y-auto p-4">
          {tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ListTodo size={48} className="mb-3" />
              <p>No pending tasks</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="bg-gray-900 rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <span className="text-gray-500 text-sm">{task.date}</span>
                  </div>
                  <div className="flex gap-3">
                    {/* Mark as complete */}
                    <button className="text-green-500 hover:text-green-400">
                      <CheckCircle2 size={20} />
                    </button>
                    {/* Delete */}
                    <button className="text-red-500 hover:text-red-400">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>
        {/* Footer Navigation */}
              <nav className="flex justify-around items-center bg-gray-900 py-3">
                <Link to="/home" className="flex flex-col items-center text-gray-400 hover:text-white">
                  <Home size={22} />
                  <span className="text-xs">Home</span>
                </Link>

                <Link to="/calendar" className="flex flex-col items-center text-gray-400 hover:text-white">
                  <Calendar size={22} />
                  <span className="text-xs">Calendar</span>
                </Link>

                {/* Center Add Button */}
                <button className="bg-indigo-500 rounded-full p-3 -mt-8 shadow-lg hover:bg-indigo-600">
                  <PlusCircle size={28} className="text-white" />
                </button>
        
                <Link to="/pending-tasks" className="flex flex-col items-center text-gray-400 hover:text-white">
                  <ListTodo size={22} />
                  <span className="text-xs">Pending</span>
                </Link>
        
                <Link to="/completed-tasks" className="flex flex-col items-center text-gray-400 hover:text-white">
                  <CheckCircle size={22} />
                  <span className="text-xs">Completed</span>
                </Link>
              </nav>
      </div>
    );
  }

export default CompleteTaskPage
