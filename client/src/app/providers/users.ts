import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';

@Injectable()
export class Users {

    constructor(public http: Http, public authHttp: AuthHttp) {}

    getUsers() {
      var jwt = localStorage.getItem('id_token');
      var headers = new Headers();
      headers.append('x-access-token', jwt);
      headers.append('Authorization', 'Bearer ' + jwt);

      return this.http.get('http://localhost:8080/api/users?token='+jwt).map(res => res.json());
    }
}
