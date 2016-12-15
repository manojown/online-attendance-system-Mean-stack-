'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
var MyApp=angular.module('yapp');
 MyApp.controller('DashboardCtrl', function($scope, $http,$state,$timeout,$window,MyService,$rootScope)
 {
 	var days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];

	$scope.course_id;
	 $scope.student_id;
    $scope.$state = $state;
	$scope.Faculty_name=MyService.getFaculty_Name();
	$scope.Courses=MyService.getCourses_Name();
		$scope.coursestt=MyService.gettimetable();// for time table
		$scope.coursenum = MyService.getcoursenum();
		
				
				
			
				

		
		$scope.data1 = days[new Date().getDay()];
	$scope.Student_Name;
	
		$scope.options = {
                        width: 10,
                        height: 500,
                        quite: 0,
                        displayValue: true,
                        font: "monospace",
                        textAlign: "center",
                        fontSize: 30,
                        backgroundColor: "",
                        lineColor: "#000000"
                    };
   
   $scope.number=100784100807;
   $scope.$watch(myLoop());
   $scope.JsonObj={"key":"123545"};
   var i = 0;   
   //  set your counter to 
function myLoop () 
{
   $timeout(function() 
   {  
   
      if (i < 5) 
	  {        	
		// $scope.number=$scope.numbers[i].value;
		// console.log($scope.numbers[i].value);
		 i++;
		 myLoop(); 
      }
	  else if (i>=5 && i<=6)
	  {
		  i++;
		myLoop();
		
	  }
	  else
	  {
		  
		  $window.close();
		  
	  }
	   	  
   }, 5000);
}
	 $scope.yesstyle="btn btn-default";
     $scope.nostyle="btn active btn-danger";
    
	 
	 
	 $scope.barcode_data;
	 $scope.numbers;
	 
	 $scope.start=function(event)
	 {
		 
		$scope.course_id=event.target.id;
		 $http.get("/get_barcode",{params:{course_id:$scope.course_id}}).success(function(data)
				{
		         $scope.barcode_data = data; // get data from json
		        // console.log(data);
				 $scope.Student_Name=data.value;
				// console.log($scope.Student_Name);
		        //  myLoop();		  
				})
	     .error(function()
	     {
            console.log('Unable to retrieve info form JSON file.');		
          }); 
		  
		// Get All student From That course_id
			
	$http.get("/get_Student_From_Course",{params:{course_id:$scope.course_id}}).success(function(data)
		{
				$rootScope.flag = "false";
		         //console.log(data);
				 $rootScope.student = data;
				// console.log("after data");
				// console.log(data[0].student_id);
				
				//console.log($rootScope.student);
				 
				 			   
		})
	     .error(function()
	     {
            console.log('Unable to retrieve info form JSON file.');		
          }); 
		
	}
	$scope.getatt = function(id,total,name){
		$scope.cid = id;
		$scope.total = total;
		$scope.name = name;
		//console.log($scope.cid+" "+"print is");
		$http.post("/individual",{cid:$scope.cid,total:$scope.total,name:$scope.name}).success(function(data)
		{
			//console.log(id);
			$rootScope.attendancereport = data;
		});

	}
	$scope.absent = function(cid){
		$scope.cid = cid;
		
		$http.post("/absent",{cid:$scope.cid}).success(function(data)
		{
			//console.log(id+"print")
			
			$rootScope.absent1 = data.student_details;
			$rootScope.cid12 = data.cid;
			console.log($scope.cid);

		});

	}
	$scope.submit = function(cid){
		$scope.cid = cid;

		
		$http.post("/successadd",{cid:$scope.cid,arr:$rootScope.att }).success(function(data)
		{
			//console.log(id+"print")
			
			$rootScope.success = data;

		});

	}

	
	$scope.studentatt = function(sid,name,cid){
		$scope.cid = cid;
		$scope.sid = sid;
		$scope.name = name;
		$http.post("/studentatt",{cid:$scope.cid,sid:$scope.sid,name:$scope.name}).success(function(data)
		{
			//console.log(id+"print")
			//console.log(data);
			$rootScope.attendday = data;
			attdata1.arr = data;
	
		});

	}

	var arr = [];
	
	$scope.markAttendance=function(sid)
	{
		  //$scope.formData = { flag : 'UnMark'};
	
			//$rootScope.attendday.push({event:"manoj"})
		arr.push(sid);
		var index = $rootScope.absent1.indexOf(sid);
		  if (index > -1) {
    			$rootScope.absent1.splice(index, 1);
			}
		
		//$rootScope.attendday.remove({sid});
		//$scope.yesstyle="btn active btn-success";
		//$scope.nostyle="btn btn-default";
		$rootScope.att = arr;
		console.log($rootScope.att);


		
	}
	$scope.removeAttendance=function(sid)
	{
		  //$scope.formData = { flag : 'UnMark'};
		  var index = arr.indexOf(sid);
		  if (index > -1) {
    			arr.splice(index, 1);
			}
		$rootScope.absent1.push(sid);
	arr.remove(sid);

		//$scope.yesstyle="btn active btn-success";
		//$scope.nostyle="btn btn-default";
		$rootScope.att = arr;
		//console.log($rootScope.att);
		
	}
	
	

 });	 	
