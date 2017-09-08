import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	
  public users: User[] = [];
  private userName: string;

  constructor() { }

  ngOnInit() {
  	this.users.push({ id: (Math.floor(Math.random() * 6) + 1), name: 'John Doe' });
  }

  addUser() {
  	this.users.push({ id: (Math.floor(Math.random() * 6) + 1), name: this.userName });
  	this.userName = '';
  }

  deleteClicked($event) {
  	this.users.splice(this.users.findIndex((user) => {
		return user.name === $event;
  	}), 1);
  }

}