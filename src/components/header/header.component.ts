export class HeaderComponent{
	public author:string;
	public currentDateTime:Number;
	constructor(){
		this.showAlert();
		this.author = "Debasis Panda";
		this.setCurrentTime();		
	}	
	showAlert():void{
		alert('Wow, its working fine.');
	}
	setCurrentTime():void{
		let self = this;
		let dateTime: Date = new Date();
		this.currentDateTime = dateTime.valueOf();
		// setTimeout(function(){
		// 	self.setCurrentTime();
		// }, 50)
	}
}