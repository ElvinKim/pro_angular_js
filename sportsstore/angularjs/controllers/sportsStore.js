angular.module("sportsStore")
	.constant("dataUrl", "http://localhost:5050/products")
	.constant("orderUrl", "http://localhost:5050/orders")
	.controller("sportsStoreCtrl", function($scope, $http, $location, dataUrl, orderUrl, cart){

		$scope.data = {};

		$http.get(dataUrl)
			.then(function(response) {
				$scope.data.products = response.data;
			}, function(response){
				$scope.data = response;
			});

		$scope.sendOrder = function(shippingDetails) {
			var order = angular.copy(shippingDetails);
			order.products = cart.getProducts();

			$http.post(orderUrl, order)
				.then(function(response) {
					$scope.data.orderId = response.data.id;
					cart.getProducts().length = 0;
				}, function(response){
					$scope.data.orderError = response.error;
				}).finally(function () {
					$location.path("/complete");
				});
		}
	});