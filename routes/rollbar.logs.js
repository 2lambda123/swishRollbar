let dateFormat = require('dateformat'),
    express = require('express'),
    rollbar = require("rollbar"),
    router = express.Router();

// Routes 
const ROLLBAR_LOGS = ('/rollbarLogs');

router.get(ROLLBAR_LOGS, function(req, res, err) {

    let now = new Date();
    let dateNow = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss");
    console.log("\nGET /rollbar log types: \n" + dateNow);

    rollbar.log("Log rollbar log message")
    rollbar.info("Info rollbar log message")
    rollbar.critical("Critical rollbar log message")
    rollbar.warning("Warning rollbar log message")
    rollbar.error("Error rollbar log message")
    rollbar.debug("Debug rollbar log message")

    res.json("Rollbar log messages");
});

module.exports = router;