var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'app/views/home.html'
        })
        .when('/main', {
            templateUrl: 'app/views/main.html',
            controller: 'controller1'
        }).otherwise({
            redirectTo: '/home'
        });


}]);

myApp.controller('controller1', ['$scope', '$http', function ($scope, $http) {

    $scope.addPerson = function(users) {
        $scope.users.push({
            name: $scope.newperson.name,
            email: $scope.newperson.email
        });

        $scope.newperson.name = "";
        $scope.newperson.email = "";
    };

    $scope.removePerson = function (user) {
        var removedPerson = $scope.users.indexOf(user);
        $scope.users.splice(removedPerson, 1);
    };

    $http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            $scope.users = response.data;
        });

    /*
$scope.addPerson = function (person) {
        $scope.people.push({
            name: $scope.newperson.name,
            value: parseInt($scope.newperson.value),
            available: true
        });

        $scope.newperson.name = "";
        $scope.newperson.value = "";
    };

    $scope.removePerson = function (person) {
        var removedPerson = $scope.people.indexOf(person);
        $scope.people.splice(removedPerson, 1);
    };

    $http.get('app/data/people.json')
        .then(function (response) {
            $scope.people = response.data;
    });
    */
}]);