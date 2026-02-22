import { RegistrationForm } from "../src/components/RegistrationForm";

describe("Registration form unit tests", () => {
    let form: RegistrationForm

    beforeAll(() => {
        form = new RegistrationForm()
    })

    describe('validate name', () => {
        it('should return true if name contains at least 2 characters', () => {
            const name = form.validateName('Mo ')
            expect(name.isValid).toBe(true)
        })

        it('should return true if name contains 20 characters', () => {
            const name = form.validateName(' Alexandros Nikolaous')
            expect(name.isValid).toBe(true)
        })

        it('should return error if name is empty', () => {
            const name = form.validateName('')
            expect(name.isValid).toBe(false)
            expect(name.error).toBe('The first name cannot be empty!')
        })

        it('should return error if name is only spaces', () => {
            const name = form.validateName('   ')
            expect(name.isValid).toBe(false)
            expect(name.error).toBe('The first name cannot be empty!')
        })

        it('should return error if name is less than 2 characters', () => {
            const name = form.validateName('I')
            expect(name.isValid).toBe(false)
            expect(name.error).toBe('The first name should contain 2 to 20 characters')
        })

        it('should return error if name is more than 20 characters', () => {
            const name = form.validateName('Alexandrous Nikolaous')
            expect(name.isValid).toBe(false)
            expect(name.error).toBe('The first name should contain 2 to 20 characters')
        })
    })

    describe('validate last name', () => {
        it('should return true if last name contains at least 2 characters', () => {
            const lastName = form.validateLastName('Mo ')
            expect(lastName.isValid).toBe(true)
        })

        it('should return true if last name contains 30 characters', () => {
            const lastName = form.validateLastName('Fernández de la Vega-Martínez')
            expect(lastName.isValid).toBe(true)
        })

        it('should return error if last name is empty', () => {
            const lastName = form.validateLastName('')
            expect(lastName.isValid).toBe(false)
            expect(lastName.error).toBe('The last name cannot be empty!')
        })

        it('should return error if last name is only spaces', () => {
            const lastName = form.validateLastName('   ')
            expect(lastName.isValid).toBe(false)
            expect(lastName.error).toBe('The last name cannot be empty!')
        })

        it('should return error if last name is less than 2 characters', () => {
            const lastName = form.validateLastName('I')
            expect(lastName.isValid).toBe(false)
            expect(lastName.error).toBe('The last name should contain 2 to 30 characters')
        })

        it('should return error if last name is more than 30 characters', () => {
            const lastName = form.validateLastName('Fernández de la Vega y Martínez')
            expect(lastName.isValid).toBe(false)
            expect(lastName.error).toBe('The last name should contain 2 to 30 characters')
        })
    })

    describe('validate email', () => {
        it('should return true for valid email', () => {
            const email = form.validateEmail(' test@example.com')
            expect(email.isValid).toBe(true)
        })

        it('should return true for valid email with subdomain', () => {
            const email = form.validateEmail('user@mail.example.com ')
            expect(email.isValid).toBe(true)
        })

        it('should return true for valid email with numbers and special chars', () => {
            const email = form.validateEmail('test123.test@example-domain.com')
            expect(email.isValid).toBe(true)
        })

        it('should return error if email is empty', () => {
            const email = form.validateEmail('')
            expect(email.isValid).toBe(false)
            expect(email.error).toBe('Email is required field!')
        })

        it('should return error if email is only spaces', () => {
            const email = form.validateEmail('   ')
            expect(email.isValid).toBe(false)
            expect(email.error).toBe('Email is required field!')
        })

        it('should return error if email does not contain @ symbol', () => {
            const email = form.validateEmail(' testexample.com')
            expect(email.isValid).toBe(false)
            expect(email.error).toBe('Incorrect email format')
        })

        it('should return error if email does not contain dot in domain', () => {
            const email = form.validateEmail('test@example ')
            expect(email.isValid).toBe(false)
            expect(email.error).toBe('Incorrect email format')
        })
    })

    describe('validate password', () => {
        it('should return true if password contains at least 8 characters', () => {
            const password = form.validatePassword(' Test123!')
            expect(password.isValid).toBe(true)
        })

        it('should return error if password is empty', () => {
            const password = form.validatePassword('')
            expect(password.isValid).toBe(false)
            expect(password.error).toBe('Password is required field!')
        })

        it('should return error if password contains only spaces', () => {
            const password = form.validatePassword('   ')
            expect(password.isValid).toBe(false)
            expect(password.error).toBe('Password is required field!')
        })

        it('should return error if password contains less than 8 characters', () => {
            const password = form.validatePassword(' tesT12!')
            expect(password.isValid).toBe(false)
            expect(password.error).toBe('Password must contain 8 to 20 characters')
        })

        it('should return error if password contains more than 20 characters', () => {
            const password = form.validatePassword('Test.Test.Test.Test123')
            expect(password.isValid).toBe(false)
            expect(password.error).toBe('Password must contain 8 to 20 characters')
        })

        it('should return error if password does not contain at least one lowercase letter', () => {
            const password = form.validatePassword('TEST.PASSWORD1! ')
            expect(password.isValid).toBe(false)
            expect(password.error).toBe('Password must contain at least one lowercase letter')
        })

        it('should return error if password does not contain at least one uppercase letter', () => {
            const password = form.validatePassword('test.password1!')
            expect(password.isValid).toBe(false)
            expect(password.error).toBe('Password must contain at least one uppercase letter')
        })

        it('should return error if password does not contain at least one number', () => {
            const password = form.validatePassword('Test.password!')
            expect(password.isValid).toBe(false)
            expect(password.error).toBe('Password must contain at least one number')
        })

        it('should return error if password does not contain at least one special character', () => {
            const password = form.validatePassword('Testpassword1123456')
            expect(password.isValid).toBe(false)
            expect(password.error).toBe('Password must contain at least one special character')
        })
    })

    describe('validate checkbox status', () => {
        it('should return true if checkbox is checked', () => {
            const isChecked = form.validateCheckbox(true)
            expect(isChecked.isValid).toBe(true)
        })
        it('should return error if checkbox is not checked', () => {
            const isChecked = form.validateCheckbox(false)
            expect(isChecked.isValid).toBe(false)
            expect(isChecked.error).toBe('Accepting Terms of Use & Privacy Policy is required')
        })
    })
})