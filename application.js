/**
 * Created by buirai on 29/11/2016.
 */

var mainApplicationModuleName = 'project';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ui.router', 'multimedia']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});