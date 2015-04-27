(function() {

    var quotesApp = angular.module('blogApp.quotes', [ 'blogApp.services']);

    quotesApp.controller('quotesController', function($scope, EverliveService) {
     	    $scope.quote = 'Always do your best. What you plant now, you will harvest later.';
    });
    
    quotesApp.directive('quotes', function() {
        return {
            restrict: 'A',
            templateUrl: '/js/components/quotes/quotesView.html',
            controller: 'quotesController'
        };
    });
})();