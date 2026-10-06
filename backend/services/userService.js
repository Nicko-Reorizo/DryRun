const bcrypt = require('bcryptjs');

const hashPassword = async (rawPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);
    return hashedPassword;
};

module.exports = { hashPassword };