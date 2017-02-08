angular.module('pedalApp')

.controller('EffectsController', function($http) {
    var controller = this;
    $http({method: 'GET',
           url: '/client/effects.json'}).then(function(data) {
        controller.effects = data;
    });
});