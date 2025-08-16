const taskModel = require('../models/task.model');
const taskService = require('../services/task.service');
const { validationResult } = require("express-validator"); // Import validation result handler
const authMiddleware = require('../middlewares/auth.middleware'); // Import the authentication middleware

module.exports.create = async (req, res, next) => {
  const errors = validationResult(req); // Get validation errors from the request

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // If there are validation errors, return them
  }
  const { title, description, status, priority, dueDate } = req.body; // Destructure the request body to get task details

  const userId = req.user._id; // Get the user ID from the request

  try {
    const newTask = await taskService.createTask({
      title,
      description,
      status,
      priority,
      dueDate,
      userId // Attach the user ID from the request
    });
    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: newTask,
    });
  } catch (err) {
    return next(err); // Pass any errors to the error handler
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  try {
    // Get tasks only for the logged-in user
    const tasks = await taskService.getTasksByUserId(req.user._id);

    return res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.getTaskById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await taskService.getTaskById(id, req.user._id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Task fetched successfully",
      data: task,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, status, priority, dueDate } = req.body;

  try {
    const updatedTask = await taskService.updateTask(id, req.user._id, {
      title,
      description,
      status,
      priority,
      dueDate
    });
    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedTask = await taskService.deleteTask(id, req.user._id);
    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (err) {
    return next(err);
  }
};
