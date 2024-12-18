import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { validatePassword } from "./password-validator";

@Directive({
    selector: '[passwordValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordValidatorDirective,
            multi: true
        }
    ]
})
export class PasswordValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return validatePassword(control)
    }
    registerOnValidatorChange?(fn: () => void): void {

    }

}