(function () {
    var blogAppServices = angular.module('blogApp.services', ['kinvey']);
    blogAppServices.service('KinveyService', ['$kinvey', '$q', function ($kinvey, $q) {
        var self = this;
        var blogPostData = $kinvey.DataStore.collection('BlogPost');;
        var tagsData = $kinvey.DataStore.collection('Tags');
        var quotesData = $kinvey.DataStore.collection('Quotes');

        // this.resizeImages = function resizeImages(){
        //     var deferred = $q.defer();
        //     el.helpers.html.processAll().then(function (results) {
        //         deferred.resolve(results);
        //     });
        //     return deferred.promise;
        // }

        this.getLastQuote = function getLastQuote() {
            var query = new $kinvey.Query();
            query.descending('CreatedAt');

            var deferred = $q.defer();
            quotesData.find(query).toPromise().then(function (data) {
                deferred.resolve(data);
            },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };


        this.addNewComment = function addNewComment(blogPostId, newComment) {
            var deferred = $q.defer();
            blogPostData.save({ '_id': blogPostId, 'Comments': newComment })
            .then(function (data) {
                deferred.resolve(data);
                }
            )
            .catch(function (error) {
                deferred.reject(error);
                }
            );
            return deferred.promise;
        };

        this.getBlogPosts = function getBlogPosts(filter, take, skip) {
            if (!take) {
                take = 5;
            }
            var query = new $kinvey.Query();
            query.descending('Date');
            query.skip = skip;
            query.take = take;

            // query.where(filter).orderDesc('Date').skip(skip).take(take);

            var deferred = $q.defer();
            blogPostData.find(query).toPromise().then(function (data) {
                deferred.resolve(data);
            },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this.getBlogPostByUrl = function getBlogPostByUrl(url) {
            var deferred = $q.defer();
            var query = new $kinvey.Query();
            query.equalTo('Url', url);
            blogPostData.find(query).toPromise().then(function (data) {
                deferred.resolve(data[0]);
            },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this.addNewBlogPost = function addNewBlogPost(blogPost) {
            var deferred = $q.defer();
            blogPostData.save(blogPost).toPromise().then(function (data) {
                deferred.resolve(data);
            },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this.getBlogPostByTag = function getBlogPostByTag(tag, take, skip) {
            if (!take) {
                take = 5;
            }
            var query = new $kinvey.Query();
            query.take = take;
            query.skip = skip;
            query.descending('Date');
            query.contains('Tags', tag);
            // query.where({Tags: tag}).orderDesc('Date').skip(skip).take(take);;

            var deferred = $q.defer();
            blogPostData.find(query).toPromise().then(function (data) {
                deferred.resolve(data);
            },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this.getBlogPostsArchive = function getBlogPostsArchive() {

            var query = new $kinvey.Query();
            query.descending('Date');
            query.fields = ['Title', 'Url', 'Archive'];
            // query.orderDesc('Date').select('Title', 'Url', 'Archive');

            var deferred = $q.defer();
            blogPostData.get(query).toPromise().then(function (data) {
                var archivedData = self._buildArchiveData(data);
                deferred.resolve(archivedData);
            },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this.getBlogPostsByMonth = function getBlogPostsByMonth(month) {
            var query = new $kinvey.Query();
            query.matches('Archive', month);

            var deferred = $q.defer();
            blogPostData.get(query).toPromise().then(function (data) {
                deferred.resolve(data);
            },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this._buildArchiveData = function _buildArchiveData(everliveData) {
            var result = {};
            for (var i = 0; i < everliveData.length; i++) {
                var currentBlogPost = everliveData[i];
                if (!result[currentBlogPost.Archive]) {
                    result[currentBlogPost.Archive] = [];
                }
                result[currentBlogPost.Archive].push(currentBlogPost);
            };
            return result;
        };

        this.getTags = function getTags() {
            var query = new $kinvey.Query();
            query.descending('Counter');

            var deferred = $q.defer();
            tagsData.find(query).toPromise().then(function (data) {
                var tags = self._buildTagsCss(data);
                deferred.resolve(tags);
            },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        this._buildTagsCss = function _buildTagsCss(everliveData) {
            var result = [];
            for (var i = 0; i < everliveData.length; i++) {
                var tag = everliveData[i];
                if (tag.Counter < 10) {
                    result.push({
                        Name: tag.Name,
                        CssClass: 'tag1'
                    });
                } else {
                    var size = Math.round(tag.Counter / 10);
                    result.push({
                        Name: tag.Name,
                        CssClass: 'tag' + size
                    })
                }
            };
            return result;
        };
    }]);
})();