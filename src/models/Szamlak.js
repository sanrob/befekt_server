//Számlák séma és model definiálása

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Szamlak = new Schema({
        kod:            {type: String},
        megnevezes:     {type: String},
        szamlavezeto:   {type: String},
        szamlaTipus:    {type: String},
        devizanem:      {type: String}
    },
    {
        collection: 'szamlak'
    });

exports.szamlakModel = mongoose.model('Szamlak', Szamlak);
