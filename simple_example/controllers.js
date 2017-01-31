var controllersModule = angular.module("exampleApp.Controllers", []);

controllersModule
	.controller("dayCtrl", function($scope, days) {
		$scope.day = days.today;
	})
	.controller("tomorrowCtrl", function($scope, days) {
		$scope.day = days.tomorrow;
	});
