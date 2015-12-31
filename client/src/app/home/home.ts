import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgFor} from 'angular2/common';

import {Login} from '../login/login';
import {Users} from '../providers/users';
import {Auth} from '../providers/auth';

@Component({
  selector: 'home',
  directives: [ ...FORM_DIRECTIVES, NgFor, Login ],
  providers: [ Users ],
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {
  listUsers: Object[];
  current_token: string;
  failXhr: string;

  constructor(public users: Users, public auth: Auth) {}

  ngOnInit() {
    console.log('HOME INIT');

    this.auth.token$.subscribe(
      data => this.current_token = data
    );
  }

  retrieveUsers() {
    this.users.getUsers().subscribe(
      list => this.listUsers = list,
      err => this.failXhr = err
    );
  }

}
