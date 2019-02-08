(function() {

    var archiveApp = angular.module('blogApp.archive', [ 'blogApp.services']);

    archiveApp.controller('archiveWidgetController',["$scope", "KinveyService", function($scope, KinveyService) {
       	KinveyService.getBlogPostsArchive().then(
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