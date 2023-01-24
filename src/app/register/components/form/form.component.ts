import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ValidatePhoneNumberService } from '../../../services/validate-phone-number.service'
import { PhoneValidator, hasError } from '../../../utils'
import { RegisterFormInput, RegisterResponse } from '../../models'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnChanges {
  disableBtn = false
  form!: FormGroup
  @Input() registerResponse!: RegisterResponse
  @Output() onsubmit = new EventEmitter<RegisterFormInput>()

  constructor(private validatePhoneNumberService: ValidatePhoneNumberService) {}

  ngOnInit(): void {
    this.initForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['registerResponse'] &&
      changes['registerResponse'].currentValue
    ) {
      if (this.registerResponse.status === 'success') {
        this.disableBtn = false
        this.form.reset()
      }
    }
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', {
        validators: Validators.required,
      }),
      firstName: new FormControl('', {
        validators: Validators.required,
      }),
      fbName: new FormControl('', {
        validators: Validators.required,
      }),
      phoneNumber: new FormControl('', {
        updateOn: 'blur',
        validators: Validators.required,
        //asyncValidators: PhoneValidator.createValidator(this.validatePhoneNumberService)
      }),
      whaPhoneNumber: new FormControl('', {
        updateOn: 'blur',
        validators: Validators.required,
        //asyncValidators: PhoneValidator.createValidator(this.validatePhoneNumberService)
      }),
      city: new FormControl('', {
        validators: Validators.required,
      }),
      intention: new FormControl('', {
        validators: Validators.required,
      }),
      participation: new FormControl('', {
        validators: Validators.required,
      }),
    })
  }

  onSubmit() {
    this.disableBtn = true
    this.onsubmit.emit(this.form.value)
  }

  getError(controlName: string, errorKey: string) {
    return hasError(this.form, controlName, errorKey)
  }
}
