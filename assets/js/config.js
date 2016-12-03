/**
 * Created by SkyN on 27/11/2016.
 */

'use strict';

// var app = angular.module('project', ['ngRoute', 'ui.router','ui.bootstrap']);


mainApplicationModule.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../views/multimedia/multimedia-list.view.html',
        controller: 'MultimediaController'
    });
});

mainApplicationModule.controller('main', ['$scope', function($scope){

}]);

mainApplicationModule.controller('carousel-controller',['$scope', function(){
}]);