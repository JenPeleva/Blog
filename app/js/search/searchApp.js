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

    searchApp.controller('searchController',["$scope", "$routeParams", "KinveyService", function($scope, $routeParams, KinveyService) {
        var tag = $routeParams.tag;
        KinveyService.getBlogPostByTag(tag).then(
            function(result) {
                $scope.blogPosts = result;
            },
            function() {}
        );
    }]);

    searchApp.controller('archiveController',["$scope", "$routeParams", "KinveyService", function($scope, $routeParams, KinveyService) {
        var month = $routeParams.month;
        KinveyService.getBlogPostsByMonth(month).then(
            function(result) {
                $scope.blogPosts = result;
            },
            function() {}
        );
    }]);
})();