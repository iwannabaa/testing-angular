'use strict';

var app = angular.module('torogozApp');

app.factory('Department', function () {

	var factory = {};

	var depts = [
		{
			id: 1,
			name: 'Santa Ana',
			code: 'SA'
		},
		{
			id: 2,
			name: 'Ahuachapan',
			code: 'AH'
		},
		{
			id: 3,
			name: 'Sonsonate',
			code: 'SO'
		}
	];	

	factory.list = function() {
		return depts;
	};

	return factory;
});