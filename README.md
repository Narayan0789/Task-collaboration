# Task Collaboration Platform

A full-stack task management and collaboration platform built using React, Node.js, Express, MongoDB, and Socket.io. Users can create boards, lists, and tasks with real-time updates and drag-and-drop functionality.

---

## Features

- User Signup and Login (JWT Authentication)
- Create Boards (user-specific)
- Create Lists inside Boards
- Create Tasks inside Lists
- Drag and Drop Tasks between Lists
- Real-time task updates using Socket.io
- MongoDB database integration
- Responsive and modern UI

---

## Tech Stack

### Frontend
- React.js
- Axios
- Socket.io Client
- @hello-pangea/dnd (Drag & Drop)
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Socket.io

---

## Folder Structure

    task-collab-platform/
    │
    ├── backend/
    │ ├── models/
    │ ├── routes/
    │ ├── middleware/
    │ ├── server.js
    │
    ├── frontend/
    │ ├── src/
    │ │ ├── pages/
    │ │ ├── services/
    │ │ ├── App.js
    │
    └── README.md

# 2. Backend setup
    cd backend
    npm install
    npm run dev

# 3. Frontend setup
    cd frontend
    npm install
    npm start
    
# 4. Database
    This application uses MongoDB Atlas for cloud database storage.
    The connection string is securely stored in environment variables.

# 5. API Endpoints
     Auth
     POST /api/auth/signup
     POST /api/auth/login

# 6. Boards
     POST /api/boards/create
     GET /api/boards

# 7. Lists
     POST /api/lists/create
     GET /api/lists/:boardId

# 8. Tasks
     POST /api/tasks/create
     GET /api/tasks/:listId
     PUT /api/tasks/move
     
# 9. Real-time Features
    Socket.io used for:
     Real-time task updates
     Live collaboration

# 10. Author
      Narayan Kumar
      Full Stack Developer

## Screenshots

### Login Page

<img width="1915" height="844" alt="Screenshot 2026-02-16 225635" src="https://github.com/user-attachments/assets/ede867a1-6536-4713-aa7a-d9d23ee2937b" />

### Database

<img width="1856" height="894" alt="Screenshot 2026-02-16 230313" src="https://github.com/user-attachments/assets/912e1ec0-512e-4b20-93b5-b3beded0b607" />

### Dashboard

<img width="1771" height="767" alt="Screenshot 2026-02-15 143324" src="https://github.com/user-attachments/assets/3a167c9d-d7d6-417e-945e-0639eb82d99e" />
