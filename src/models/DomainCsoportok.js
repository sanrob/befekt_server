//DOMAIN csoportok séma és model definiálása

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DomainCsoportok = new Schema({
        kod:        {type: String},
        megnevezes: {type: String}
    },
    {
        collection: 'domaincsoportok'
    });

exports.domainCsoportokModel = mongoose.model('DomainCsoportok', DomainCsoportok);
