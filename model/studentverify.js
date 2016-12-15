var connection = require('./database');
var con = connection.con();
global.session2;  
module.exports.authenticate = function(req,res)
{
		var user=req.body.user_id;
		var pass=req.body.pass;
		var sql = "select * from student where student_id ='"+user+"'";
        var data={	
		
			student_name : '',
			Courses :[]
		};
		
			con.query(sql, function(error,rows)
			{				
			
				if(!error && rows.length>0)
				{
					
						if(user == rows[0].student_id && pass == rows[0].student_pwd)
						{
							    req.session.username = rows[0].student_id ;	
							    var json={stat:"right"};
								
								sql="select * from student join course_enrollment as ce on student.student_id = ce.student_id where student.student_id="+rows[0].student_id+"";				
							
								con.query(sql, function(error,rows)
		                        {			
		                             	if(!error && rows.length>0)
										{
											data.student_name=rows[0].student_name;
											for(var i=0;i<rows.length;i++)
											{
												data.Courses.push({student_id:rows[i].student_id,student_name:rows[i].student_name});
												
											}
											req.session.data=data;
											//console.log(data);
											res.contentType('application/json');
											res.send(JSON.stringify(data));
								
										}
								});
								
						}
						else
						{
							
					           var json={stat:true};
					           res.contentType('application/json');
	                           res.send(JSON.stringify(json));
							   return false;
						}
				}
				
			});
			
}

