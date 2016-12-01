/**
 * Created by buirai on 29/11/2016.
 */
'use strict';
angular.module('multimedia').config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('multimedia.list', {
            url: '/',
            controller: 'MultimediaController',
            templateUrl: '/views/multimedia/multimedia-list.view.html'
        });
}]);