(function() {

    var quotesApp = angular.module('blogApp.quotes', ['blogApp.services']);

    quotesApp.controller('quotesController', function($scope, EverliveService) {
        EverliveService.getLastQuote().then(
            function(result) {
                $scope.quote = result[0].Quote;
            },
            function() {}
        );
    });

    quotesApp.directive('quotes', function() {
        return {
            restrict: 'A',
            templateUrl: '/js/components/quotes/quotesView.html',
            controller: 'quotesController'
        };
    });
})();