var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'controller1'
        }).otherwise({
            redirectTo: '/home'
        });


}]);

myApp.controller('controller1', ['$scope', '$http', function ($scope, $http) {

    

}]);