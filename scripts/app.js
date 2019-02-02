var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/info', {
            templateUrl: 'views/info.html',
            controller: 'controller1'
        })
        .when('/rest', {
            templateUrl: 'views/rest.html',
            controller: 'controller1'
        })
        .otherwise({
            redirectTo: '/home'
        });


}]);

myApp.controller('controller1', ['$scope', '$http', function ($scope, $http) {

    $scope.addUser = function (users) {
        var arrays = document.getElementsByTagName("tr");
        $scope.users.push({
            id: arrays.length,
            name: $scope.newuser.name,
            username: $scope.newuser.username,
            email: $scope.newuser.email
        });

        $scope.newuser.name = "";
        $scope.newuser.username = "";
        $scope.newuser.email = "";
    };

    $scope.removeUser = function (user) {
        var removedUser = $scope.users.indexOf(user);
        $scope.users.splice(removedUser, 1);
    };

    $http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            $scope.users = response.data;
            $scope.response = response;
        });
}]);