function userController($scope) {
$scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, fName:'Mary',  lName:"Jones" },
{id:2, fName:'Grant',   lName:"Stone" },
{id:3, fName:'Clement',   lName:"McFarland" },
{id:4, fName:'Adam',  lName:"Campbell" },
{id:5, fName:'Jane',  lName:"Larsson" },
{id:6, fName:'Charles', lName:"Smith" }
];
$scope.edit = true; 
$scope.error = false;
$scope.incomplete = false;
$scope.counter = 6;   // steve: start out with 6 users
$scope.alwaysfalse = false;//steve

$scope.editUser = function(id) {
  if (id == 'new') { //this is what happens when press create new user button
    $scope.edit = true; 
    $scope.incomplete = false;
    //$scope.fName = '';
    //$scope.lName = '';
    $scope.passw1 = ''; //note: I added this so when hit "Create New User" button again, it also clears "Password" field
    $scope.passw2 = ''; //note: I added this so when hit "Create New User" button again, it also clears "Repeat" field
    var user = {  //I added this code block
      id: $scope.counter+1,//steve
      fName: $scope.fName,
      lName: $scope.lName,
    }
    ++$scope.counter;//steve

    $scope.users.push(user);//I added this line of code to add user when hit "Create New User"

  } else { //this is what happens when press edit button
    $scope.passw1 = ''; //I added this to clear passw1 field
    $scope.passw2 = ''; //I added this to clear passw2 field
    $scope.edit = false;
    $scope.fName = $scope.users[id-1].fName;
    $scope.lName = $scope.users[id-1].lName;
  }
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});

$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.fName.length || 
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
       $scope.incomplete = true;
  }
};

}