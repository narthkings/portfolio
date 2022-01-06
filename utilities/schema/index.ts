import * as Yup from 'yup';

export const MessageSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Minimum 3 characters required ❌')
        .required('Name is required❗️'),
    email: Yup.string()
        .email('Invalid email address 🙁')
        .required('Email is required ❗️'),
    message: Yup.string()
        .required('Message is required ❗️'),
})