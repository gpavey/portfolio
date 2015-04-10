'use strict';
var portfolioApp = angular.module('portfolioApp', [
  'ui.router',
  'ProjectListController',
  'BlogListController',
  'PostListController',
  'BlogService',
  'MetadataService',
  'angulartics',
  'angulartics.google.analytics',
  'SmoothScroll',
  'ngAnimate',
  'ui.equalHeights'
  ]);


portfolioApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url         : '/home',
            templateUrl : '../views/home2.html',
            controller  : 'ProjectController'
        })

        .state('mcf', {
          url           : '/mcf',
          templateUrl   : '../views/mcf.html',
          controller    : 'ProjectController'
        })
        .state('taylor', {
          url           : '/taylor',
          templateUrl   : '../views/taylor.html',
          controller    : 'ProjectController'
        })
        .state('evoc', {
          url           : '/evoc',
          templateUrl   : '../views/evoc.html',
          controller    : 'ProjectController'
        })
        .state('pe', {
          url           : '/pe',
          templateUrl   : '../views/pe.html',
          controller    : 'ProjectController'
        })
        .state('aib', {
          url           : '/aib',
          templateUrl   : '../views/aib.html',
          controller    : 'ProjectController'
        })

        .state('ftc', {
          url           : '/ftc',
          templateUrl   : '../views/ftc.html',
          controller    : 'ProjectController'
        })

        .state('nerd', {
          url           : '/nerd',
          templateUrl   : '../views/nerd.html',
          controller    : 'ProjectController'
        })

        .state('travel', {
          url           : '/travel',
          templateUrl   : '../views/travel.html',
          controller    : 'ProjectController'
        })

        .state('portfolio', {
          url           : '/portfolio',
          templateUrl   : '../views/portfolio.html',
          controller    : 'ProjectController'
        })

        .state('bwbs', {
          url           : '/bwbs',
          templateUrl   : '../views/bwbs.html',
          controller    : 'ProjectController'
        })

        .state('logos', {
          url           : '/logos',
          templateUrl   : '../views/logos.html',
          controller    : 'ProjectController'
        })

        .state('posters', {
          url           : '/posters',
          templateUrl   : '../views/posters.html',
          controller    : 'ProjectController'
        })

        .state('card', {
          url           :'/card',
          templateUrl   : '../views/card.html',
          controller    : 'ProjectController'
        })

        .state('blog', {
            url         : "/blog",
            templateUrl : 'views/blog.html',
            controller  : 'BlogController',
            controllerAs: 'blogObj'
        })
        .state('post', {
            url         : '/blog/:id/:title',
            templateUrl : 'views/post.html',
            controller  : 'PostController',
            controllerAs: 'blogObj'
        });

    // $locationProvider.html5Mode(true).hashPrefix('!');

    // $urlRouterProvider.rule(function ($injector, $location) {
    //     var slashHashRegex,
    //         matches,
    //         path = $location.url();

    //     // check to see if the path already has a slash where it should be
    //     if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
    //         return path.substring(0, path.length - 1);
    //     }

    //     // if there is a trailing slash *and* there is a hash, remove the last slash so the route will correctly fire
    //     slashHashRegex = /\/(#[^\/]*)$/;
    //     matches = path.match(slashHashRegex);
    //     if (1 < matches.length) {
    //         return path.replace(matches[0], matches[1]);
    //     }
    // });
});
// $rootScope.$on('$includeContentLoaded', function() {
//     setTimeout(equalheight(),1000);
// });

portfolioApp.routeConfig = {
    // global constant config values live here
    ROOT_URL: '%%ROOT_URL%%',
    API_URL: 'http://geoffpavey.com'
};

