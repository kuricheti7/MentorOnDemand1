import { FormGroup } from '@angular/forms';

export function MustMatch(controlName : string, matchingControlName: string){
    return (formgroup: FormGroup) => {
        const control = formgroup.controls[controlName]
        const matchingControl = formgroup.controls[matchingControlName]

        if(!control || !matchingControl)
        {
            return null;
        }

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}