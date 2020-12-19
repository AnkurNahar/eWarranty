const joi = require("joi");

const sanitizeForm = (req, res, next) => {
    
    const body = req.body;

    for (let key in body) {

        if (typeof body[key] === "string") {
            body[key] = body[key].replace(/\s\s+/g, " "); // replace double spaces with single space
            body[key] = body[key].trim();
        }
    }

    return next();
}


const submissionSchema = joi.object({
    userName: joi.string().regex(/^[a-z A-Z]+$/).min(2).required()
        .error(() => "Invalid Name!"),
    email: joi.string().email().required()
        .error(() => "Invalid Email!"),
    phone: joi.string().regex(/^(?:\+88|01)?(?:\d{11}|\d{13})$/).required()
        .error(() => "Invalid Phone Number!"),
    productName: joi.string().min(2).required()
        .error(() => "Invalid Product Name!"),
    startDate: joi.date().required()
        .error(() => "Invalid Start Date!"),
    warrantyPeriod: joi.number().required()
        .error(() => "Invalid Warranty Period!")
    
});


const validateSubmission = (req, res, next) => {

    const userFormData = req.body;

    const isValid = joi.validate(userFormData, submissionSchema);

    if (isValid.error) { 

        return res.status(400).json({
            msg: isValid.error.details[0].message
        });

    } else {
        return next();
    }
}


module.exports = {
    sanitizeForm,
    validateSubmission
}