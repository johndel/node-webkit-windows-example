express = require("express"), http = require("http");

var app = express();
app.use(express.static(__dirname + '/public'));
var server = app.listen(8080);

// Express
app.get("/", function(request, response) {
  response.sendfile(__dirname + "/index.html");
});