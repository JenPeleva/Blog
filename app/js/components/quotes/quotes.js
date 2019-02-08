(function() {

    var quotesApp = angular.module('blogApp.quotes', ['blogApp.services']);

    quotesApp.controller('quotesController',["$scope", "KinveyService", function($scope, KinveyService) {
        KinveyService.getLastQuote().then(
            function(result) {
                $scope.quote = result[0].Quote;
                $scope.author = result[0].Author;
            },
            function() {}
        );
    }]);

    quotesApp.directive('quotes', function() {
        return {
            restrict: 'A',
            templateUrl: 'js/components/quotes/quotesView.html',
            controller: 'quotesController'
        };
    });
})();