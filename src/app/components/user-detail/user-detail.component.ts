import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
	
	private currentUser: User;
  	constructor(private activatedRoute: ActivatedRoute) { }

  	ngOnInit() {
		this.activatedRoute.params.subscribe((params) => {
			let currentUserId = +params['id'];
			console.log('got the userID as : ', currentUserId);
			console.log('got the params object as : ', params);
		});

		this.activatedRoute.queryParams.subscribe((queryParams) => {
			console.log('got the params query params as : ', queryParams);
		});
  	}

}
