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

    $http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            $scope.users = response.data;
            $scope.response = response;
        });

}]);