var connection = require('./database');
var con = connection.con();

module.exports.GenerateBarcode= function(request,response)
{
		
	var number=100784100807;
	var course_id=request.query.course_id;
	 if (request.method == 'GET')
     {	 
		 var jsonObj2=
		 {
			 course_id:'',
			 value:[]
		 }; 
		 jsonObj2.course_id=course_id;
		 for(var i=1;i<=5;i++)
		 {
			jsonObj2.value.push(
			{
             value: number
            }
		  );
		  
		  number=parseInt(number/0.2);
		 }
		 
		response.contentType('application/json');
	    response.send(JSON.stringify(jsonObj2));
     }					
}
module.exports.GetBarcodeTab= function(request,response)
{
	response.sendFile(__dirname+"/views/barcode_page.html");
	
}

module.exports.MarkAttendance= function(req,res)
{
		
		//console.log("fires");
		var course_id=req.body.course;
		//console.log(course_id);
		var sql = "select s.student_id,student_name,ce.course_id from student as s join course_enrollment as ce on s.student_id=ce.student_id where ce.course_id ='"+course_id+"'";
		session2=req.session;
		
			con.query(sql, function(error,rows)
			{
		
				if(!error)
				{
					res.send(JSON.stringify(rows));
					
						
				}
				else
			    {
					console.log(error);
				}
			});
}
			