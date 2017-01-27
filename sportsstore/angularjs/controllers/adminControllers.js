angular.module("sportsStoreAdmin")
	.constant("authUrl", "http://localhost:5050/users/login")
	.controller('authCtrl', function($scope, $http, $location, authUrl) {

		$scope.authenticate = function(user, pass) {
			$http.post(authUrl, {
				username : user,
				password : pass
			}).then(function(response){
				$location.path("/main");
			}, function(response){
				$scope.authenticateError = response.error;
			});
		}
	});