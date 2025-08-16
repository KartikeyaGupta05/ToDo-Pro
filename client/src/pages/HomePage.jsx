import React from 'react'
import { Link } from 'react-router-dom';
import { Home, Calendar, PlusCircle, ListTodo, CheckCircle } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Welcome to the Todo App</h1>
        <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
          {/* Profile image placeholder */}
          <Link to="/profile">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Illustration placeholder */}
        <div className="w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
          <span className="text-gray-500">[ Illustration ]</span>
        </div>

        <p className="text-lg font-medium">
          What do you want to do today?
        </p>
        <p className="text-gray-400 text-sm">Tap + to add your tasks</p>
      </main>

      {/* Footer Navigation */}
      <nav className="flex justify-around items-center bg-gray-900 py-3">
        <button className="flex flex-col items-center text-gray-400 hover:text-white">
          <Home size={22} />
          <span className="text-xs">Home</span>
        </button>

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
  )
}

export default HomePage
