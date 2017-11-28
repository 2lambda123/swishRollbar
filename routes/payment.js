let dateFormat = require('dateformat'),
    express = require('express'),
    rollbar = require("rollbar"),
    router = express.Router();

// Routes 
const PAYMENT_REQUEST = ('/paymentRequest');
let counter = 1.0;

router.get(PAYMENT_REQUEST, function(req, res, err) {

    let now = new Date();
    let dateNow = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss");
    console.log("\nGET /paymentRequest: \n" + dateNow);

    let response = {};

    // Simulate an payment request error after a few request
    // Every 4th request will generate an database error
    if(Number.isInteger(counter)){
        response.api = "paymentReqeust";
        response.error = "Database error";
        response.status = "DECLINED";

        // Don't forget to parse JSON before sending to Rollbar
        rollbar.error(JSON.stringify(response));
    }else{
        response.api = "paymentReqeust";
        response.amount = 100;
        response.status = "PAID";    
    }
    counter+= 0.25;

    res.json(response);
});

module.exports = router;