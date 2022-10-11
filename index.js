const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/temat1", function (request, response) {
  response.sendFile(path.join(__dirname + "/public/temat1/calc.html"));
});


app.listen(3000, () => {
  console.log(`Listening to requests on http://localhost:${3000}`);
});
