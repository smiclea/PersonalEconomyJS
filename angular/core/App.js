/*jslint vars: true, sloppy: true, plusplus: true */
/*global $scope, angular */

(function () {
	'use strict';
	
	var app = angular.module('app', [
		'ngRoute',
		'appControllers',
		'appServices'
	]),
		VIEWS_PATH = 'angular/views';
	
	angular.module('appControllers', []);
	angular.module('appServices', ['ngResource']);
	
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/main', {
			templateUrl: VIEWS_PATH + '/main-view.html',
			controller: 'MainCtrl'
		}).otherwise({
			redirectTo: '/main'
		});
	}]);
}());