const express = require("express");
const path = require("path");
const publicpath = path.join(__dirname, "../public");
const app = express();
const { createServer } = require("http")
const server = require("socket.io");
app.use(express.static(publicpath));

const PORT = process.env.PORT || 8000

const httpServer = createServer(app)
const io = server(httpServer) // give acces to the socket.io library


io.on("connection", (socket) => {
    console.log(`connected to the client with Socket id ${socket.id}`);
    // every time the browser loads it send a request to the server over here.

    socket.on("disconnect", () => {
        console.log(`Disconnected from the client `);  // every time the browser loads it send a request to the server over here.
    });
});


httpServer.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})