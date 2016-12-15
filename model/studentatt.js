var connection = require('./database');
var con = connection.con();

//console.log("calleddlllllllllll");

module.exports.studentatt = function(req,res,next)
{
//console.log("calleddlllllllllll111118888");
 var sql = "SELECT * from attendance where attendance.student_id='"+req.body.sid+"' and course_id='"+req.body.cid+"'";
			//console.log(req.body.cid);
			var days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
					con.query(sql, function(error,rows)
					{
						var data = {
							studentatt:[],
							total:[]
						}
	
						if(!error && rows.length>0)
						{	
							//console.log(rows);
							for(var i=0;i<rows.length;i++)
							{
								var d = new Date(rows[i].date);
  								 var n = d.getDay()
								data.studentatt.push({day:days[n],date:rows[i].date})

							}
							data.total.push({cid:req.body.cid,name:req.body.name,sid:req.body.sid})

				    res.send(JSON.stringify(data));
						}

						else{
							console.log("non sucessfull");
						}
					
					});
				


}
