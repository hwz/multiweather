'use strict';

/**
 * @ngdoc function
 * @name multiweatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the multiweatherApp
 */
angular.module('multiweatherApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
