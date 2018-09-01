  var express = require('express');
  var path = require('path');

  var app = express();

  console.log('working??')

  app.use(express.static(path.join(__dirname, "public")));

  app.listen(3002, () => console.log('App listening on port 3002!'))

