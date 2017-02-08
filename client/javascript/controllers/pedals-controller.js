angular.module('pedalApp')

.controller('PedalsController', function($http) {
    var controller = this;
    controller.pedals = [];
    $http({method: 'GET',
           url: '/client/data/pedals.json'}).then(function(data) {
        console.log('Pedals controller fired...');
        controller.pedals = data;
    });
});