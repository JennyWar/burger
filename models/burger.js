// =========================
// Dependencies
// ==========================
const orm = require('../config/orm.js');


const burger = {
    
    selectAll: function (onResult) {
        orm.selectAll('burgers', onResult);
    },

    insertOne: function(burgerName, onResult) {
        orm.insertOne('burgers', 'burger_name', burgerName, onResult); 
    },

    updateOne: function(id, onResult) {
        orm.updateOne('burgers', 'devoured', 1, id, onResult);
    }
}


// ==================
// Exports
// ==================
module.exports = burger;