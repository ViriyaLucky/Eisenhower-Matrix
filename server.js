var express = require('express');
var app = express();
const path = require('path');
app.use(express.static('../../dist')); // myApp will be the same folder name.

app.listen(process.env.PORT || 8080);
app.get('/*', function (req, res) {
  res.sendFile(path.join('../../dist/index.html'));
  console.log('../../dist/index.html');
});
console.log("MyProject Server is Listening on port 8080");

