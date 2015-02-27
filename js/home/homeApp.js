(function() {
    var homeApp = angular.module('blogApp.home', ['ngRoute','blogApp.services']);

    homeApp.controller('homeController', function($scope,EverliveService) {    	
    	
    	EverliveService.getBlogPosts(5).then(
	        function(result) { 
	              $scope.blogPosts = result;
	        },
        	function() {
      		}
      	);
    });
})();