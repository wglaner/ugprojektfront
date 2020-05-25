import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UserService {
  private URL = 'http://localhost:3000/';

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  cast = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  register(firstName: string, lastName: string, email: string, password: string) {
    return this.http.post(this.URL + 'user/register', {
      firstName,
      lastName,
      email,
      password,
      role: 'user',
    });
  }

  login(email: string, password: string) {
    return this.http.post(this.URL + 'user/login', { email, password });
  }
  setLogin(data: boolean) {
    this.isLoggedIn.next(data);
  }
  getUsers() {
    return this.http.get(this.URL + 'user/users');
  }

  deleteUser(id: any) {
      return this.http.delete(`${this.URL}user/${id}`);
  }
}
