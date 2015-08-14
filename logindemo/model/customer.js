var MyDB  = require('./MyDB').MyDB,
co = require('co'),
thunkify = require('thunkify');

//mydb.query('select * from oc_customer',testcallback);
function testcallback(result){
	if(result == mydb.errorCode){
		console.log('select error....');
	}
	console.log(result);
}

function Customer(){
	var mydb = new MyDB();
	this.getCustomer = function(customer_id){
		

		var test = thunkify(mydb.query);
		
		co(function(){
		     var p1=yield test('select * from oc_customer where customer_id=\''+customer_id+'\'');
		     console.log(p1+":"+p2);
		})();
		
		console.log('done..........');
		
		
		return;
//		var tmpresut;
		mydb.query('select * from oc_customer where customer_id=\''+customer_id+'\'',function(result){
			tmpresut = result;
			console.log('callback...');
		});
//		console.log('done...');
		
	}
}

exports.Customer = Customer;

var testcustomer = new Customer();
var test = testcustomer.getCustomer('15');
console.log(test);

 
/*
var mydb = new MyDB();
mydb.query('select * from oc_customer',testcallback);



function Customer(){
	this.getCustomer=function(){
		db.query('select * from oc_customer where customer_id=\'1\'');
		console.log(db.result);
	}
}
Customer.getCustomer();



console.log('require done ....');
*/

//var Customer = sequelize.define('oc_customer', {
//	customerId:{type:Sequelize.INTEGER,field:'customer_id'},
//	customerGroupId:{type:Sequelize.INTEGER,field:'customer_group_id'},
//	storeId:{type:Sequelize.INTEGER,field:'store_id'},
//	languageId:{type:Sequelize.INTEGER,field:'language_id'},
//	firstName:{type:Sequelize.STRING,field:'firstname'},
//	lastName:{type:Sequelize.STRING,field:'lastname'},
//	email:{type:Sequelize.STRING,field:'email'},
//	telephone:{type:Sequelize.STRING,field:'telephone'},
//	fax:{type:Sequelize.STRING,field:'fax'},
//	password:{type:Sequelize.STRING,field:'PASSWORD'},
//	slat:{type:Sequelize.STRING,field:'salt'},
//	cart:{type:Sequelize.STRING,field:'cart'},
//	wishlist:{type:Sequelize.STRING,field:'wishlist'},
//	newsletter:{type:Sequelize.STRING,field:'newsletter'},
//	addressID:{type:Sequelize.STRING,field:'address_id'},
//	customField:{type:Sequelize.STRING,field:'custom_field'},
//	ip:{type:Sequelize.STRING,field:'ip'},
//	status:{type:Sequelize.STRING,field:'status'},
//	approved:{type:Sequelize.DATE,field:'approved'},
//	safe:{type:Sequelize.DATE,field:'safe'},
//	token:{type:Sequelize.DATE,field:'token'},
//	dateAdded:{type:Sequelize.DATE,field:'date_added'},
//	confirmCode:{type:Sequelize.DATE,field:'confirm_code'}
//  
//});
//
//Customer.sync().on('success', function(){
//    console.log("on success....");
//}).on('failure', function(){
//	console.log("on failed.......");
//});
//
//Customer.getCustomer=function(condition){
//	console.log('customer_query....');
////	sequelize.query('select * from oc_customer where customer_id=?');
//	var resulte = Customer.find({where: {customer_id: 1}});
//	return resulte;
//	
//}



