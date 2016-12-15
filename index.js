var express = require('express')
var exsession = require('express-session');	
var cookieParser=require('cookie-parser');
var validate = require('./model/validate');
var student_validate = require('./model/Student_Validation');
var attendance = require('./model/MarkAttendance');
var Attendance_Analysis = require('./model/Attendance_Analysis');
var individual = require('./model/individual');
var studentatt = require('./model/studentatt');
var absent = require('./model/absent');
var successadd = require('./model/successadd');

var genuuid = require('./model/genuuid');
var sync = require('synchronize');
var url=require('url');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static(__dirname+"/"));
app.use(cookieParser());
app.use(exsession({secret: 'keyboard cat', resave: true, saveUninitialized: false, cookie: {httpOnly:false, maxAge: 2000 }}))
app.use("/bower_components", express.static(__dirname + "/bower_components"));		
			

app.post('/',function(req,res){
	res.sendFile(__dirname+'views/login.html');
});
app.post("/Authentic_user",validate.authenticate);
app.get('/get_barcode', attendance.GenerateBarcode);
app.get('/get_barcode_tab', attendance.GetBarcodeTab);
app.get('/Is_Student_Validate', student_validate.Isstudent_Validate);
app.get('/get_Student_From_Course',Attendance_Analysis.getAllStudentFromCourse);
app.post('/individual', individual.getdata);
app.post('/studentatt', studentatt.studentatt);
app.post('/absent', absent.absent);
app.post('/successadd', successadd.successadd);


app.listen(process.env.PORT || 3005,function(err)
{
	if(err)
	{
		console.log(err);
		console.log("listen failed");
	}
	else{ console.log("listen on 3005 port");}
});

