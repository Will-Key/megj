import { FormGroup } from "@angular/forms"

export const hasError = (form: FormGroup, controlName: string, errorKey: string)=> {
  const control = form.get(controlName)
  return (
    control?.invalid &&
    (control?.dirty || control?.touched) &&
    !!control?.errors?.[errorKey]
  )
}
