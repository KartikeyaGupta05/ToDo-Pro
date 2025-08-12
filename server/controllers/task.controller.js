const taskModel = require('../models/task.model');
const taskService = require('../services/task.service');
const { validationResult } = require("express-validator"); // Import validation result handler

module.exports.createTask = async (req, res, next) => {
  const error = validationResult(req); // Get validation errors from the request

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() }); // If there are validation errors, return them
  }
  const { title, description, status, priority, dueDate } = req.body; // Destructure the request body to get task details

  try {
    const newTask = await taskService.createTask({
      title,
      description,
      status,
      priority,
      dueDate,
      userId: req.user.id, // Attach the user ID from the request
    });
    return res.status(201).json(newTask); // Return the created task
  } catch (err) {
    return next(err); // Pass any errors to the error handler
  }
};
