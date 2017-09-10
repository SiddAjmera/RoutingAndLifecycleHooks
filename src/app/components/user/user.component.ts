import { Component, Input, Output, EventEmitter, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

	@Input() user: User;

	/**
	 * Define an @Output Property that will handle the event emitted from this component.
	 */

	/**
	 * Lifecycle Hooks
	 */
	/*
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
	}*/

	/**
	 * Define a function that will handle the delete icon clicked on this template.
	 */
}