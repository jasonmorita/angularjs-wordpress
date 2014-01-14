'use strict';


// Declare app level module which depends on filters, and services
var wp = angular.module('wp', ['ngRoute']);

wp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/recent_posts', {
    	templateUrl: '/recent_posts.html', 
    	controller: 'RecentPostsCtrl'
    });

    $routeProvider.when('/post/:id', {
    	templateUrl: '/post.html', 
    	controller: 'PostCtrl'
    });

    $routeProvider.otherwise({
    	redirectTo: '/recent_posts'
    });
}]);

wp.filter('mysqlDateFilter', function() {
    return function(dateSTR) {
        if (typeof dateSTR !== "undefined"){
            var o = dateSTR.replace(/-/g, "/"); // Replaces hyphens with slashes
            return Date.parse(o + " -0000"); // No TZ subtraction on this sample
        }
    }
});