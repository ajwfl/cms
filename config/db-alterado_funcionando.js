mysql = require('mysql');
/*connectionString = 'mysql://root:@localhost/cms';

db = {}
db.cnn = {};
db.cnn.exec = function(query, callback) {
  var connection = mysql.createConnection(connectionString);
  connection.query(query, function(err, rows) {
    callback(rows, err);
    connection.end();
  });
};
*/

var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cms'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});

module.exports = connection;