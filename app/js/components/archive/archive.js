(function() {

    var archiveApp = angular.module('blogApp.archive', [ 'blogApp.services']);

    archiveApp.controller('archiveWidgetController',["$scope", "EverliveService", function($scope, EverliveService) {
       	EverliveService.getBlogPostsArchive().then(
          function(result) { 
                $scope.postsArchive = result;
          },
          function() {
          }
        );
    }]);

    archiveApp.directive('archiveWidget', function() {
        return {
            restrict: 'E',
            templateUrl: '/js/components/archive/archiveView.html',
            controller: 'archiveWidgetController'
        };
    });
})();