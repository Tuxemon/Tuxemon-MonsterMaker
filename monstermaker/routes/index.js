var express = require('express');
var multer = require('multer');
var router = express.Router();
var submitMonster = require('../core/submitMonster');

/* GET home page. */
router.get('/', function(req, res, next) {
  var alert_found = false;
  var alert_type = "";
  var alert_message = "";

  res.render('pages/monster-maker',
          {
              title: 'Tuxemon | Monster Maker',
              page_name: 'index',
              alert_found: alert_found,
              alert_type: alert_type,
              alert_message: alert_message
          });
});

// Handle monster submitions
var uploadFields = [{name: "frontSprite"}, {name: "backSprite"}, {name: "faceSprite1"}, {name: "faceSprite2"}];
router.post('/', multer({dest: './uploads/'}).fields(uploadFields), function(req, res, next) {
  console.log(req.body)
  console.log(req.files)
  var alert_found = true;
  var alert_type = "success";
  var alert_message = "Success! Monster submition was successful!";
  var generatedData = "";

  var promise = submitMonster.submitMonsterPromise(req.body);

  return promise
      .then(function(result) {
          console.log("RESULT:", result)
          res.render('pages/monster-maker',
                 {
                     title: 'Tuxemon | Monster Maker',
                     page_name: 'index',
                     alert_found: alert_found,
                     alert_type: alert_type,
                     alert_message: alert_message,
                     generatedData: result
                 });
                  
             })
      .fail(function(err) {
          console.log(err)
          res.render('pages/monster-maker',
                 {
                     title: 'Tuxemon | Monster Maker',
                     page_name: 'index',
                     alert_found: alert_found,
                     alert_type: "danger",
                     alert_message: "Error occurred submitting monster"
                 });
      })

});



module.exports = router;
