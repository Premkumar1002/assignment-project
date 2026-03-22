# 🚀 Assignment Project – Workshop Dashboard & Task Manager

## 📌 Project Overview

This project consists of two major components:

### 🏭 1. Workshop Monitoring Dashboard (Assignment 1)

A real-time UI dashboard that represents a workshop floor digitally.

* Displays **Lines → Rooms → Workstations (Propellia & Subpropellia)**
* Fetches live data from backend API
* Auto-refreshes every **1 second**
* Calculates and displays **Total Drop (mv)**

---

### 📋 2. Task Manager (Mini Full-Stack Application – Assignment 2)

A single-page application to manage tasks with real-time UI updates.

* Add new tasks
* Edit existing tasks
* Update task status:

  * Created → WIP → Completed
* No page reload (uses API calls)

---

## 🛠️ Tech Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Frontend   | HTML, CSS, JavaScript                     |
| Backend    | Node.js, Express                          |
| Database   | In-memory (can be extended to PostgreSQL) |
| Deployment | Vercel (Frontend), Render (Backend)       |

---

## 📁 Project Structure

```
assignment-project/
│
├── frontend/
│   ├── workshop/
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │
│   ├── task-manager/
│       ├── index.html
│       ├── style.css
│       ├── script.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── tasks.js
│   │   ├── workshop.js
│   ├── db/
│       ├── schema.sql
│
├── mockup/
│   ├── workshop-mockup.png
│
├── README.md
```

---

## ⚙️ How to Run Locally

### 🔹 Step 1: Clone Repository

```bash
git clone https://github.com/Premkumar1002/assignment-project
cd assignment-project
```

---

### 🔹 Step 2: Setup Backend

```bash
cd backend
npm install
node server.js
```

👉 Backend runs at:

```
http://localhost:5000
```

---

### 🔹 Step 3: Run Frontend

Open these files in your browser:

#### 🏭 Workshop Dashboard:

```
frontend/workshop/index.html
```

#### 📋 Task Manager:

```
frontend/task-manager/index.html
```

---

## 🔗 API Endpoints

### Workshop API

| Method | Endpoint  | Description                   |
| ------ | --------- | ----------------------------- |
| GET    | /workshop | Fetch real-time workshop data |

---

### Task Manager API

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /tasks            | Get all tasks      |
| POST   | /tasks            | Add new task       |
| PUT    | /tasks/:id        | Update task name   |
| PUT    | /tasks/:id/status | Update task status |

---

## 🌐 Live Deployment

* 🔗 Frontend (Workshop): https://assignment-project-plum-alpha.vercel.app
* 🔗 Frontend (Task Manager): https://assignment-project-ch2p.vercel.app
* 🔗 Backend API: https://assignment-project-zf6f.onrender.com


