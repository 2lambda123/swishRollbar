let dateFormat = require('dateformat'),
express = require('express'),
rollbar = require("rollbar"),
fs = require('fs'),
router = express.Router();

// Routes 
const UNCAUGHT_EXCEPTION = ('/uncaughtException');

router.get(UNCAUGHT_EXCEPTION, function(req, res, err) {






    fs.readFile('somefile.txt', function (err, data) {
      if (err) throw err;
      console.log(err);
    });

    // Example on how to handle this
    // Node is single threaded so it will be run in the save process
    // process.on('uncaughtException', function (err) {
    //     console.log(err);
    // })

res.sendStatus(200);
});

module.exports = router;