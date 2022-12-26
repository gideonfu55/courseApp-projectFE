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
        .min(5, 'Please enter full details')
        .required(),
    postal: yup
        .string()
        .min(6, 'Please enter a valid postal code')
        .required(),
    mobile: yup
        .string()
        .min(8, 'Please enter a valid mobile number')
        .required()
})
