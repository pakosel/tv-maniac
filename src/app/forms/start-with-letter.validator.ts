import {AbstractControl, ValidationErrors} from '@angular/forms';

export function startsWithLetterValidator(upperOnly = false) {
  return (control: AbstractControl): ValidationErrors | null => {
    const rule = upperOnly ? /^[A-Z].*/ : /^[a-zA-Z].*/;
    const isValid = rule.test(control.value);
    return isValid ? null : {startsWithLetter: true};
  };
}
