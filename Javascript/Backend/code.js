const express = require("express");
const app = express();
const port = 3000;

const addition = (counter) => {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
};

function handleFirstRequest(req, res) {
  counter = req.query.counter;
  let answer = "the sum is" + addition(counter);
  res.send(answer);
}

function createUser(req, res) {
  res.send("created user");
}
app.get("/handleSum", handleFirstRequest);
app.post("/createuser", createUser);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

// read files from theory text file

/* const fs = require("fs");
function callbackFn(err, data) {
  console.log(data);
}

fs.readFile("theory", "utf-8", callbackFn);
console.log("HELLO");
 */
