var connection = require('./database');
var con = connection.con();
//console.log("calleddlllllllllll");

module.exports.successadd = function(req,res)
{
//console.log("calleddlllllllllll111118888");
var cid =  req.body.cid;
var arr = req.body.arr;
console.log(arr);
var s = '';
			for(var i=0;i<arr.length;i++){
				if(arr.length>1){
					if(arr.length-1==i){
						s += "('"+arr[i]+"','"+cid+"','"+new Date().toJSON().slice(0,10)+"')";
					}else{
						s += "('"+arr[i]+"','"+cid+"','"+new Date().toJSON().slice(0,10)+"'),";
					}
				}else s += "('"+arr[i]+"','"+cid+"','"+new Date().toJSON().slice(0,10)+"')";			}

var sql = "INSERT INTO `attendance` (`student_id`, `course_id`, `date`) VALUES "+s;
console.log(sql);
			
					con.query(sql, function(error,rows)
					{
						
	
						if(!error && rows.length>0)
						{	
							//console.log(rows);
							for(var i=0;i<rows.length;i++)
							{
								data.student_details.push(rows[i].student_id);

							}

						//	console.log(data);
				    res.send(JSON.stringify(data));
						}

						else{
							console.log("non sucessfull");
						}
					
					});
				


}