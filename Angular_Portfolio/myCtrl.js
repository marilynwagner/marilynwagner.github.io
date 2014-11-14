app.controller("myCtrl", function($scope) {
    $scope.result = "";

  
   $scope.clear = function() {$scope.result = "";};
    $scope.save  = function() {
    	alert("Saved")
    ;};
}); 