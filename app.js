'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('blogApp', [
  'ngRoute',
  'ui.router',
  'blogApp.home',
  'blogApp.details',
  'blogApp.search',
  'blogApp.aboutme',
  'blogApp.quotes'
]).
config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise("home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: 'js/home/homeView.html',
      controller: 'homeController'
    })
    .state('details', {
      url: '/details/:url',
      templateUrl: "js/details/detailsView.html",
      controller: 'detailsController'
    })
    .state('about', {
      url: '/about-me',
      templateUrl: 'js/aboutme/aboutMeView.html',
      controller: 'aboutMeController'
    });

}]);

app.service('MetaInformationService', function() {
	var metaDescription = '';
	var metaKeywords = '';
	return {
		metaDescription: function() { return metaDescription; },
		metaKeywords: function() { return metaKeywords; },
		reset: function() {
			metaDescription = '';
			metaKeywords = '';
		},
		setMetaDescription: function(newMetaDescription) {
			metaDescription = newMetaDescription;
		},
    setMetaKeywords: function(newMetaKeywords) {
      metaKeywords = newMetaKeywords;
    },
		appendMetaKeywords: function(newKeywords) {
			for (var key in newKeywords) {
				if (metaKeywords === '') {
					metaKeywords += newKeywords[key].name;
				} else {
					metaKeywords += ', ' + newKeywords[key].name;
				}
			}
		}
	};
});

app.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);

app.run(function($route, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, next, current) {
      var bannerClass = next.controller == 'homeController' || next.controller == 'aboutMeController' ? 'banner' : 'banner-small'; // only the home page should have the big header picture
      document.getElementById('headerPic').className = bannerClass;
  });
});