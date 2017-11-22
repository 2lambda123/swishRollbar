require('dotenv').load();

let dateFormat = require('dateformat'),
    express = require('express'),
    rollbar = require("rollbar"),
    router = express.Router();

// Routes 
const PAYMENT_REQUEST = ('/paymentRequest');

router.get(PAYMENT_REQUEST, function(req, res, err) {

    if (err) throw err;

    let response = {
        "api" :"paymentReqeust",
        "amount": 100,
        "status": "PAID"
    }

    let error = {
        "api" :"paymentReqeust",
        "status" : "CANCELED",
        "message" : "No database connection"
    }
    // Simulate an payment request error after a few requests
    let counter = 0;
    // If counter divided by 3 is an whole number 
    if(counter / 3 === Number.isInteger(counter)){
        res.sendStatus(406);
        rollbar.error(error);
    }

    console.log("\nGET /paymentRequest: \n" + dateNow);
    rollbar.info(response);
    res.send(response);
});

module.exports = router;