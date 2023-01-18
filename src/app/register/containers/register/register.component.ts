import { Component } from '@angular/core';
import { RegisterFormInput, RegisterResponse } from '../../models';
import Swal from 'sweetalert2'
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerResponse!: RegisterResponse

  constructor(private registerService: RegisterService) {}

  onRegister(data: RegisterFormInput) {
    this.registerService.register(data)
    .subscribe(
      (response) => {
        this.registerResponse = response
        this.sweetAlert(response.status, response.message)
      }
    )
  }

  sweetAlert(type: 'error' | 'success', message: string) {
    Swal.fire({
      position: 'top-end',
      icon: type,
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
