import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import * as jwtDecode from 'jwt-decode';


@Injectable()
export class SessionService {

  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('exp');
  }
  addToken(token: string, exp: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('exp', exp);
  }
  decode() {
    return jwtDecode(localStorage.getItem('token'));
  }

  getEmail() {
    return this.decode().email;
  }
  getRole() {
    return this.decode().role;
  }
}
