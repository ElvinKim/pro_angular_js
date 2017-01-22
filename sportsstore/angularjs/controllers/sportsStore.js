angular.module("sportsStore")
	.constant("dataUrl", "http://localhost:5050/products")
	.controller("sportsStoreCtrl", function($scope, $http, dataUrl){

		$scope.data = {};

		$http.get(dataUrl)
			.then(function(response) {
				$scope.data.products = response.data;
			}, function(response){
				$scope.data = response;
			});
	});