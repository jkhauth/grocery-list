var connection = require('../config/connection');

var orm = {
    all: function (tableInput, cb){
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(name){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)"
        connection.query(queryString, [name], function (err, result){
                if (err) throw err;
        });
    }
}

module.exports = orm