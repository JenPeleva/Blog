'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('blogApp', [
  'ngRoute',
  'blogApp.home',
  'blogApp.details',
  'blogApp.search',
  'blogApp.quotes'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

app.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);

app.run(function($route, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
      var bannerClass = next.$$route.controller == 'homeController' ? 'banner' : 'banner-small'; // only the home page should have the big header picture
      document.getElementById('headerPic').className = bannerClass;
  });
});