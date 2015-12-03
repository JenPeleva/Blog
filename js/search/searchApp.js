(function() {
    var searchApp = angular.module('blogApp.search', ['ngRoute', 'blogApp.services']);

    searchApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/search/:tag', {
                templateUrl: 'js/search/searchView.html',
                controller: 'searchController'
            });
            $routeProvider.when('/archive/:month', {
                templateUrl: 'js/search/searchView.html',
                controller: 'archiveController'
            });
        }
    ]);

    searchApp.controller('searchController',["$scope", "$routeParams", "EverliveService", function($scope, $routeParams, EverliveService) {
        var tag = $routeParams.tag;
        EverliveService.getBlogPostByTag(tag).then(
            function(result) {
                $scope.blogPosts = result;
            },
            function() {}
        );
    }]);

    searchApp.controller('archiveController',["$scope", "$routeParams", "EverliveService", function($scope, $routeParams, EverliveService) {
        var month = $routeParams.month;
        EverliveService.getBlogPostsByMonth(month).then(
            function(result) {
                $scope.blogPosts = result;
            },
            function() {}
        );
    }]);
})();