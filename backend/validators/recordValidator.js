const { body, validationResult } = require('express-validator');

const validateRecord = [
    body('title').notEmpty().withMessage('Title is required').trim(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateRecord };