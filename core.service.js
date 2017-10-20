(function(){
    'use strict';

    angular
        .module('app')
        .service('coreService', coreService)

        coreService.$inject = ['$http'];

    function coreService($http) {
        this.getData = getData;

        function getData() { }
    }
})();