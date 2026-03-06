type ResultValidation = {
    isValid: boolean
    error?: string
}

export class RegistrationForm {

    validateName(name: string): ResultValidation {
        if (name.trim().length === 0) {
            return {
                isValid: false, 
                error: 'The first name cannot be empty!'
            }
        } else if (name.trim().length < 2 || name.trim().length > 20) {
            return {
                isValid: false, 
                error: 'The first name should contain 2 to 20 characters'
            } 
        }

        return {isValid: true}
    }

    validateLastName(lastName: string): ResultValidation {
        if (lastName.trim().length === 0) {
            return {
                isValid: false, 
                error: 'The last name cannot be empty!'
            } 
        } else if (lastName.trim().length < 2 || lastName.trim().length > 30) {
            return {
                isValid: false, 
                error: 'The last name should contain 2 to 30 characters'
            }  
        }
        
        return {isValid: true}
    }

    validateEmail(email: string): ResultValidation {
        if (email.trim().length === 0) {
            return {
                isValid: false, 
                error: 'Email is required field!'
            }  
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!regex.test(email.trim())) {
            return {
                isValid: false, 
                error: 'Incorrect email format'
            }   
        }

        return {isValid: true}
    }

    validatePassword(password: string): ResultValidation {
        if (password.trim().length === 0) {
            return {
                isValid: false, 
                error: 'Password is required field!'
            }
        }
        if (password.trim().length < 8 || password.trim().length > 20) {
            return {
                isValid: false, 
                error: 'Password must contain 8 to 20 characters'
            }
        }
        if (!/[a-z]/.test(password.trim())) {
            return {
                isValid: false, 
                error: 'Password must contain at least one lowercase letter'
            }
        }
        if (!/[A-Z]/.test(password.trim())) {
            return {
                isValid: false, 
                error: 'Password must contain at least one uppercase letter'
            } 
        }
        if (!/\d/.test(password.trim())) {
            return {
                isValid: false, 
                error: 'Password must contain at least one number'
            }  
        }
        if (!/[\W_]/.test(password.trim())) {
            return {
                isValid: false, 
                error: 'Password must contain at least one special character'
            }
        }

        return {isValid: true}
    }

    validateCheckbox(isChecked: boolean): ResultValidation {
        if (!isChecked) {
            return {
                isValid: false, 
                error: 'Accepting Terms of Use & Privacy Policy is required'
            }
        }

        return {isValid: true}
    }
}