var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'opencart',
    port: 3306
});
conn.connect();
conn.query('select count(1) as rowcount from oc_customer', function(err, rows, fields) {
    if (err) throw err;
    console.log('The count is: ', rows[0].rowcount);
});
conn.end();