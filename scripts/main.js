var initialized = false;	
var namespace='Assistant'

var app = angular.module(namespace, ['ngRoute','kinvey']);

app.config(function($routeProvider){
	$routeProvider 
		.when('/', {
			templateUrl : '/views/home.html',})
		.when('/williambuchina', {
			templateUrl : '/views/williambuchina.html',})
		.when('/collinkillian', {
			templateUrl : '/views/collinkillian.html',})
		.when('/samuelstabler', {
			templateUrl : '/views/samuelstabler.html',})
		.when('/home', {
			templateUrl : '/views/home.html',})

		.otherwise({redirectTo : '/'});
});
