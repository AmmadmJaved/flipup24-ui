import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3001;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.on("message", (payload) => {
      console.log("The first message is", payload);
      io.emit("message", payload);
    });

    socket.on("add", (payload) => {
        console.log("The add message is", payload);
      io.emit("add", payload);
    });
    socket.on("minus", (payload) => {
        console.log("The minus message is", payload);
      io.emit("minus", payload);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});