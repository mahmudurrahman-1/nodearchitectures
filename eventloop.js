const fs = require("fs");
//Encrypt a password
const crypt = require("crypto");
const start = Date.now();
//now change the thread pool size
process.env.UV_THREADPOOL_SIZE = 4;

//this code is not in the I/o Cycle
//So it's not running inside of the event loop because
//it is not running inside of any callback function

setTimeout(() => {
  console.log("First print");
}, 0);
setImmediate(() => {
  console.log("Second Print");
});
fs.readFile("test-file.txt", () => {
  console.log("Third print");
});

//This will execute first...Because this is not inside anycall back function
console.log("hello from top level");

//pbkdf2 is encryption function
//pass a secret string
crypt.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "Password Encrypted -1 ");
});
crypt.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "Password Encrypted -2 ");
});
crypt.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "Password Encrypted -3 ");
});
crypt.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  console.log(Date.now() - start, "Password Encrypted -4 ");
});
