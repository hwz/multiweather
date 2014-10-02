'use strict';

/**
 * @ngdoc function
 * @name multiweatherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the multiweatherApp
 */
angular.module('multiweatherApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
