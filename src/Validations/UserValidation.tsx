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

export const loginValidation = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email.'),
    password: yup
        .string()
        .required('Password is required to login.'),
})

export const addCourseValidation = yup.object().shape({
    title: yup
        .string()
        .min(5, 'Course title must be at least 5 characters.'),
    authorName: yup
        .string()
        .min(5, 'Please include your full name.'),
    summary: yup
        .string()
        .min(10, 'Your summary should be at least 10 characters.'),
    price: yup
        .number()
        .min(50, 'The minimal price for each course is $50.'),
})
