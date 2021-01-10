var express = require('express')
var app = express();

//=======EXPRESS-HANDLEBARS
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


//========APP ROUTES
var routes = require('./controllers/burgers_controller.js')
app.use('/', routes);


//========PORT
var port = 3000
app.listen(port)