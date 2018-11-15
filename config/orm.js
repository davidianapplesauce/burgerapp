// Import MySQL connection.
var connection = require("../config/connection.js");


  // Object for all our SQL statement functions.
  var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, vals, cb) {
      var queryString = "INSERT INTO " + table +" (burger_name) VALUES (?);";
      // queryString += " (";
      // queryString += cols.toString();
      // queryString += ") ";
      // queryString += "VALUES (";
      // queryString += printQuestionMarks(vals.length);
      // queryString += ") ";
      console.log(queryString);
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // An example of objColVals would be {name: Jackman Burger, devoured: true}
    updateOne: function(table, columnName, inputValue, valueID, cb) {
      var queryString = "UPDATE " + table +" SET " +columnName+" = "+inputValue;
      queryString += "WHERE id= "+valueID;
      // queryString += " SET ";
      // queryString += objToSql(objColVals);
      // queryString += " WHERE ";
      // queryString += condition;
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  };
  
  // Export the orm object for the model (burger.js).
  module.exports = orm;


  //Below code removed from above

  // Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

    //Don't think I need the below code...****

// function printQuestionMarks(num) {
//     var arr = [];
  
//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }
  
//   // Helper function to convert object key/value pairs to SQL syntax
//   function objToSql(ob) {
//     var arr = [];
  
//     // loop through the keys and push the key/value as a string int arr
//     for (var key in ob) {
//       var value = ob[key];
//       // check to skip hidden properties
//       if (Object.hasOwnProperty.call(ob, key)) {
//         // if string with spaces, add quotations (Stallone Burger => 'Stallone Burger')
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }
//         // e.g. {name: 'Stallone Burger'} => ["name='Stallone Burger'"]
//         // e.g. {devoured: true} => ["devoured=true"]
//         arr.push(key + "=" + value);
//       }
//     }
  
//     // translate array of strings to a single comma-separated string
//     return arr.toString();
//   }
  
  