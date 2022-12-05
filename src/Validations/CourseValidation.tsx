import * as yup from 'yup'

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