import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const validatePassword: ValidatorFn = (control: AbstractControl): null | ValidationErrors => {
    if (control) {
        const value = control.value as string

        let lenCheck = false
        if (value.length >= 6 && value.length <= 10)
            lenCheck = true

        if (!lenCheck)
            return {
                lengthcheck: {
                    actual: value.length,
                    min: 6,
                    max: 10
                }
            }

        let upperCheck = false
        for (const ch of value) {
            if (ch >= 'A' && ch <= 'Z') {
                upperCheck = true
                break;
            }
        }

        if (!upperCheck)
            return { uppercheck: 'at least one upercase must be present' }

        return null
    }
    else
        return null
}