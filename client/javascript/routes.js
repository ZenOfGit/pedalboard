angular.module('pedalApp')

.config(function ($routeProvider) {
    $routeProvider.when('/pedals', {
            templateUrl: '/client/templates/pages/pedals/index.html',
            controller: 'PedalsController',
            controllerAs: 'pedalsCtrl'
        })
        .when('/effects', {
            templateUrl: '/client/templates/pages/effects/index.html',
        })
        .when('/', {
            remplateUrl: '/client/templates/pages/pedals/index.html',
        })
        .otherwise({
            redirectTo: '/'
        });
});
