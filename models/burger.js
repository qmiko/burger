// Import ORM
var orm = require("../config/orm.js");

// Calling ORM functions
var burger = {
    // Display all burgers in the Database
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Add a new burger to the Database
    insertOne: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    // Delete a burger from the Database
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};


// Export Database
module.exports = burger;