import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { ValidatePhoneNumberService } from "../services/validate-phone-number.service";
import { ValidatePhoneNumber } from '../models'

export class PhoneValidator {
  static createValidator(validatePhoneService: ValidatePhoneNumberService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return validatePhoneService.validatePhoneNumber(control.value)
        .pipe(
          map(
            (result: ValidatePhoneNumber) =>
            !result.phone_valid ? { invalidPhoneNumber: true} : null
          )
        )
    }
  }
}
