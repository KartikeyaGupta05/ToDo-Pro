const express = require("express"); // Import Express framework
const router = express.Router(); // Create a new router instance
const { body } = require("express-validator"); // Import validation middleware from express-validator
const taskController = require("../controllers/task.controller"); // Import the task controller
const authMiddleware = require("../middlewares/auth.middleware"); // Import the authentication middleware

router.post(
  "/create",
  authMiddleware,
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
  taskController.createTask
);

// Get all tasks for logged-in user
router.get("/", authMiddleware, taskController.getTasks);

// Get single task by ID
router.get("/:id", authMiddleware, taskController.getTaskById);

// Update a task
router.put(
  "/:id",
  authMiddleware,
  [
    body("status").optional().isIn(["pending", "in-progress", "completed"]),
    body("priority").optional().isIn(["low", "medium", "high"]),
    body("dueDate").optional().isISO8601(),
  ],
  taskController.updateTask
);

// Delete a task
router.delete("/:id", authMiddleware, taskController.deleteTask);

module.exports = router; // Export the router for use in other files
