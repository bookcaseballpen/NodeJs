'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope,Movie) {
    $scope.movies = Movie.getList().$object;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.movies = [
        {
              title: 'A New Hope',
              url: 'http://youtube.com/embed/1g3_CFmnU7k'
            },
        {
              title: 'The Empire Strikes Back',
              url: 'http://youtube.com/embed/96v4XraJEPI'
            },
        {
              title: 'Return of the Jedi',
              url: 'http://youtube.com/embed/5UfA_aKBGMc'
            }
      ];
  });
