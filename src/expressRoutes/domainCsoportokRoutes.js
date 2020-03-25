/* domainCsoportokRoutes.js */

express = require('express');
domainCsoportok = require('../models/DomainCsoportok.js');
var domainCsoportokRoutes = express.Router();

// Összes DOMAIN csoport dokument visszanyerése
domainCsoportokRoutes.route('/').get(function (req, res) {
    domainCsoportok.domainCsoportokModel.find(function (err, domainCsoportok) {
        if (err){
            console.log(err);
        } else {
            res.json(domainCsoportok);
        }
    });
});

// Új DOMAIN csoport felvétele
domainCsoportokRoutes.route('/add').post(function (req, res) {
    var domainCsoport = new domainCsoportok.domainCsoportokModel(req.body);
    domainCsoport.save()
        .then(item => {
            console.log('Sikeres INSERT: ' + item);
            res.status(200).json({'domainCsoport': 'DOMAIN csoport added successfully'});
        })
        .catch(err => {
            console.log('Sikertelen INSERT: ' + err);
            res.status(400).send("unable to save to database");
        });
});

// DOMAIN csoport adatainak módosítása
domainCsoportokRoutes.route('/update/:id').put(function (req, res) {
    var domainCsoport = new domainCsoportok.domainCsoportokModel(req.body);
    console.log('id=' + req.params.id);
    console.log('req.body=' + JSON.stringify(req.body));
    domainCsoportok.domainCsoportokModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, response) {
        if(err) {
            res.json({message: "Error in updating person with id " + req.params.id});
        } else {
            res.json(response);
        }
    });
    });

// DOMAIN csoport törlése
domainCsoportokRoutes.route('/delete/:id').delete(function (req, res) {
    domainCsoportok.domainCsoportokModel.findByIdAndRemove({_id: req.params.id}, function(err, item){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });

// Egy DOMAIN csoport rekord visszanyerése
domainCsoportokRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

module.exports = domainCsoportokRoutes;