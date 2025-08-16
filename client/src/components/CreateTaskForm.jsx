import React, { useState } from "react";

const CreateTaskForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Floating + Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        +
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-11/12 max-w-md p-6 shadow-xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Create Task
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  placeholder="Enter task title"
                  className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  placeholder="Enter task description"
                  className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Status</label>
                <select className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none">
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Priority</label>
                <select className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Due Date</label>
                <input
                  type="date"
                  className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Save Task
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTaskForm;
