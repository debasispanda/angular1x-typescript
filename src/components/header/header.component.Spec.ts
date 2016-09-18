import {HeaderComponent} from './header.component.ts';

describe("Controller HeaderComponent", ()=> {
  var scope: any, rootScope: any, interval: any, header: any;
  beforeEach(()=>{
      inject(($rootScope :ng.IRootScopeService, $interval: ng.IIntervalService) => {
            scope = $rootScope.$new();
            rootScope = $rootScope;
            interval = $interval;
            header = new HeaderComponent(scope, rootScope , interval);
      });
  });

  it("should match auther", ()=> {
    expect(header.author).toBe('Debasis Panda');
  });
});