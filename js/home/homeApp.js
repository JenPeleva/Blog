(function() {
    var homeApp = angular.module('blogApp.home', ['ngRoute','blogApp.services']);

    homeApp.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'js/home/homeView.html',
        controller: 'homeController'
      });
    }]);

    homeApp.controller('homeController', function($scope,EverliveService) {    	
    	
    	EverliveService.getBlogPosts(5).then(
	        function(result) { 
	              $scope.blogPosts = result;
	        },
        	function() {
      		}
      	);
    });

    homeApp.filter('formatDate', function(){
        return function(input, url) {
          
          return input;
        };
    });
})();