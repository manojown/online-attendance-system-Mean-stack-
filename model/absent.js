var connection = require('./database');
var con = connection.con();
//console.log("calleddlllllllllll");

module.exports.absent = function(req,res)
{
//console.log("calleddlllllllllll111118888");
var cid =  req.body.cid
			
var sql = "SELECT * from course_enrollment WHERE course_enrollment.course_id='"+req.body.cid+"' and course_enrollment.student_id NOT IN (select attendance.student_id from attendance where attendance.course_id='"+req.body.cid+"' and attendance.date=CURRENT_DATE)";
			
					con.query(sql, function(error,rows)
					{
						var data = {
							student_details:[],
							cid:req.body.cid
						

						}

	
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