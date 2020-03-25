//Devizanemek séma és model definiálása

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Devizanemek = new Schema({
        kod:        {type: String},
        megnevezes: {type: String}
    },
    {
        collection: 'devizanemek'
    });

exports.devizanemekModel = mongoose.model('Devizanemek', Devizanemek);
