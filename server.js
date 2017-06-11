var express = require("express");
var app = express();

/*app.get("/", function(req, res) {
  res.send("Hola");
});

app.get("/Amalia", function(req, res) {
  res.send("Hola como estas?");
});

*/

app.use(express.static(__dirname + "/public/"));


app.listen(5000, function(){
  console.log("servidor escuchando en http://localhost:5000");
});