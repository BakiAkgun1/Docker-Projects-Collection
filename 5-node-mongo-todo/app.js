const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define ToDo Schema and Model
const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes

// Get all todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a new todo
app.post('/todos', async (req, res) => {
  const { task } = req.body;
  const newTodo = new Todo({ task });
  await newTodo.save();
  res.status(201).json(newTodo);
});

// Update a todo (toggle complete)
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).send('Todo not found');
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(204).send();
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
