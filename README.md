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




