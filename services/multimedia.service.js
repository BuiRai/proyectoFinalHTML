/**
 * Created by buirai on 04/12/2016.
 */


'use strict';

mainApplicationModule.factory('MultimediaService', ['$http', MultimediaService]);

var url = 'http://localhost:8080/api/';

function MultimediaService($http) {
    return {
        getListMultimedia: getListMultimedia,
        findOne: findOne
    };

    function getListMultimedia() {
        return $http({ method: 'GET', url: url + 'multimedias' });
    }

    function findOne(id) {
        return $http({ method: 'GET', url: url + 'multimedias/' + id });
    }
}


