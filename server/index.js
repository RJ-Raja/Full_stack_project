const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors()); // This allows your frontend to "call" the backend

const server = http.createServer(app);

// This creates the "io" variable that was missing
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Your Vite frontend URL
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  // THIS is the line you are looking for!
  console.log('A user connected! ID:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});