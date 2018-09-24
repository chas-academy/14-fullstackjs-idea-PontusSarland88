const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProductInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.image = !isEmpty(data.image) ? data.image : '';

    if(!Validator.isLength(data.name, {min: 3, max: 100})) {
        errors.name = 'Name must be between 3 and 100 characters';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }

    if(Validator.isEmpty(data.image)) {
        errors.image = 'Image is required';
    }

    if(!Validator.isURL(data.image)) {
        errors.image = "Must be a valid link";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}