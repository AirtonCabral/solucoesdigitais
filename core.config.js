(function () {
	'use strict';

	angular
		.module('app')
		.config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise("/login");

			$stateProvider
				.state('login', {
					url: "/login",
					templateUrl: "./pages/login/login.html",
					controller: 'loginController as vm'
				})
				.state('home', {
					url: "/home",
					templateUrl: "./pages/home/home.html",
					controller: 'homeController as vm'
				})
		});

})();