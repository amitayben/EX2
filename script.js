// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'glasses.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/red_wine', {
                templateUrl : 'red wine.html',
                controller  : 'dogsController'
            })

            // route for the contact page
            .when('/cognac', {
                templateUrl : 'cognac.html',
                controller  : 'catController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Welcome to the glasses master zone!';
            $scope.image ='glasses.jpg';

    });

    scotchApp.controller('dogsController', function($scope) {
        $scope.message = 'red wine like to brave the air.'
        $scope.image ='red wine.jpg';
;
    });

    scotchApp.controller('catController', function($scope) {
        $scope.message = 'your nose closed locked the aroma.'
         $scope.image ='cognac.jpg';
;
    });

                