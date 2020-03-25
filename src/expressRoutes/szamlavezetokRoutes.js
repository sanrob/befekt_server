/* szamlavezetokRoutes.js */

express = require('express');
szamlavezetok = require('../models/Szamlavezetok.js');
var szamlavezetokRoutes = express.Router();

// Összes számlavezető dokument visszanyerése
szamlavezetokRoutes.route('/').get(function (req, res) {
    szamlavezetok.szamlavezetokModel.find(function (err, szamlavezetok) {
        if(err){
            console.log(err);
        } else {
            res.json(szamlavezetok);
        }
    });
});

// Új számlavezető felvétele
szamlavezetokRoutes.route('/add').post(function (req, res) {
    var szamlavezeto = new szamlavezetok.szamlavezetokModel(req.body);
    szamlavezeto.save()
        .then(item => {
            res.status(200).json({'szamlavezeto': 'Szamlavezeto added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
  
// Require Item model in our routes module
//var Item = require('../models/Item').default.default.default.default;
//var Item = require('../models/Item').default.default;


// Defined edit route
szamlavezetokRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
szamlavezetokRoutes.route('/update/:id').post(function (req, res) {
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
szamlavezetokRoutes.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = szamlavezetokRoutes;