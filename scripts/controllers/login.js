'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
var app=angular.module('yapp');

app.controller('LoginCtrl', function($scope,MyService,$http,$location)
{
	var d;
	$scope.Login = function()
	{
		$http.post("/Authentic_user",{user_id:$scope.ID,pass:$scope.pass}).success(function(data)
		{
		 d=angular.fromJson(data);
			if(d.stat)
			{
				alert("Please Enter Valid ID and password");
				$scope.ID="";
				$scope.pass="";
			}
			else
			{
				MyService.setData(d);
				$location.path('/dashboard');
			}	
		});
    }
	var session_stat=MyService.getSessionState();

	
	if(session_stat)
	{
		MyService.setData(d);
		$location.path('/dashboard');
	}
	

  });
