(function() {
    var detailsApp = angular.module('blogApp.details', ['ngRoute', 'blogApp.services']);

    detailsApp.controller('detailsController', function($window, $scope, $stateParams, EverliveService, MetaInformationService) {        
        EverliveService.getBlogPostByUrl($stateParams.url).then(
            function(result) {
                $scope.post = result;
                $scope.post.Comments = $scope.post.Comments || [];
                $window.document.title = result.Title;
                MetaInformationService.setMetaDescription('this is from details');
            },
            function() {}
        );

        $scope.addComment = function(){
            var newComment = {'Author': $scope.newCommentAuthor,'Comment' : $scope.newCommentPost, 'Date': new Date()} ;

            EverliveService.addNewComment($scope.post.Id, newComment).then(
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
    });    
})();