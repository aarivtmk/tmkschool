const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// app.use(middleware1);
app.use(bodyParser.json());
console.log("body", bodyParser.json());

const addition = (counter) => {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
};

function handleFirstRequest(req, res) {
  // counter = req.query.counter; //getting counter form query
  console.log(req.body);
  counter = req.body.counter;
  let answer = "the sum is" + addition(counter);
  res.send(answer);
}

app.post("/createuser", handleFirstRequest);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
