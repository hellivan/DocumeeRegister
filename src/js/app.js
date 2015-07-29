angular.module('documee_register', ['ngRoute', 'ui.bootstrap', 'ui.router', 'controllers', 'services'])
    .config(['$routeProvider', '$documeeApiProvider', function($routeProvider, $documeeApiProvider) {

        $routeProvider
            .when('/register', {
                templateUrl: 'templates/registration.html',
                controller: 'RegistrationController'
            })
            .when('/checkKey', {
                templateUrl: 'templates/check_key.html',
                controller: 'ValidationController'
            })
            .otherwise({redirectTo: '/register'});

        $documeeApiProvider.setHostAddress("http://documee-protoype.herokuapp.com/");
    }]);




