// index.js
// where your node app starts

// init project
const express = require('express');
const morgan = require('morgan');
const ttRoutes = require('./routes/ttRoutes');
const app = express();

// logging
app.use(morgan('dev'))

// body parser

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// requested time middleware
app.use((req, res, next) => {
  
  req.unix = Date.now();
  req.utc = new Date().toUTCString()
  console.log(req.utc)
  next();
})

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
 // routes
 app.use('/api', ttRoutes)


// Listen on port set in environment constiable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
