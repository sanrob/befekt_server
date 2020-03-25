// server.js

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      domainCsoportokRoutes = require('./expressRoutes/domainCsoportokRoutes.js');
      szamlavezetokRoutes = require('./expressRoutes/szamlavezetokRoutes.js');
      devizanemekRoutes = require('./expressRoutes/devizanemekRoutes.js');

// MongoDB megnyitása
mongoose.Promise = global.Promise;
mongoose.connect(config.DB,  {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/domainCsoportok', domainCsoportokRoutes);
app.use('/szamlavezetok', szamlavezetokRoutes);
app.use('/devizanemek', devizanemekRoutes);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
