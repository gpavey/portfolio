'use strict';
var ProjectListController = angular.module('ProjectListController', []);

ProjectListController.controller('ProjectController', function ($rootScope,$scope) {

  $scope.slide = 'slide-left';
  $rootScope.back = function(){
    $scope.slide = 'slide-right';
    $window.history.back();
  };
  $rootScope.forward = function(){
    $scope.slide = 'slide-left';
    $window.history.forward();
  };
  $rootScope.$on('$stateChangeSuccess',function(){
    setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, 300)},1000);
  });

  $scope.filters = {};

  $scope.projects = [
    {'name'      : 'March Conservation Fund',
      'url'      : 'mcf',
      'img'      : 'images/mcf.jpg',
      'category' : [
      'Web',
      'Press'
      ],
    },

    {'name'      : 'packiteasy',
      'url'      : 'pe',
      'img'      : 'images/pe.jpg',
      'category' : [
      'Web',
      'HTML5'
      ],
    },
    {'name'       : 'Bike Works Beach & Sports',
      'url'       : 'bwbs',
      'img'       : 'images/bwbs.jpg',
      'category'  : [
      'Web',
      'HTML5',
      'Ang'
      ],
    },
    {'name'       : 'eVOC Insights',
      'url'       : 'evoc',
      'img'       : 'images/evoc.jpg',
      'category'  : [
      'Web',
      'Press'
      ],
    },
    {'name'       : 'Aviation Island Brewing',
      'url'       : 'aib',
      'img'       : 'images/aib.jpg',
      'category'  : [
      'Web',
      'Branding'
      ],
    },
    {'name'      : "Taylor's Light",
      'url'      : 'taylor',
      'img'      : 'images/taylor.jpg',
      'category' : [
      'Web',
      'Press'
      ],
    },
    {'name'      : 'SF Film Nerd',
      'url'      : 'nerd',
      'img'      : 'images/film.jpg',
      'category' : [
      'Web',
      'Ruby'
      ],
    },
    {'name'      : 'Portfolio',
      'url'      : 'portfolio',
      'img'      : 'images/portfolio.jpg',
      'category' : [
      'Web',
      'Ang'
      ],
    },
    {'name'      : 'For The Cause',
      'url'      : 'ftc',
      'img'      : 'images/cause.jpg',
      'category' : [
      'Web',
      'Ruby'
      ],
    },
    {'name'      : 'Business Card',
      'url'      : 'card',
      'img'      : 'images/gp_white.png',
      'category' : [
      'ill'
      ],
    },

    {'name'      : 'Print work',
      'url'      : 'posters',
      'img'      : 'images/windsurfing_thumb.jpg',
      'category' : [
      'ill'
      ],
    },
    {'name'      : 'Various Logos',
      'url'      : 'logos',
      'img'      : 'images/jl.png',
      'category' : [
      'ill'
      ],
    },

  ];
});


