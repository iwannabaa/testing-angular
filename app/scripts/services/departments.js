'use strict';

var app = angular.module('torogozApp');

app.factory('Department', function () {

	var factory = {};

	var depts = [
		{
			id: 1,
			name: 'Santa Ana',
			code: 'SA',
			coverImgUrl: 'images/santa-ana-cover.jpg',
			slideImgs: [
				'http://www.viajejet.com/wp-content/viajes/Volcan-Santa-Ana.png',
				'http://cdnwine.diario1.com/wp-content/uploads/2013/11/Volcan-de-Santa-Ana.-Lago-Coatepeque-770x438.jpg',
				'http://mitm.elsalvador.travel/wp-content/uploads/2010/11/Santa-Ana.jpg'
			]
		},
		{
			id: 2,
			name: 'Ahuachapan',
			code: 'AH',
			coverImgUrl: 'images/ahuachapan-cover.jpg'
		},
		{
			id: 3,
			name: 'Sonsonate',
			code: 'SO',
			coverImgUrl: 'images/sonsonate-cover.jpg'
		},
		{
			id: 4,
			name: 'La Libertad',
			code: 'LL',
			coverImgUrl: 'images/la-libertad-cover.jpg'
		},
		{
			id: 5,
			name: 'Chalatenango',
			code: 'CH',
			coverImgUrl: 'images/chalatenango-cover.jpg',
			slideImgs: [
				'http://cri.catolica.edu.sv/turismo/images/visitas%20de%20campo/artesania.jpg',
				'http://mw2.google.com/mw-panoramio/photos/medium/15285221.jpg'
			]
		},
		{
			id: 6,
			name: 'Cuscatlán',
			code: 'CU',
			coverImgUrl: 'images/cuscatlan-cover.jpg',
			slideImgs: [
				'http://www.suchitoto-el-salvador.com/pics/tercios%20cmprsd.jpg',
				'http://fotos.lavozdigital.es/200908/zny4iz019490-02-640x640x80.jpg'
			]
		},
		{
			id: 7,
			name: 'San Salvador',
			code: 'SS',
			coverImgUrl: 'images/san-salvador-cover.jpg',
		},
		{
			id: 8,
			name: 'La Paz',
			code: 'LP',
			coverImgUrl: 'images/la-paz-cover.jpg'
		},
		{
			id: 9,
			name: 'Cabañas',
			code: 'CB',
			coverImgUrl: 'images/cabanas-cover.jpg'
		},
		{
			id: 10,
			name: 'San Vicente',
			code: 'SV',
			coverImgUrl: 'images/san-vicente-cover.jpg'
		},
		{
			id: 11,
			name: 'Usulután',
			code: 'US',
			coverImgUrl: 'images/usulutan-cover.jpg'
		},
		{
			id: 12,
			name: 'San Miguel',
			code: 'SM',
			coverImgUrl: 'images/san-miguel-cover.jpg'
		},
		{
			id: 13,
			name: 'Morazán',
			code: 'MO',
			coverImgUrl: 'images/morazan-cover.jpg'
		},
		{
			id: 14,
			name: 'La Unión',
			code: 'LU',
			coverImgUrl: 'images/la-union-cover.jpg'
		}
	];	

	factory.list = function() {
		return depts;
	};

	return factory;
});