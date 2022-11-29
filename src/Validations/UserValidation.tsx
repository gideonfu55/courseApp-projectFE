import * as yup from 'yup'

export const userSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required(),
    password: yup.string().min(3, 'Password must be at 3 char long'),
    confirmPwd: yup
        .string()
        .required('Password is mandatory')
        .oneOf([yup.ref('password')], 'Passwords does not match'),
    role: yup.string().required('Select Student or Course Creator').oneOf(['student', 'courseCreator']),
})
