const jwt = require('jsonwebtoken');

const generateGWT = (id, email, role, name) => {

    return jwt.sign(
        {id, email, role, name},
        'some_string', // TODO Change secret key !
        {expiresIn: "24h"}
    );

};

module.exports = generateGWT;