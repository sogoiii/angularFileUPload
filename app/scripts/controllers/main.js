'use strict';

angular.module('angularUiTestingApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('main controller was called')



    $scope.getImage1 = function(id){
    	$scope.imageId = id;
    }



  });
