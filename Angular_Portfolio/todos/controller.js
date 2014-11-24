var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {

	$scope.newTodo = '';
	$scope.updateTodo = '';
	$scope.rememberIndex = -1; 

	$scope.todos = [
		'Read about ngRoute',
		'Determine the limitations of using ng-include',
		'Study Protractor Configuration'
	];

	$scope.done = function(todo) {
		var index = $scope.todos.indexOf(todo);
		if (index !== -1) {
			$scope.todos.splice(index, 1);
		}
	};

	$scope.edit = function(todo) { 
		var index = $scope.todos.indexOf(todo);  
		$scope.rememberIndex = index; 
		$scope.updateTodo = $scope.todos[index];	
	};

	$scope.save = function() {
		if ($scope.rememberIndex !== -1) { 
			$scope.todos[$scope.rememberIndex] = $scope.updateTodo; 
		}
		$scope.updateTodo = '';
		$scope.rememberIndex = -1; 
	}

	$scope.add = function(e) {
		if (e.which && e.which === 13) {
			$scope.todos.push($scope.newTodo);
			$scope.newTodo = '';
		}
	};

});