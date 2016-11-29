/**
 * Created by SkyN on 27/11/2016.
 */

'use strict';

var app = angular.module('project', ['ui.router','ui.bootstrap']);

app.config(function($stateProvider){
    $stateProvider
        .state('userGroups', {
            abstract: true,
            url: '/userGroups',
            template: '<ui-view/>'
        })
});

app.controller('main', ['$scope', function($scope){

}]);

app.controller('carousel-controller',['$scope', function(){
}]);