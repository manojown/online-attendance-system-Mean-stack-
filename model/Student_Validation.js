var connection = require('./database');
var con = connection.con();

module.exports.Isstudent_Validate= function(req,res)
{
		
		//console.log("fired");
		var course_id=req.query.course_id;
		//console.log(course_id);
		var sql = "select s.student_id,student_name,s.student_pwd from student as s join course_enrollment as ce on s.student_id=ce.student_id where ce.course_id ='"+course_id+"'";
		
		var data=[];
			con.query(sql, function(error,rows)
			{
		
				if(!error && rows.length>0)
			    {
             
   			        for(var i=0;i<rows.length;i++)
					{
					    data.push({student_id:rows[i].student_id,student_name:rows[i].student_name});							
				    }
					
					//console.log(data);
					res.contentType('application/json');
				    res.send(data);
					
				}
				else
			    {
					console.log(error);
				}
			});
}

module.exports.getCourseByFaculty= function(req,res){
		
		//console.log("fires");
		var faculty_id=req.body.faculty;
		//console.log(faculty_id);
		var sql = "select f.faculty_id,f.faculty_name,c.course_id,c.course_name from faculty f join courses c on c.faculty_id=f.faculty_id where f.faculty_id ='"+faculty_id+"'";
		session2=req.session;
		
			con.query(sql, function(error,rows)
			{
				if(!error)
				{
					res.contentType('application/json');
				    res.send(JSON.stringify(rows));		
				}
			});
}