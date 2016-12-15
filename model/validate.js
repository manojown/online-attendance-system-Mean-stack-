var connection = require('./database');
var con = connection.con();
global.session2;  
var result;
var k=5;
module.exports.authenticate = function(req,res)
{
		var user=req.body.user_id;
		var pass=req.body.pass;
		var sql = "select * from faculty where faculty_id ='"+user+"'";
		var ttsql =" select DISTINCT courses.course_id ,courses.course_name, day.day , tt.start,tt.end  from courses INNER join tt ON  courses.course_id = tt.course_id AND courses.faculty_id='"+user+"' JOIN day ON tt.day = day.id ORDER BY day.day ";
		var total_att = "select course_id,t1.course_name,COUNT(*) as total from (select attendance.course_id,courses.course_name, COUNT(*) as total from courses join attendance on courses.course_id = attendance.course_id AND courses.faculty_id='"+user+"' GROUP BY attendance.course_id, attendance.date) as t1 GROUP BY course_id";
		var result=false;
	
		var data={	
		
			Faculty_name : '',
			Courses :[],
			courses_t:[],
			courses_attendance:[]

		};
		
			con.query(sql, function(error,rows)
			{				
					con.query(ttsql, function(error,rows)
					{
						if(!error && rows.length>0)
						{	
							//console.log(rows[0].course_id);
							for(var i=0;i<rows.length;i++)
							{
								data.courses_t.push({course_id:rows[i].course_id,course_name:rows[i].course_name,day:rows[i].day,start:rows[i].start,end:rows[i].end});
												
							}

						}else{
							console.log("non sucessfull");
						}
						//console.log(data);
					
					});
					con.query(total_att, function(error,rows)
					{
						if(!error && rows.length>0)
						{	
							//console.log(rows[0].course_id);
							for(var i=0;i<rows.length;i++)
							{
								data.courses_attendance.push({course_id:rows[i].course_id,course_name:rows[i].course_name,total:rows[i].total});
								
							}

							//console.log(data.courses_attendance+"asfasfasfasfasf")
						}else
						{
							console.log("non sucessfull");
						}
					
					});
			

				if(!error && rows.length>0)
				{
					
						if(user == rows[0].faculty_id && pass == rows[0].faculty_pwd)
						{
							    req.session.username = rows[0].faculty_id ;	
							    var json={stat:"right"};
								
								sql="select f.faculty_name,c.course_id,c.course_name from faculty f join courses c on f.faculty_id=c.faculty_id where f.faculty_id='"+user+"' ";				
							
								con.query(sql, function(error,rows)
		                        {			
		                             	if(!error && rows.length>0)
										{
											data.Faculty_name=rows[0].faculty_name;
											for(var i=0;i<rows.length;i++)
											{
												data.Courses.push({course_id:rows[i].course_id,course_name:rows[i].course_name});
												
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

module.exports.existingclient = function(req,res)
{
        var data=req.session.data;
		console.log(req.session.data);
	    res.contentType('application/json');
	    res.send(JSON.stringify(data));	
		
}
