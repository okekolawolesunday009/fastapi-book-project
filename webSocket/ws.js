const express = require("express");
const socketio = require("socket.io");

const app = express();

// Serve static files from 'public' folder
app.use(express.static(__dirname + '/public'));

// Start the Express server on port 8000
const expressServer = app.listen(6789, () => {
    console.log("Server is running on http://localhost:6789");
});

// Attach socket.io to the HTTP server
const io = socketio(expressServer);

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    // Send a welcome message to the client
    socket.emit("messageFromServer", { data: "Welcome to the WebSocket server!" });

    // Listen for messages from the client
    socket.on("messageFromClient", (data) => {
        console.log("Message from client:", data);
    });

    // Handle client disconnecting
    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});
