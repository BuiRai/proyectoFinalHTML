/**
 * Created by buirai on 29/11/2016.
 */

angular.module('multimedia').controller('MultimediaController', ['$scope', 'MultimediaService', '$routeParams',
    function ($scope, MultimediaService, $routeParams) {
        $scope.multimediaList = [];
        $scope.multimedia = {};

        $scope.getListMultimedia = function () {
            MultimediaService.getListMultimedia().then(function (response) {
                $scope.multimediaList = response.data;
                console.log($scope.multimediaList);
            }).catch(function (err) {
                swal({
                    title: 'Error',
                    text: 'Ocurrió un error: ' + err,
                    type: 'error'
                })
            });
        }
        
        $scope.findOne = function () {
            var multimediaId = $routeParams.multimediaId;
            MultimediaService.findOne(multimediaId).then(function (response) {
                $scope.multimedia = response.data;
                console.log($scope.multimedia);
            }).catch(function (err) {
                swal({
                    title: 'Error',
                    text: 'Ocurrió un error: ' + err,
                    type: 'error'
                })
            });

        }
    }
]);
