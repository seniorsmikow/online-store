const jwt = require('jsonwebtoken');

const generateGWT = (id, email, role, name) => {

    return jwt.sign(
        {id, email, role, name},
        process.env.SECRET_KEY, 
        {expiresIn: "24h"}
    );

};

module.exports = generateGWT;