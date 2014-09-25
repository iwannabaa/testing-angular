'use strict';

var app = angular.module('torogozApp');

app.controller('MainCtrl', function ($scope, Department) {
	
	$scope.departments = Department.list();
	
});