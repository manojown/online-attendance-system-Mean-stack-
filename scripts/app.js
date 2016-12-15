'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var Myapp=angular.module('yapp', ['ui.router','ngAnimate','barcode']);

Myapp.config(function($stateProvider, $urlRouterProvider)
{

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base',{
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html',
			controller: 'DashboardCtrl'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html',
			controller: 'DashboardCtrl'
          })
		  .state('barcode_tab', {
            url: '/barcode_tab',
            templateUrl: 'views/dashboard/barcode_page.html',
			controller: 'DashboardCtrl'
          })
		  .state('timetable', {
            url: '/timetable',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/TimeTable.html',
			controller: 'DashboardCtrl'
          }).state('totalreport', {
            url: '/totalreport',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/totalreport.html',
      controller: 'DashboardCtrl'
          }).state('individual', {
            url: '/individual',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/individual.html',
      controller: 'DashboardCtrl'
          }).state('studentatt', {
            url: '/studentatt',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/studentatt.html',
      controller: 'DashboardCtrl'
          }).state('absent', {
            url: '/absent',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/absent.html',
      controller: 'DashboardCtrl'
          }).state('successadd', {
            url: '/successadd',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/successadd.html',
      controller: 'DashboardCtrl'
          });
	
		  

  });

Myapp.service('MyService', function()
{
	 this.session_exist=false;
	 
     this.data={ 
	           Faculty_ID:'',
			   Faculty_Name:'',
               Courses: [],
               courses_t:[],
               courses_attendance:[]
             };
			 
    this.setData=function(data) 
	{
		this.session_exist=true;
        this.data.Faculty_Name = data.Faculty_name;//data.Faculty_name.toString();
	    this.data.Courses=data.Courses;
     this.data.courses_tt = data.courses_t
     this.data.courses_attendance = data.courses_attendance;
    

	  
    };
	
	this.setSession=function(data)
	{
	   this.session_exist=data.state;	
	};
	
	this.getSessionState=function()
	{
		return this.session_exist;
	};
	
	this.getFaculty_ID=function()
	{
			return this.data.Faculty_ID;
	};
	


    this.getFaculty_Name=function()
	{
		 return this.data.Faculty_Name;
	};

	this.getCourses_Name=function()
	{
    //console.log("==========================================================================================");
  // console.log(data);
     //console.log("==========================================================================================");
		return this.data.Courses;
	};
	 this.gettimetable=function()
  {
    //console.log("==========================================================================================");
  // console.log(data);
     //console.log("==========================================================================================");
    return this.data.courses_tt;
  };
   this.getcoursenum=function()
  {
    
    return this.data.courses_attendance;
  };
});
