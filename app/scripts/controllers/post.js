'use strict';
var PostController = angular.module('PostListController', []);
PostController.controller('PostController', function ( BlogService, MetadataService,$stateParams,$scope) {
    $scope.dom = '&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;&lt;/html&gt;';

    var blogObj = this;

    blogObj.post = {};

    BlogService.post($stateParams.id).then(function(post) {
        blogObj.post = post;

        MetadataService.setMetadata({
            title: post.title,
            description: post.excerpt
        });
    });

});


