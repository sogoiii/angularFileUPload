'use strict';

angular.module('angularUiTestingApp')
  .controller('FileUploadCtrl', ['$scope', function ($scope) {

    $scope.files = [];
    $scope.percentage = 0;

    $scope.upload = function () {
        if($scope.files.length){
            console.log('controller: We have a file, will upload')
            $scope.files[0].submit(); 
            $scope.files = [];  
        } else {
          console.log('controller: no files to upload, will do nothing')
        }
    };

  }]);
