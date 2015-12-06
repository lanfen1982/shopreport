'use strict';

var shopCtrl = angular.module('shopCtrl',[]);

shopCtrl.controller('shopDetailCtrl', ['$scope','$http',
	function($scope, $http) {
		$http.get('/data/shopdetail.json').success(function(data) {
			$scope.shopdata = data;
		} )
	} ]);
shopCtrl.controller('shopCommodityCtrl', ['$scope','$http',
	function($scope, $http) {
		$http.get('data/shopdetail.json').success(function(data) {
			$scope.shopcommodity = data;
		})
	} ]);