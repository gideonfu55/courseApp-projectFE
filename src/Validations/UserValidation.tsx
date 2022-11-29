import * as yup from 'yup'

export const userSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email()
        .required('Email is required'),
    password: yup
        .string()
        .min(5, 'Password must be more than 5 characters long'),
    confirmPwd: yup
        .string()
        .required('Password is required')
        .oneOf([yup.ref('password')], 'Passwords do not match'),
    userType: yup.string()
        .required('Select Student or Course Creator')
        .oneOf(['student', 'courseCreator']),
})
