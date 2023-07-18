function callbackFn(result) {
  console.log(result);
}
fetch("http://localhost:3000/handleSum?counter=3", { method: "GET" }).then(
  callbackFn
);
