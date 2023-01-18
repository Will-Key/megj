import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  submit(payload: Login) {
    this.authService.login(payload.email, payload.password).subscribe(
      (user) => {
        if (user) this.router.navigate(['/dashboard'])
      }
    )
  }
}
