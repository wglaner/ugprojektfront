import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {SessionService} from '../../shared/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);

  submitError = false;

  constructor(private readonly userService: UserService,
              private readonly router: Router,
              private readonly sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.removeToken();
  }

  onSubmit() {
    this.userService.login(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe((res: any) => {
        this.sessionService.addToken(res.token, res.exp);
        this.userService.setLogin(true);
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log(error);
        this.submitError = true;
      });
  }
}
