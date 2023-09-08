const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "Public")));

const server = http.createServer(app);

const io = new Server(server);
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", "i am coming from backend");
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
