export class HeaderComponent{
	public author:string;
	public currentDateTime:Date;
	constructor(){
		this.showAlert();
		this.author = "Debasis Panda";
		//this.setCurrentTime();		
	}	
	showAlert():void{
		alert('Wow, its working fine.');
	}
	setCurrentTime():void{
		let self = this;
		this.currentDateTime = new Date();
		setTimeout(function(){
			self.setCurrentTime();
		}, 50)
	}
}