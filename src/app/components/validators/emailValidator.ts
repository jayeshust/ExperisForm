import { FormControl, ValidatorFn, AbstractControl } from "@angular/forms";

export function EmailValidator(confirmEmailInput: string): ValidatorFn {
  let confirmEmailControl: AbstractControl;
  let emailControl: AbstractControl;
  return (control: AbstractControl): {[key: string]: boolean} | any => {
  // return (control: FormControl) => {
    if (!control.parent) {
      return null;
    }

    if (!confirmEmailControl) {
      confirmEmailControl = control;
      emailControl = control.parent.get(confirmEmailInput) as FormControl;
      emailControl.valueChanges.subscribe(() => {
        confirmEmailControl.updateValueAndValidity();
      });
    }

    if ((emailControl.value.length>0 &&confirmEmailControl.value.length>0)&&
      (emailControl.value.toLocaleLowerCase() !==
      confirmEmailControl.value.toLocaleLowerCase())
    ) {
      return {
        "notMatch": true,
      };
    }
    return null;
  };
}


/** A hero's name can't match the given regular expression */
// export function EmailValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} | null => {
//     const forbidden = nameRe.test(control.value);
//     return forbidden ? {forbiddenName: {value: control.value}} : null;
//   };
// }
