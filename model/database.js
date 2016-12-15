
var database = { };
var mysql = require('mysql');
var connection = new mysql.createConnection({
	 
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'attendance'
  
});

connection.connect(function(err){
	if(err){
		console.log("connection failed..!!");
		console.log(err);
	}else console.log("connection successfull");
});
module.exports.con = function(){
	return connection;
}