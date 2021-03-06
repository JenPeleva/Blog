(function() {
    var detailsApp = angular.module('blogApp.details', ['ngRoute', 'blogApp.services', 'angularUtils.directives.dirDisqus']);

    detailsApp.controller('detailsController', [ "$window", "$scope", "$stateParams", "KinveyService", "MetaInformationService","$timeout","$rootScope", function($window, $scope, $stateParams, KinveyService, MetaInformationService,$timeout,$rootScope) {        
        $scope.contentLoaded = false;
        KinveyService.getBlogPostByUrl($stateParams.url).then(
            function(result) {
                $scope.post = result;
                $scope.post.Comments = $scope.post.Comments || [];
                $window.document.title = result.Title;
                $rootScope.pageTitle = result.Title;
                MetaInformationService.setMetaDescription(result.MetaDescription);
                MetaInformationService.setMetaKeywords(result.MetaKeywords);
                $timeout(function(){
                    $scope.contentLoaded = true;
                    $scope.disqusUrl = $window.location.href;  
                    // KinveyService.resizeImages().then(function(result){                        
                    // });
                }, 0);

            },
            function() {}
        );

        $scope.addComment = function(){
            var newComment = {'Author': $scope.newCommentAuthor,'Comment' : $scope.newCommentPost, 'Date': new Date()} ;

            KinveyService.addNewComment($scope.post.Id, newComment).then(
                function(result) {
                    $scope.post.Comments.push(newComment);
                    $scope.newCommentAuthor = '';
                    $scope.newCommentPost = '';
                },
                function() {}
            );
        }

        $scope.toggleComments = function(){
            $scope.expanded =  !$scope.expanded ? true: false;
        }
    }]);    
})();