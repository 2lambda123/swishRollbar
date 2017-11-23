require('dotenv').load();

let express = require('express'),
    expressValidator = require('express-validator'),
    bodyParser = require('body-parser'),
    dateFormat = require('dateformat'),
    app = express(),
    http = require('http'),
    port = process.env.NODE_PORT || 3000,
    Rollbar = require('rollbar');
    //rollbar = new Rollbar(process.env.ROLLBAR_SECRET);

let rollbar = Rollbar.init({ 
    accessToken: process.env.ROLLBAR_SECRET,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: "production"
    }
});

// Headers options
let corsMiddleware = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    next();
};

app.use(corsMiddleware);
app.use(rollbar.errorHandler());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

//======================================
//=========== EXPRESS ROUTES ===========
//======================================
let health = require('./routes/health');
let payment = require('./routes/payment');
app.use('/api/swishRollbar', health);
app.use('/api/swishRollbar', payment);

http.createServer(app).listen(port, function(){
    
    let now = new Date();
    let dateNow = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss");

    console.log("Swish rollbar server started at: http://localhost:3000/api/swishRollbar/health");
    console.log("Date: " + dateNow);
    //rollbar.log("Swish rollbar server started at: http://localhost:3000/api/swishRollbar/health");
});