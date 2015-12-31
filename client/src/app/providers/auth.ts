import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';



export class CredentialsModel {
  constructor(public username: string = '', public password: string = '') {}
}

@Injectable()
export class Auth {
  token$: Observable<string>;
  private _tokenObserver: any;

  constructor(public http: Http) {
    this.token$ = new Observable(observer => {this._tokenObserver = observer
      this._tokenObserver.next(localStorage.getItem('id_token'));

    }).share();

  }

  public authentificate(cred: CredentialsModel) {
    const credentials = 'name=' + cred.username + '&password=' + cred.password;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:8080/api/authenticate', credentials, {headers})
      .map(res => res.json())
      .subscribe(
        data => {this._saveJwt(data.id_token); },
        err => console.log(err)
      );
  }

  public deconnect() {
    localStorage.setItem('id_token', null);
    this._tokenObserver.next(null);
  }

  private _saveJwt(jwt) {
    if (jwt) {
      localStorage.setItem('id_token', jwt);
      this._tokenObserver.next(jwt);
    }
  }

}
