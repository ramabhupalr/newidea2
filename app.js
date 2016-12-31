(function () {
    'use strict';

    angular
        .module('app', [])
        .controller('homeController', homeController);

    homeController.inject = ['$log'];
    function homeController($log) {
        var vm = this;
        vm.title = "Hello, Working Hard for 2017!!!";

        activate();

        ////////////////

        function activate() { }
    }
})();