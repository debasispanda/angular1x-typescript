import {app} from '../../app';

export class HeaderComponent{
	constructor(){
		this.showAlert();
	}

	showAlert(){
		alert('ok');
	}
}

app.controller('Header', HeaderComponent);