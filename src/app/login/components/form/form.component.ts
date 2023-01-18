import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { hasError } from '../../../utils';
import { Login } from '../../models';

@Component({
  selector: 'app-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() onsubmit = new EventEmitter<Login>()
  form!: FormGroup

  errorMsg = {
    required: 'Ce champs est obligatoire',
    email: 'Veuillez entrer un email valide',
    minLength: '8 caractères minimum'
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    this.onsubmit.emit(this.form.value)
  }

  getError(controlName: string, errorKey: string) {
    return hasError(this.form, controlName, errorKey)
  }
}
