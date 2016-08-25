import {app} from '../app';

export class HeaderComponent{
	constructor(){
		showAlert();
	}

	showAlert(){
		alert('ok');
	}
}

app.controller('Header', HeaderComponent);