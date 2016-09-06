/// <reference path="../typings/index.d.ts"/>
import 'angular';
import {HeaderComponent} from './components/header/header.component';

export let app = angular.module('app',  []);
app.controller('Header', HeaderComponent);

angular.bootstrap(document, ["app"]);

