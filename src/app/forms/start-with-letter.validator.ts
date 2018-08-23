import {AbstractControl, ValidationErrors} from '@angular/forms';

export function startsWithLetterValidator(control: AbstractControl): ValidationErrors | null {
  const isValid = /^[a-zA-Z].*/.test(control.value);
  return isValid ? null : { startsWithLetter: true };
}
