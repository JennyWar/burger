// ==============================
// Dependencies
// ==============================
const connection = require("./connection.js");

const orm = {

    // function to show all the burgers in the DB
    selectAll: function (table, onResult) {
        const query = 'SELECT * FROM ??';
        connection.query(query, [table], function (err, result) {
            onResult(err, result);
            // console.log(result);        
        });
    },

    // function to insert a burger into the DB
    insertOne: function (table, column, values, onResult) {
        const query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, column, values], function (err, result) {
            onResult(err, result);
            // console.log(result);
        })
    },
    
    updateOne: function(table, column, value, id, onResult) {
        const query = 'UPDATE ?? SET ?? = ? WHERE id = ?';
        connection.query(query, [table, column, value, id], function(err, result) {
            console.log(err);
            onResult(err, result);
        })
    }
    
};

// ========================
// Export orm 
// ========================
module.exports = orm;
