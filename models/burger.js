const { insertOne } = require('../config/orm.js');
var orm = require('../config/orm.js')

var burger = {
    all: function (cb){
        orm.all('burgers', function (res) {
            cb(res);
          });
    },
    insertOne: function(name, cb){
        orm.insertOne(name)
    },
    updateOne: function (id) {
        orm.updateOne(id)
    },
    deleteOne: function (id) {
        orm.deleteOne(id)
    }
}

module.exports = burger
