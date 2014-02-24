/*global $scope, angular */

(function () {
	'use strict';
	
	angular.module('appControllers').controller('MainCtrl', ['$scope', function ($scope) {
		//  GENERAL
		var i;
		
		$scope.days = [{
			number: 'Please select the income day',
			value: 'prompt'
		}];
		
		for (i = 0; i < 31; i += 1) {
			$scope.days.push({
				number: i + 1,
				value: 'day-' + (i + 1)
			});
		}
		
		$scope.incomeDay = 'prompt';
		
		$scope.onLastDayOfMonthChange = function () {
			$scope.incomeDay = 'prompt';
		};
		
		$scope.monthlyIncome = 6000;
		$scope.currentBudget = 2000;
		
		// EXPENSES
		$scope.expenses = [{
			id: 1,
			name: 'RDS',
			amount: 69
		}, {
			id: 2,
			name: 'EON',
			amount: 100
		}];
		
		$scope.$watch('expenses', function () {
			var total = 0;
			
			$scope.expenses.forEach(function (item) {
				total += parseInt(item.amount, 10);
			});
			
			$scope.monthlyExpTotal = total;
		}, true);
		
		$scope.addNewExpense = function () {
			$scope.expenses.push({
				id: $scope.expenses.length + 1,
				name: $scope.newExpenseName,
				amount: $scope.newExpenseAmount
			});
			
			$scope.newExpenseName = '';
			$scope.newExpenseAmount = '';
		};
		
		$scope.onExpenseClick = function (expense) {
			var i;
			for (i = 0; i < $scope.expenses.length; i += 1) {
				$scope.expenses[i].editMode = $scope.expenses[i].id === expense.id;
			}
		};
		
		$scope.onEditOkClick = function () {
			var i;
			for (i = 0; i < $scope.expenses.length; i += 1) {
				$scope.expenses[i].editMode = false;
			}
		};
		
		$scope.onRemoveExpenseClick = function (index) {
			$scope.expenses.splice(index, 1);
		};
	}]);
}());