# 🧠 MERN Task Manager - Backend

This is the **backend** of the Task Manager application built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. It provides a RESTful API to manage tasks — including creating, reading, updating, deleting, filtering, and sorting.

---

## 🚀 How to Run Locally

### ✅ Prerequisites
- Node.js and npm installed
- MongoDB URI (local or MongoDB Atlas)

### ✅ Setup Steps

```bash
git clone https://github.com/pranavpallattu/todoServer.git
cd todoServer
npm install


🔐 Environment Setup

Create a .env file in the root of the backend project and add:

PORT=4000
MONGO_URL=your_mongodb_connection_uri

⚠️ Replace your_mongodb_connection_uri with your actual MongoDB connection string.

Start the server:

npm index.js

✅ Server will be running at http://localhost:4000


📁 Project Structure

todoServer/
├── controller/         # Task controller logic
├── model/              # Mongoose schema for tasks
├── routes/             # Express routes
├── connection.js       # MongoDB database connection setup
├── .env                # Environment variables (not committed)
├── index.js            # Server entry point



📦 Technologies Used


✅ Node.js

✅ Express.js

✅ MongoDB + Mongoose

✅ dotenv

✅ cors

✅ nodemon


🚀 API Endpoints
Base URL: http://localhost:4000

Method          	Endpoint                    Description

GET                /api/tasks	            Get all tasks (supports filtering/sorting)
POST	           /api/tasks          	    Add a new task
PUT	               /api/tasks/:id	        Update a task (title or completion)
DELETE	           /api/tasks/:id	        Delete a task



🚀 Features


✅ Add tasks

✅ Edit task title

✅ Toggle complete/incomplete

✅ Delete task

✅ Filter by status

✅ Sort by date (newest/oldest)


🚀 Author by Pranav P S