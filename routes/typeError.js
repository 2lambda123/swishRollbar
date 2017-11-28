let dateFormat = require('dateformat'),
    express = require('express'),
    rollbar = require("rollbar"),
    router = express.Router();

// Routes 
const TYPE_ERROR = ('/typeError');

router.get(TYPE_ERROR, function(req, res, err) {

    try{
        let now = new Date();
        let dateNow = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss");
        console.log("\nGET /Node type error: \n" + dateNow);

        // Type Error
        request;

        // Syntax Error
        require('vm').runInThisContext('binary ! isNotOk');
        
    }catch(error){
        rollbar.error(error)
        console.log(error)
    }
    res.sendStatus(200);
});

module.exports = router;