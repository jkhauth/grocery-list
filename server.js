var express = require('express')
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
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

app.listen(port)