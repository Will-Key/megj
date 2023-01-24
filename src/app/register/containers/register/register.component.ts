import { Component } from '@angular/core'
import { RegisterFormInput, RegisterResponse } from '../../models'
import { RegisterService } from '../../services/register.service'
import { sweetAlert } from '../../../utils'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerResponse!: RegisterResponse

  constructor(private registerService: RegisterService) {}

  onRegister(data: RegisterFormInput) {
    this.registerService.register(data).subscribe(response => {
      this.registerResponse = response
      sweetAlert(response.status, response.message)
    })
  }
}
