import {HeaderComponent} from './header.component.ts';

// describe("A suite", ()=> {
//   it("contains spec with an expectation", ()=> {
//     expect(true).not.toBe(false);
//   });
// });

// describe("A suite is just a function", ()=> {
//   var a: any;

//   it("and so is a spec", ()=> {
//     a = true;

//     expect(a).toBe(true);
//   });
// });

describe("Controller HeaderComponent", ()=> {
  var scope: ng.IScope,  rootScope: ng.IRootScopeService, interval: ng.IIntervalService, header: HeaderComponent;
  beforeEach(()=>{
      var app = angular.mock.module('app', []);
      angular.mock.inject(function($scope: ng.IScope , $rootScope :ng.IRootScopeService, $interval: ng.IIntervalService){
            scope = $scope;
            rootScope = $rootScope;
            interval = $interval;
            header = new HeaderComponent(scope, rootScope , interval);
      });
  });

  it("and so is a spec", ()=> {
    expect('Debasis Panda').toBe('Debasis Panda');
  });
});