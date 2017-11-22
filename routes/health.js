let dateFormat = require('dateformat'),
    express = require('express'),
    router = express.Router();

// Routes 
const health = ('/health');

router.get(health, function(req, res, err) {

    if (err) {
        console.log(err);
    }

    let now = new Date();
    let dateNow = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss");

    console.log("\nGET /health: \tWelcome to Swish Rollbar server\n" + dateNow);
    res.send({ 'message': 'Welcome to NodeReferee server' });
});

module.exports = router;