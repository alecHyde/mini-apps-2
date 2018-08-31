
  var express = require('express');
  var path = require('path');
  var request = require('request');

  var app = express();

  // app.use(express.static('public'));
  console.log('working here?')
  app.use(express.static(path.join(__dirname, "public")));

  app.get('/getBTC', (req, res) => {
    console.log('second request made')

    let options = {
      url: 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday'
    }

    let callback = (error, response, body) => {
      if(error) {
        res.status(500).send(error)
      } else {
        res.status(200).send(body)
      }
    }

    request(options, callback);


  })

  app.listen(3001, () => console.log('App listening on port 3001!'))

