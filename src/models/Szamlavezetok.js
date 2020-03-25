//Számlavezetők séma és model definiálása

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Szamlavezetok = new Schema({
        kod:        {type: String},
        megnevezes: {type: String}
    },
    {
        collection: 'szamlavezetok'
    });

exports.szamlavezetokModel = mongoose.model('Szamlavezetok', Szamlavezetok);
