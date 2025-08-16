const express = require("express"); // Import Express framework
const router = express.Router(); // Create a new router instance
const { body } = require("express-validator"); // Import validation middleware from express-validator
const taskController = require("../controllers/task.controller"); // Import the task controller
const authMiddleware = require("../middlewares/auth.middleware"); // Import the authentication middleware

router.post(
  "/create",
  authMiddleware.authUser,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("status")
      .isIn(["pending", "in-progress", "completed"])
      .withMessage("Invalid status"),
    body("priority")
      .isIn(["low", "medium", "high"])
      .withMessage("Invalid priority"),
    body("dueDate").isISO8601().withMessage("Invalid due date"),
  ],
  taskController.create
);

// Get all tasks for logged-in user
router.get("/", authMiddleware.authUser, taskController.getAllTasks);

// Get single task by ID
router.get(
  "/:id",
  authMiddleware.authUser,
  taskController.getTaskById
);

// Update a task
router.patch(
  "/:id",
  authMiddleware.authUser,
  taskController.updateTask
);

// Delete a task
router.delete("/:id", authMiddleware.authUser, taskController.deleteTask);

module.exports = router; // Export the router for use in other files
