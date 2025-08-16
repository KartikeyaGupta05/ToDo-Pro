const taskModel = require("../models/task.model");

module.exports.createTask = async ({
    title, description, status, priority, dueDate, userId
}) => {
    if (!title || !description || !status || !priority || !dueDate) {
        throw new Error("All fields are required");
    }

    const task = await taskModel.create({
        title,
        description,
        status,
        priority,
        dueDate,
        userId // Link task to logged-in user
    });

    return task;
};

module.exports.getTasksByUserId = async (userId) => {

    return await taskModel.find({ userId }).sort({ createdAt: -1 });
};

module.exports.getTaskById = async (taskId, userId) => {
    return await taskModel.findOne({ _id: taskId, userId });
};

module.exports.updateTask = async (taskId, userId, updates) => {
    const task = await taskModel.findOneAndUpdate(
        { _id: taskId, userId },
        { $set: updates },
        { new: true }
    );
    return task;
};

module.exports.deleteTask = async (taskId, userId) => {
    const task = await taskModel.findOneAndDelete({ _id: taskId, userId });
    return task;
};
