import { Component, Input, Output, EventEmitter, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@Input() user: User;
	@Output() deleteUser: EventEmitter<string> = new EventEmitter<string>();

	ngOnChanges() {
		console.log('ngOnChanges called');
	}

	ngOnInit() {
		console.log('ngOnInit called');
	}

	ngDoCheck() {
		console.log('ngDoCheck called');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit called');
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked called');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit called');
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked called');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy called');
	}

	delete(userName: string) {
		this.deleteUser.emit(userName);
	}
}