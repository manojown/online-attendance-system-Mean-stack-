var app=angular.module("MyApp",['barcode']);

app.controller("Barcode_controller",function($scope,$http,$window,$timeout){
	
	$scope.test="My Application";
	 $scope.options = {
                        width: 9,
                        height: 600,
                        quite: 90,
                        displayValue: true,
                        font: "monospace",
                        textAlign: "center",
                        fontSize: 120,
                        backgroundColor: "",
                        lineColor: "#000"
                    };
				
				
   $scope.number=100784100807;
   $scope.$watch(myLoop());
   $scope.JsonObj={"key":"123545"};
   var i = 0;                     //  set your counter to 1
 
function myLoop () 
{
   $timeout(function() 
   {  
      if (i < 5) 
	  {       
		$scope.number=$scope.number+12345678;
		 i++;
         myLoop();  
		 //  ..  again which will trigger another 
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
	   	  
   }, 7000);
}


	 $scope.start=function()
	 {
		 $http.get("/get_barcode").success(function(data)
	      {
		         $scope.JsonObj = data; // get data from json
		         //console.log(data);
		          myLoop();
	  })
	 .error(function()
	 {
            console.log('Unable to retrieve info form JSON file.');
			
     }); 
	 }
	$scope.submitForm=function()
	{
		
	}
	
	 
	
});

app.controller("Main_Controller",function($scope,$http)
{
	
	$scope.Fire=function()
	{
		$http.post("/get_All_Student_From_Course",{course:$scope.course}).success(function(data)
		{
				
				//console.log(data);
				 $scope.courses = angular.fromJson(data);

		});
	}
	
	$scope.Fire2=function()
	{
		$http.post("/getCourseByFaculty",{faculty:$scope.faculty}).success(function(data)
		{		
				//console.log(data);
				 $scope.facultys = angular.fromJson(data);
		});
	}
	
});
