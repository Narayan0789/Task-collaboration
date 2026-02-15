const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");

const authRoutes = require("./routes/auth");
const boardRoutes = require("./routes/board");
const listRoutes = require("./routes/list");
const taskRoutes = require("./routes/task");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/tasks", taskRoutes);


// Create HTTP server
const server = http.createServer(app);


// Setup Socket.io
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});


// Socket connection
io.on("connection", (socket) => {

  console.log("User connected:", socket.id);

  socket.on("taskCreated", (data) => {

    socket.broadcast.emit("taskCreated", data);

  });

  socket.on("disconnect", () => {

    console.log("User disconnected");

  });

});


app.get("/", (req, res) => {
  res.send("API is running...");
});


mongoose.connect("mongodb://127.0.0.1:27017/taskcollab")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// IMPORTANT: use server.listen
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
