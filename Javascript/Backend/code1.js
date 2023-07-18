const express = require("express");
const app = express();
const port = 3000;

function middleware1(req, res, next) {
  // now middleware can decide whether to send or reject the request
  console.log("from inside middleware", req.headers.counter);
  next();
}

app.use(middleware1);

const addition = (counter) => {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
};

function handleFirstRequest(req, res) {
  // counter = req.query.counter; //getting counter form query
  console.log(req.headers);
  counter = req.headers.counter;
  let answer = "the sum is" + addition(counter);
  res.send(answer);
}

app.post("/createuser", handleFirstRequest);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
