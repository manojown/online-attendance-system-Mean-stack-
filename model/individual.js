var connection = require('./database');
var con = connection.con();
//console.log("calleddlllllllllll");

module.exports.getdata = function(req,res)
{
//console.log("calleddlllllllllll111118888");
var cid =  req.body.cid
			 var total = req.body.total;
var sql = "select attendance.student_id ,student.student_name, COUNT(*) as total from attendance Join student on attendance.student_id=student.student_id where attendance.course_id = '"+cid+"' GROUP BY attendance.student_id";
			
					con.query(sql, function(error,rows)
					{
						var data = {
							student_details:[],
							total :[]

						}

	
						if(!error && rows.length>0)
						{	
							//console.log(rows);
							for(var i=0;i<rows.length;i++)
							{
								data.student_details.push({student_id:rows[i].student_id,student_name:rows[i].student_name,total:rows[i].total})

							}

							data.total.push({total:req.body.total,cid:req.body.cid,name:req.body.name});
				    res.send(JSON.stringify(data));
						}

						else{
							console.log("non sucessfull");
						}
					
					});
				


}