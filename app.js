var cubicleApp = angular.module('cubicleApp', ['ui.router', 'ngAnimate', 'ui.bootstrap','ngSanitize']);
   
cubicleApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeController' 
        });
});


