'use strict';
var BlogListController = angular.module('BlogListController', []);

BlogListController.controller('BlogController', function($anchorScroll, $stateParams, $state, $timeout,BlogService, MetadataService) {

    var blogObj = this;
    var apiCallFunction;

    blogObj.posts = [];
    blogObj.loaded = false;
    blogObj.subtitle = '';

    MetadataService.setMetadata({
        title: 'Blog',
        description: 'A collection of articles on some topics.'
    });

    if (typeof $stateParams.tag !== 'undefined') {
        apiCallFunction = BlogService.allPostsByTag($stateParams.tag);
        blogObj.subtitle = 'tagged with "' + $stateParams.tag + '"';
    } else if (typeof $stateParams.searchTerm !== 'undefined') {
        apiCallFunction = BlogService.allPostsBySearchTerm($stateParams.searchTerm);
        blogObj.subtitle = 'searching "' + $stateParams.searchTerm + '"';
    } else {
        apiCallFunction = BlogService.allPosts();
    }

    apiCallFunction.then(function(posts) {
        blogObj.posts = posts;
        blogObj.loaded = true;
    });

    blogObj.scrollToTop = function() {
        $anchorScroll();
    };

    blogObj.search = function(term) {
        $state.go('postsBySearch', { searchTerm: term });
    };
});

