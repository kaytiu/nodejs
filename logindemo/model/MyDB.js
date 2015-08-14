var mysql = require('mysql');

exports.testmodel = function(){
	console.log('first module');
};


function MyDB(){
	var connection;
	var results;
	this.errorCode;
	var queryResult=function(result,callback){
		callback(result);
	}
	this.query=function(sql,callback){
		openConnection();
//		queryResult = this.queryResult;
		var errorCode = this.errorCode = -999;
		connection.query(sql, function(err, rows, fields) {
			if(err){
				queryResult(errorCode,callback);
				return;
			}
			var queryResults = [];
		    for(var i = 0; i < rows.length; i++){
		    	var result = {};
		    	for(var j = 0; j<fields.length; j++){
//		    		console.log(fields[j].name);
//		    		console.log(fields[j].orgName);
		    		result[fields[j].name] = rows[i][fields[j].name];
		    	}
		    	queryResults.push(result);
		    	break;
		    }
		    queryResult(queryResults,callback);
		    
		});
		connection.end();
	}
	var openConnection=function(){
		connection = mysql.createConnection({
		    host: 'localhost',
		    user: 'root',
		    password: '',
		    database:'opencart_dev',
		    port: 3306
		});
		connection.connect();
	}
}


exports.MyDB = MyDB;




//////////////////////////ok
/*
function MyDB(){
	this.connection;
	this.results;
	this.errorCode;
	this.queryResult=function(result,callback){
		callback(result);
	}
	this.query=function(sql,callback){
		this.openConnection();
		queryResult = this.queryResult;
		var errorCode = this.errorCode = -999;
		this.connection.query(sql, function(err, rows, fields) {
			if(err){
				queryResult(errorCode,callback);
				return;
			}
			var queryResults = [];
		    for(var i = 0; i < rows.length; i++){
		    	var result = {};
		    	for(var j = 0; j<fields.length; j++){
//		    		console.log(fields[j].name);
//		    		console.log(fields[j].orgName);
		    		result[fields[j].name] = rows[i][fields[j].name];
		    	}
		    	queryResults.push(result);
		    	break;
		    }
		    queryResult(queryResults,callback);
		    
		});
		this.connection.end();
	}
	this.openConnection=function(){
		this.connection = mysql.createConnection({
		    host: 'localhost',
		    user: 'root',
		    password: '',
		    database:'opencart_dev',
		    port: 3306
		});
		this.connection.connect();
			
	}
}


var mydb = new MyDB();
mydb.query('select * from oc_customer',testcallback);
function testcallback(result){
	if(result == mydb.errorCode){
		console.log('select error....');
	}
	console.log(result);
}
*/
