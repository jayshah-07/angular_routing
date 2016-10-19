import { Component } from "@angular/core";

//import { FriendComponent } from "./friend.component"; 
//import { FriendService } from "./service/friend.service";


@Component({
	selector:	'my-app',
	template: '<h1> This is test </h1>'
})

export class AppComponent{
	componentName:string = "AppComponent";
	constructor(){ }
 }