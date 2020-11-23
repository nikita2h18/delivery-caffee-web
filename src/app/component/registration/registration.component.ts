import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegistrationService} from "../../service/RegistrationService";
import {UserCredentials} from "../../dto/UserCredentials";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  public registerUser: UserCredentials = new UserCredentials();

  constructor(
    private registerService: RegistrationService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  public register = (): void => {
    this.registerService
      .register(this.registerUser)
      .subscribe(
        (): void => {
          this.router.navigateByUrl('/');
        },
      );
  };

  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getLoginErrorMessage() {
    return this.login.hasError('required')
      ? 'You must enter a login'
      :
      '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required')
      ? 'You must enter a password'
      :
      'Not a valid password';
  }
}
