import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  messageStatus = 'none';
  messageText;

  firstNameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  lastNameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$'), Validators.minLength(6)]);

  constructor(private readonly userService: UserService) { }

  ngOnInit() {
  }

  async onSubmit() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid && this.firstNameFormControl.valid && this.lastNameFormControl.valid) {
      await this.userService.register(this.firstNameFormControl.value, this.lastNameFormControl.value, this.emailFormControl.value, this.passwordFormControl.value)
        .subscribe((res) => {
          this.messageStatus = 'success';
          this.messageText = 'Konto zostało utworzone!';
        }, (error) => {
          if (error.status === 400) {
            this.messageStatus = 'error';
            this.messageText = 'Email jest już zajęty!';
          }
        });
    }
  }
}
