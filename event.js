const EventEmiiter = require("events");
const http = require("http");
/////////////////
class Bangladesh extends EventEmiiter {
  constructor() {
    super();
  }
}

const myEvents = /*new EventEmiiter()*/ new Bangladesh();

myEvents.on("bangladesh", () => {
  console.log("Bangladesh is my home country");
});

myEvents.emit("bangladesh");

///////
//Creating a server
///////
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Hello world ---First request received");
});
server.on("request", (req, res) => {
  console.log("Hello world ---Second request received");
});
server.on("close", () => {
  console.log("Final request closed");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Started");
});
