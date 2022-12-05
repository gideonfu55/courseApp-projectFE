import * as yup from 'yup'

export const loginValidation = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email.'),
    password: yup
        .string()
        .required('Password is required to login.'),
})