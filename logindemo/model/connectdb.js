var mysql = require('mysql');
function 



var ConnectDB = function ConnectDB(){
	var $connectDb = this;
	this.connect;
	this.result;
	this.closeConnection=function(){
		if($connectDb.connect){
			$connectDb.connect.end();
		}
	}
	this.openConnection=function(){
		$connectDb.connect = mysql.createConnection({
		    host: 'localhost',
		    user: 'root',
		    password: '',
		    database:'opencart',
		    port: 3306
		});
	};
	this.query=function(sql){
		$connectDb.openConnection();
		$connectDb.connect.query('select count(1) as rowcount from oc_customer', $connectDb.cursor);
		$connectDb.closeConnection();
	};
	this.cursor=function(err, rows,fields){
		if(err){
			console.log('ConnectDB->cursor error' + err);
		}else{
			console.log('The count is: ', rows);
			$connectDb.result=rows;
		}
	};
	
}