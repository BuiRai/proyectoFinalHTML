/**
 * Created by buirai on 29/11/2016.
 */

angular.module('multimedia').controller('MultimediaController', ['$scope', 'MultimediaService',
    function ($scope, MultimediaService) {
        $scope.multimediaList = [];

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
    }
]);
