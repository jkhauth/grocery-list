var connection = require('../config/connection');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push('?');
    }
    return arr.toString();
}

function objToSql(ob){
    var arr = [];

    for (var key in ob){
        if (ob.hasOwnProperty(key)){
            arr.push(key + '=' + ob[key])
        }
    }
    return arr.toString();
}

var orm = {
    all: function (tableInput, cb){
        var queryString = 'SELECT * FROM' + tableInput + ';';
        connection.query(queryString, function (err, result){
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm