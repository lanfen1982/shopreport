'use strict';

var reportApp = angular.module('reportApp', [
	'ngRoute',
	'shopCtrl',
	]);

reportApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/shopdetail', {
			templateUrl: 'tpls/shop-detail.html',
			controller: 'shopDetailCtrl'
		}).otherwise({
			redirectTo: '/shopdetail'
		});

	}]);
