
import {Component} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Auth, CredentialsModel} from '../providers/auth';



@Component({
  selector: 'login-form',
  directives: [ ...FORM_DIRECTIVES ],
  template: `
    <form (submit)="submitForm($event)">
      <input type="text" [(ngModel)]="cred.username" required placeholder="login" />
      <input type="text" [(ngModel)]="cred.password" required placeholder="password" />
      <button type="submit">CONNEXION</button>
    </form>
  `
})
export class Login {
  cred: CredentialsModel = new CredentialsModel();

  constructor(public auth: Auth) {}

  submitForm(e: MouseEvent) {
    e.preventDefault();
    this.auth.authentificate(this.cred);
  }
}
