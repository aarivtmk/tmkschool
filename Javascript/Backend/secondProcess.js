function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callbackFn(result) {
  result.json().then(logResponseBody);
}
fetch("http://localhost:3000/handleSum?counter=3", { method: "GET" }).then(
  callbackFn
);
