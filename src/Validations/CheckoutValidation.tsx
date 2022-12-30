import * as yup from 'yup'

export const checkoutValidation = yup.object().shape({
    firstName: yup
        .string()
        .required('Required'),
    lastName: yup
        .string()
        .required('Required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Required'),
    address: yup
        .string()
        .min(5, 'Please enter full address details')
        .required('Required'),
    postal: yup
        .string()
        .min(6, 'Please enter a valid postal code')
        .required('Required'),
    mobile: yup
        .string()
        .matches(/^[0-9]+$/, 'Mobile number must be only digits')
        .min(8, 'Invalid phone number')
        .required('Required'),
})
