(function() {
    var detailsApp = angular.module('blogApp.details', ['ngRoute', 'blogApp.services']);

    detailsApp.controller('detailsController', function($scope, $stateParams, EverliveService) {        
        EverliveService.getBlogPostByUrl($stateParams.url).then(
            function(result) {
                $scope.post = result;
                $scope.post.Comments = $scope.post.Comments || [];
            },
            function() {}
        );

        $scope.addComment = function(){
            var newComment = {'Author': $scope.newCommentAuthor,'Comment' : $scope.newCommentPost};

            EverliveService.addNewComment($scope.post.Id, newComment).then(
                function(result) {
                    $scope.post.Comments.push(newComment);
                    $scope.newCommentAuthor = '';
                    $scope.newCommentPost = '';
                },
                function() {}
            );
        }
    });    
})();