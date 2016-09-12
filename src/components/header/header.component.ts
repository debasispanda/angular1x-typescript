export interface IHeader  extends ng.IScope
{
    author: string;
    currentDateTime: Number;
}

export class HeaderComponent{
	public author:string;
	public currentDateTime:Number;
	public $rootScope: any;
	static $inject = ["$scope", "$rootScope", "$interval"];
	constructor($scope: any, $rootScope: any, $interval: any){
		let self = this;	
		this.$rootScope = $rootScope;
			
		this.author = "Debasis Panda";
		this.currentDateTime = Date.now();
		$interval(function(){
			self.setCurrentTime();				
		}, 1000);	
		this.$rootScope.name = 'Anagular1x + TypeScript + Webpack';	
		this.showAlert();		
	}	
	
	public showAlert():void{
		alert('Wow, its working fine.');
	}
	public setCurrentTime():void{
		let self = this, $scope: any;		
		this.currentDateTime = Date.now();
		this.$rootScope.message = 'Thank you for using the app.';	
	}
	
}