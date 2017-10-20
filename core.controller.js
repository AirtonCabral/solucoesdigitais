(function(){
    'use strict';

    angular
        .module('app')
        .controller('coreController', coreController)

        coreController.$inject = [];

    function coreController() {
        /* jshint validthis:true */
        var vm = this;
        vm.title= "Titulo funcionando!"

        activate();

        function activate() { }
    }
})();