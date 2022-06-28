export const validateContactForm = (values) => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
}

export const validateCommentForm = (values) => {
    const errors = {}

    if (!values.rating) {
        errors.rating = "required"
    }

    if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } else if (values.author.length > 15) {
        errors.author = 'Must be 15 characters or less';
    }
    console.log(errors)
    return errors
}