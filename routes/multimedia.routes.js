/**
 * Created by buirai on 29/11/2016.
 */
'use strict';


angular.module('multimedia').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../views/multimedia/multimedia-list.view.html',
        controller: 'MultimediaController'
    }).when('/multimedia/:multimediaId', {
        templateUrl: '../views/multimedia/multimedia-view.view.html',
        controller: 'MultimediaController'
    });
}]);