/* devizanemekRoutes.js */

express = require('express');
devizanemek = require('../models/Devizanemek.js');
var devizanemekRoutes = express.Router();

// Összes devizanem dokument visszanyerése
devizanemekRoutes.route('/').get(function (req, res) {
    devizanemek.devizanemekModel.find(function (err, devizanemek){
        if(err){
            console.log(err);
        } else {
            res.json(devizanemek);
        }
    });
});

// Új Devizanem felvétele
devizanemekRoutes.route('/add').post(function (req, res) {
    var devizanem = new devizanemek.devizanemekModel(req.body);
    devizanem.save()
        .then(item => {
            console.log('Sikeres INSERT: ' + item);
            res.status(200).json({'devizanem': 'Devizanem added successfully'});
        })
        .catch(err => {
            console.log('Sikertelen INSERT: ' + err);
            res.status(400).send("unable to save to database");
        });
});


// Defined edit route
devizanemekRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
devizanemekRoutes.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.name = req.body.name;
      item.price = req.body.price;

      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
devizanemekRoutes.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = devizanemekRoutes;