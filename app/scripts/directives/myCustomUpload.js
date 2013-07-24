'use strict';

angular.module('angularUiTestingApp')
  .directive('myCustomUpload', [function () {
    return {
      controller: 'FileUploadCtrl',
      scope:{},
		template: 
		    '<h2>Upload the file</h2>' +
		  '<div class="control-group">'+
				'<div class="controls">'+
					'<span class="btn btn-success fileinput-button">'+
						'<i class="icon-plus icon-white"></i>'+
						'<input type="file" name="file" data-url="/file-upload" multiple>' +
						'<span>Add files...</span>'+
					'</span>'+
		            '<span class="btn btn-primary fileinput-button" ng-click="upload()">'+
		                '<i class="icon-upload icon-white"></i>'+
		                '<span>Start upload</span>'+
		            '</span>'+
				'</div>'+
			'</div>'+
			'<div>'+
				'<span ng-show="!files.length">No files selected</span>'+
				'<ul>'+
					'<li ng-repeat="file in files">{{file.files[0].name}}</li>'+
				'</ul>'+
			'</div>' +
		    '<span>{{percentage}}%</span>'+ 
		    '<div class="progress" ng-show="percentage">'+
		        '<div class="bar" style="width: {{percentage}}%;"></div>'+
		    '</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log('directive command')
        // element.text('this is the myCustomUpload directive');
        var inputEL = $(element).find('input[type=file]')

        inputEL.fileupload({
            dataType: 'text',
            paramName: 'myFile',
            add: function (e, data) {
                scope.$apply(function(){
                   scope.files.push(data) 
                })
            },
            progress: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                scope.$apply(function() {
                    scope.percentage = progress;
                });
            },
            done: function (e, data) {
              console.log('directive: done called')
            }
        });
        
      }
    };
  }]);
