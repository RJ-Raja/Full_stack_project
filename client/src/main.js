import { io } from "socket.io-client";

// This tells the browser to connect to the server on Port 3001
const socket = io("http://localhost:3001");

console.log("Attempting to connect...");
socket.on("connect", () => {
  console.log("I am connected to the server! My ID is:", socket.id);
});