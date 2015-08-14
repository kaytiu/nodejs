var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'opencart_dev',
    port: 3306
});
conn.connect();
conn.query('select * from oc_customer', function(err, rows, fields) {
    if (err) throw err;
    console.log('The count is: ', rows[0].customer_id);
    conn.end();
});
//conn.end();