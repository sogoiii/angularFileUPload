'use strict';

describe('Directive: myCustomUpload', function () {
  beforeEach(module('angularUiTestingApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<my-custom-upload></my-custom-upload>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the myCustomUpload directive');
  }));
});
