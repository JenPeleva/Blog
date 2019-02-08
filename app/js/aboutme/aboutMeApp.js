(function() {
    var aboutMeApp = angular.module('blogApp.aboutme', ['ngRoute', 'blogApp.services']);

    aboutMeApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/about-me', {
                templateUrl: 'js/aboutme/aboutMeView.html',
                controller: 'aboutMeController'
            });
        }
    ]);

    aboutMeApp.controller('aboutMeController',["$scope", "$routeParams", "KinveyService", function($scope, $routeParams, KinveyService) {
        $scope.name = 'Jen Peleva';
    }]);
})();