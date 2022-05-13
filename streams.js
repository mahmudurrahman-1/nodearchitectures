const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  /*first solution but there is problem. First node has to load the entire file
into memory and after that is ready it can send that data
  */
  //   fs.readFile(`${__dirname}/test-file.txt`, "utf-8", (err, data) => {
  //     if (err) console.log("there is a error");
  //     res.end(data);
  //   });
  /*this now creates a stream from the data in the text file which then consume piece by piece*/

  //   const readable = fs.createReadStream(`${__dirname}/test-file.txt`, "utf-8");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     //we didn't sent any data here because we already sent to res.write chunk by chunk
  //     //after reading completion we are ready using res.end
  //     res.end();
  //   });

  const readable = fs.createReadStream(`${__dirname}/test-file.txt`, "utf-8");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("started");
});
